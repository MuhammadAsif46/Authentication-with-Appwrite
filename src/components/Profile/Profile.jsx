import React from "react";
import boyImage from "../../assets/boy.jpg";
import { useNavigate } from "react-router-dom";


const Profile = () => {

  const navigate = useNavigate()
  return (
    <>
      <h1 className="p-4 text-4xl text-white">Profile Page</h1>
      <div className="bg-white mx-auto gap-4 p-4 rounded-2xl w-[40%] flex flex-col justify-center items-center">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={boyImage}
            className=""
            alt="boy-image"
            width="100%"
            height="100%"
          />
        </div>
        <p className="text-center w-96 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa iure
          dolor excepturi? Alias cum explicabo quae commodi, esse illum qui
          deleniti, distinctio consequuntur blanditiis incidunt nemo laboriosam
          ex nostrum.
        </p>
        <div className="flex gap-3">
          <button className="btn btn-secondary rounded-full" onClick={() => navigate("/update-password")}>
            Update Password
          </button>
          <button className="btn btn-danger rounded-full" onClick={logoutHandler} >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
