import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import GoogleIcon from "../Images/Googleicon.png";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_MYURL,
  process.env.REACT_APP_SUPABASE_MYKEY
);

export default function SuperbaseClient({ profile }) {
  const [user, setUser] = useState(null);
  // const [auth, setAuth] = useState(false);

useEffect(() => {
  const fetchSession = async () => {
    try {
      const { data: session, error } = await supabase.auth.getSession();
      if (error || !session) {
        setUser(null);
      } else {
        setUser(session);
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    }
  };

  fetchSession();
}, []);
  
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from("users")
  //         .select("*, profile(*)")
  //         .eq("id", user?.id)
  //         .single();

  //       console.log("Profile Data:", data, error);
  //       setProfileData(data?.profile);
  //     } catch (error) {
  //       console.error("Error fetching profile data:", error);
  //     }
  //   };

  //   if (user) {
  //     fetchProfileData();
  //   }
  // }, [user]);

  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
            hd: "domain.com",
          },
        },
      });

      if (error) {
        console.error("Error signing in with Google:", error);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
  //   if (event === "SIGNED_IN") {
  //     setUser(session.user);
  //     setAuth(true);
  //   } else if (event === "SIGNED_OUT") {
  //     setUser(data);
  //     setAuth(false);
  //   }
  // });

  const logout = async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
  } else {
    document.cookie = 'sb:token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    console.log('User has been signed out')
  }
}


//   const authChange = supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session)
// })

  return (
    <>
      {user ? (
        <div>
          <h3>WELCOME BACK {user?.data?.session?.full_name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <img
            className="googleIcon"
            src={GoogleIcon}
            alt="icon"
            onClick={login}
            style={{ width: "20px", height: "20px" }}
          />
          <p>Sign in with Google</p>
        </>
      )}
    </>
  );
}
