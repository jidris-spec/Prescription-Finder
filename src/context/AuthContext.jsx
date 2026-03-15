// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const PROFILE_CACHE_KEY = "medfind_profile_cache";

function writeCachedProfile(uid, profile) {
  try {
    localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify({ id: uid, data: profile }));
  } catch {}
}

function clearCachedProfile() {
  try {
    localStorage.removeItem(PROFILE_CACHE_KEY);
  } catch {}
}

const AuthContext = createContext(null);

// Firebase module cache
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
        console.log("[Auth] onAuthStateChanged → uid:", u?.uid ?? "null (signed out)");
        if (!u) {
          setUser(null);
          setProfile(null);
          clearCachedProfile();
          setLoading(false);
          return;
        }

        // Reset state immediately
        setUser(u);
        setProfile(null);
        setLoading(true);

        try {
          const p = await getProfile(u.uid);

          if (!cancelled) {
            if (p && !p.role) {
              console.error("Profile missing role:", p);
            }

            setProfile(p);

            if (p) writeCachedProfile(u.uid, p);
            else clearCachedProfile();
          }
        } catch (e) {
          console.error("Failed to load profile:", e);
          if (!cancelled) setProfile(null);
        } finally {
          if (!cancelled) setLoading(false);
        }
      });
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  // ✅ FIXED SIGN IN (single, correct version)
  async function signIn(email, password) {
    const { signInWithEmailAndPassword, auth } = await loadFirebase();

    try {
      console.log("[Auth] signIn → before | current uid:", auth.currentUser?.uid ?? "null", "| target:", email);

      clearCachedProfile();

      const cred = await signInWithEmailAndPassword(auth, email, password);

      console.log("[Auth] signIn → after  | new uid:", cred.user.uid, "| email:", cred.user.email);

      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign in" };
    }
  }

  async function signUp(email, password, profileData = {}) {
    const {
      createUserWithEmailAndPassword,
      doc,
      setDoc,
      serverTimestamp,
      auth,
      db,
      getProfile,
      createPharmacy,
    } = await loadFirebase();

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = cred.user.uid;
      await setDoc(
        doc(db, "profiles", uid),
        { ...profileData, created_at: serverTimestamp(), updated_at: serverTimestamp() },
        { merge: true }
      );

      if (profileData.role === "pharmacy") {
        await createPharmacy({
          owner_user_id: uid,
          name: profileData.full_name || email,
        });
      }

      const p = await getProfile(uid);
      setProfile(p);
      writeCachedProfile(uid, p);

      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign up" };
    }
  }

  async function signOutUser() {
    clearCachedProfile();
    const { fbSignOut, auth } = await loadFirebase();
    console.log("[Auth] signOut → before | uid:", auth.currentUser?.uid ?? "null");
    await fbSignOut(auth);
    console.log("[Auth] signOut → after  | uid:", auth.currentUser?.uid ?? "null");
  }

  async function refreshProfile() {
    if (!user) return;
    const { getProfile } = await loadFirebase();

    try {
      const p = await getProfile(user.uid);
      setProfile(p);
      writeCachedProfile(user.uid, p);
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
