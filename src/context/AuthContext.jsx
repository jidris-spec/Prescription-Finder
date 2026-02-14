// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "@/shared/lib/firebase/client"; // adjusted path
import { db } from "@/shared/lib/firebase/client";
import { getProfile } from "@/shared/lib/firebase/db";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
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
    return () => unsub();
  }, []);

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign in" };
    }
  }

  async function signUp(email, password, profileData = {}) {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = cred.user.uid;

      await setDoc(
        doc(db, "profiles", uid),
        {
          ...profileData,
          created_at: serverTimestamp(),
          updated_at: serverTimestamp(),
        },
        { merge: true }
      );

      // Profile was written after onAuthStateChanged fired, so reload it
      const p = await getProfile(uid);
      setProfile(p);

      return { error: null };
    } catch (e) {
      return { error: e?.message || "Failed to sign up" };
    }
  }

  async function signOutUser() {
    return signOut(auth);
  }

  async function logout() {
    return signOutUser();
  }

  async function refreshProfile() {
    if (!user) return;
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
        logout,
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
