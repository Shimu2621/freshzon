//Import icons
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoGoogle } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/components/_signin.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        {
          email,
          password,
        }
      );

      // console.log('response', response.data);

      const token = response.data.token;

      if (token) {
        localStorage.setItem("myToken", token);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signin">
      <h2>Signin</h2>
      <div className="signin-form-container">
        <div className="signin-form-box">
          <h4>Sign Into Your Account</h4>
          <form onSubmit={handleSignin} className="signin-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="signin-info">
              <h6>
                <MdCheckBoxOutlineBlank /> Remember me
              </h6>
              <h6>Forgot your password?</h6>
            </div>
            <button type="submit">Sign in</button>
            <div className="signin-icon">
              <h6>Or Sign In With</h6>
              <div className="icon-list">
                <div className="fb-icon">
                  <TiSocialFacebook />
                </div>
                <div className="ggl-icon">
                  <BiLogoGoogle />
                </div>
                <div className="link-icon">
                  <TiSocialLinkedin />
                </div>
                <div className="twitter-icon">
                  <TiSocialTwitter />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
