import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const superbase = createClient(
  process.env.REACT_APP_SUPABASE_MYURL,
  process.env.REACT_APP_SUPABASE_MYKEY
);

export default function SuperbaseClient() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { user } = await superbase.auth.getSession();
        setUser(user || null);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, []);

  const login = async () => {
   await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            redirectTo: window.location.origin,
            redirectTo: process.env.NEXTAUTH_URL,
          },
        });
      },

  const logout = async () => {
    await superbase.auth.signOut();
  };

  return (
    <>
      {user ? (
        <div>
          <h1>USER PROFILE</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login With Google</button>
      )}
    </>
  );
}
