import AnnouncementImage from "../../../../assets/AnnouncementsDisc.png"
import NewsImage from "../../../../assets/NewsDics.png"
import CalanderImage from "../../../../assets/CalendarDisc.png"
import "../../OverviewPage.css"
import "./disclosures.css"
const Disclosures = () => {
  return (
    <div  className="disclosures-header">

    <div className="container data-container mt-5" >
      <div className="title-wrapper">
        <h1 className="title">{"Disclosures"}</h1>
      </div>
      <div>
        <img className="disc-img" src={AnnouncementImage} alt="Your Browser Doesnot support the image" />
        <img className="disc-img" src={NewsImage }alt="Your Browser Doesnot support the image" />
        <img className="disc-img" src={CalanderImage} alt="Your Browser Doesnot support the image" />
      </div>
    </div>
    </div>
  );
};

export default Disclosures;
