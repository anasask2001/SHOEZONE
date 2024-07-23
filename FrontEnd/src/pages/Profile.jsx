import React, { useContext, useEffect, useState } from "react";
import { Data } from "../App";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import Footer from "../components/Footer";

function Profile() {
  const navigate = useNavigate();
  const { setisloged, isloged, setcart } = useContext(Data);
  console.log(isloged);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const userName = localStorage.getItem("username");
    const userEmail = localStorage.getItem("email");
    const profileimage = localStorage.getItem("profileimage");


    console.log(userId,userName,userEmail,profileimage);

    if (userId && userName && userEmail && profileimage) {
      setisloged({ _id: userId, UserName: userName, Email: userEmail, ProfileImg: profileimage });
    } else {
      navigate("/login");
    }
  }, [navigate, setisloged]);

  const logout = () => {
  
    localStorage.clear()

    setisloged(null);
    setcart([]);

    navigate("/login");
  };

  return (
    <>
    <div className="profile-container">
      
      <div className="profile-content">
        <div className="profile-image">
          {isloged?.ProfileImg ? (
            <img
              src={isloged.ProfileImg}
              alt="User avatar"
              className="rounded-circle profile-avatar"
            />
          ) : (
            <div className="default-avatar">No Avatar</div>
          )}
        </div>
        <div className="profile-details">
          <h4 className="profile-name">Name: {isloged?.UserName}</h4>
          <h5 className="profile-email">Email: {isloged?.Email}</h5>
        </div>
      </div>
      <button onClick={logout} className="logout-button">
        <div className="logout-icon">
          <svg viewBox="0 0 512 512" className="logout-svg">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="logout-text">Logout</div>
      </button>
    </div>

    </>
  );
}

export default Profile;
