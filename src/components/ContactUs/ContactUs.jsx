import React from "react";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GrChatOption } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <h6>Any questions? We are here to help!</h6>
        </div>

        <div className="contact-section container">
          <div className="contact-list">
            <div className="contact-icon">
              <span>
                <IoHelpBuoyOutline />
              </span>
            </div>
            <div className="contact-text">
              <h5>HELP CENTER</h5>
              <h6>Return or change product?</h6>
            </div>
            <div className="contact-btn">
              <button
                className="primary"
                style={{ fontSize: "12px", border: "none" }}
              >
                VISIT HELP CENTER
              </button>
            </div>
          </div>
        </div>

        <div className="contact-section container">
          <div className="contact-list">
            <div className="contact-icon">
              <span>
                <GrChatOption />
              </span>
            </div>
            <div className="contact-text">
              <h5>CHAT</h5>
              <h6>Typical reply time: within seconds</h6>
              <h6>Monday-Friday 10am-4pm EST</h6>
            </div>
            <div className="contact-btn">
              <button
                className="primary"
                style={{ fontSize: "12px", border: "none" }}
              >
                CHAT WITH US
              </button>
            </div>
          </div>
        </div>

        <div className="contact-section container">
          <div className="contact-list">
            <div className="contact-icon">
              <span>
                <RiMailSendLine />
              </span>
            </div>
            <div className="contact-text">
              <h5>Email</h5>
              <h6>Typical reply time:within a day</h6>
              <h6>Monday-Friday 10am-4pm EST</h6>
            </div>
            <div className="contact-btn">
              <button
                className="primary"
                style={{ fontSize: "12px", border: "none" }}
              >
                EMAIL US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-icon container">
        <div className="footer-ico">
          <h2>Follow us :</h2>
          <div className="first-icon">
            <span className="fb">
              <FaFacebookF />
            </span>
            <span className="twit">
              <BsTwitter />
            </span>
            <span className="insta">
              <IoLogoInstagram />
            </span>
            <span className="google">
              <IoLogoGoogleplus />
            </span>
            <span className="pin">
              <FaPinterest />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
