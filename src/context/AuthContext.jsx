// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Module-level cache — Firebase loads once, then all calls are synchronous
let _fb = null;

async function loadFirebase() {
  if (_fb) return _fb;
  const [
    { onAuthStateChanged, signInWithEmailAndPassword, signOut: fbSignOut, createUserWithEmailAndPassword },
    { doc, setDoc, serverTimestamp },
    client,
    { getProfile, createPharmacy },
  ] = await Promise.all([
    import("firebase/auth"),
    import("firebase/firestore"),
    import("@/shared/lib/firebase/client"),
    import("@/shared/lib/firebase/db"),
  ]);
  _fb = {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    fbSignOut,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    serverTimestamp,
    auth: client.auth,
    db: client.db,
    getProfile,
    createPharmacy,
  };
  return _fb;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub = () => {};
    let cancelled = false;

    loadFirebase().then(({ onAuthStateChanged, auth, getProfile }) => {
      if (cancelled) return;
      unsub = onAuthStateChanged(auth, async (u) => {
        if (!u) {
          setUser(null);
          setProfile(null);
          setLoading(false);
          return;
        }
        setLoading(true);
        setUser(u);
        try {
          const p = await getProfile(u.uid);
          setProfile(p);
        } catch (e) {
          console.error("Failed to load profile:", e);
          setProfile(null);
        } finally {
          setLoading(false);
        }
      });
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  async function signIn(email, password) {
    const { signInWithEmailAndPassword, auth } = await loadFirebase();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign in" };
    }
  }

  async function signUp(email, password, profileData = {}) {
    const { createUserWithEmailAndPassword, doc, setDoc, serverTimestamp, auth, db, getProfile, createPharmacy } =
      await loadFirebase();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = cred.user.uid;
      await setDoc(
        doc(db, "profiles", uid),
        { ...profileData, created_at: serverTimestamp(), updated_at: serverTimestamp() },
        { merge: true }
      );
      if (profileData.role === 'pharmacy') {
        await createPharmacy({
          owner_user_id: uid,
          name: profileData.full_name || email,
        });
      }
      const p = await getProfile(uid);
      setProfile(p);
      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign up" };
    }
  }

  async function signOutUser() {
    const { fbSignOut, auth } = await loadFirebase();
    return fbSignOut(auth);
  }

  async function refreshProfile() {
    if (!user) return;
    const { getProfile } = await loadFirebase();
    try {
      const p = await getProfile(user.uid);
      setProfile(p);
    } catch (e) {
      console.error("Failed to refresh profile:", e);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signIn,
        signUp,
        logout: signOutUser,
        signOut: signOutUser,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
