import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import GoogleIcon from "../../Images/Googleicon.png";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_MYURL,
  process.env.REACT_APP_SUPABASE_MYKEY
);

export default function SuperbaseClient({ profile }) {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        console.log(data, error);
        const user = { data, error };
        console.log("User:", user);
        setUser(user);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*, profile(*)")
          .eq("id", user?.id)
          .single();

        console.log("Profile Data:", data, error);
        setProfileData(data?.profile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (user) {
      fetchProfileData();
    }
  }, [user]);

  const login = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        redirectTo: "https://main--mypokepagination.netlify.app/userprofile",
      });
      console.log("Login data:", data);
      console.error("Login error:", error);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("User:", user);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      {user ? (
        <div>
          <h3>WELCOME BACK {user?.data?.session?.full_name}</h3>
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
