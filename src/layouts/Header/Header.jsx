import HeaderNavbar from "./Navbar";
import BreadCramp from "./HeroSection/BreadCramp";
import "./Header.css";
import HeroContent from "./HeroSection/HeroContent";
import HeroCard from "./HeroSection/HeroCard";

const Header = () => {
  return (
    <div className="header">
      <HeaderNavbar />

      <div className="container-fluid custom-container">
        <div className="row">
          <div className="col-12 mt-4">
            <BreadCramp />
          </div>
        </div>
      </div>

      <div className="container-fluid custom-container">
        <div className="row gx-5 justify-content-between">
          <div className="col-12 col-lg-4">
            <HeroContent />
          </div>

          <div className="col-12 col-lg-3">
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;