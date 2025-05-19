import React from "react";
import HeaderNavbar from "./Navbar";
import BreadCramp from "./HeroSection/BreadCramp";
import "./Header.css";
import HeroContent from "./HeroSection/HeroContent";
import HeroCard from "./HeroSection/HeroCard";
const Header = () => {
  return (
    <>
      <div className="header row d flex justify-content-between">
        <div className="row">
          <HeaderNavbar />
          <div className="m-2">
            <BreadCramp className />
          </div>
        </div>
        <div className="col-sm-1 col-md-3 col-lg-3 col-xl-4 m-4">
          <HeroContent />
        </div>
        
        <div className="colsm-1 col-md-3 col-lg-3 col-xl-4 m-4 ">
          <HeroCard />
        </div>
      </div>
    </>
  );
};

export default Header;
