import { Routes, Route } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profile;
