import { useState } from "react";
import axios from "axios";
import "../styles/components/_signup.scss";

//All icons import
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoGoogle } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [otp, setOtp] = useState("");

  // console.log('Name:', name);
  // console.log('Email', email);
  // console.log('Password', password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        {
          name,
          email,
          password,
        }
      );
      // console.log('response', response.data);
      if (response.data.isOtpSend) {
        setIsOtpSend(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        {
          otp,
          email,
        }
      );

      if (response.data.success) {
        alert("Signup successfully!");
        setIsOtpSend(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <div className="signup-form-container">
        {isOtpSend ? (
          <div className="otp-form-box">
            <h4>Verify OTP</h4>
            <form onSubmit={handleOTP} className="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Send & Verify</button>
            </form>
          </div>
        ) : (
          <div className="signup-form-box">
            <h4>Create An Account</h4>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
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
              <div className="signup-info">
                <h6>
                  <span className="info-icon">
                    <MdCheckBoxOutlineBlank />
                  </span>{" "}
                  Remember me
                </h6>
                <h6>Forgot your password?</h6>
              </div>
              <button type="submit">Signup</button>
              <div className="signup-icon">
                <h6>Or Login With</h6>
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
        )}
      </div>
    </div>
  );
};

export default Signup;
