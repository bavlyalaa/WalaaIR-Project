import HeaderNavbar from "./Navbar";
import BreadCrumb  from "./HeroSection/BreadCrumb";
import "./Header.css";
import HeroContent from "./HeroSection/HeroContent";
import HeroCard from "./HeroSection/HeroCard";

const Header = () => {
  return (
    <div className="header p-2  ">
      <div className="container-fluid custom-container">
        
      <HeaderNavbar />
      </div>

      <div className="container-fluid custom-container">
        <div className="row">
          <div className="col-12 mt-4">
            <BreadCrumb  />
          </div>
        </div>
      </div>

      <div className="container-fluid custom-container">
        <div className="row gx-5 justify-content-between ">
          <div className="col-12 col-lg-5">
            <HeroContent />
          </div>

          <div className="col-12 col-lg-4 ">
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
