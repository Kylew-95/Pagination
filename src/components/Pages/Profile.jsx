import { supabase } from "../SuperBase/SuperbaseClient";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      console.log("Logged out successfully");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;