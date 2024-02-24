import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/components/_profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("myToken"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post(
          "https://staging-be-ecom.techserve4u.com/api/user/verify",
          {},
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // console.log("response", response.data);

        setUserData(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log("userData", userData);
  return (
    <div className="profile-form-container">
      <div className="profile-form-box">
        <h2>Profile</h2>
        <div className="form-group">
          <h3>Name: {userData?.name}</h3>
          <h3>Email : {userData?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
