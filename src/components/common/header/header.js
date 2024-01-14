import React from "react";
import "./header.css";
import profileimage from "./astronaut.png";
const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="location-icon fi fi-rr-marker absolute-center " />
              <div>Banglaore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seprator"></div>
          <div className="header-search-bar ">
            <i className=" search-icon fi fi-rr-search absolute-center"></i>
            <input
              placeholder="Search For Restaurant"
              className="search-input"
            />
          </div>
        </div>
        <div className=" profile-wrapper">
          <img
            src={profileimage}
            alt="pfimage"
            className="header-profile-image"
          />
          <span className="header-username">Vedant</span>
          <i className=" profile-options-icon fi fi-rr-angle-small-down absolute-center" onClick={alert}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
