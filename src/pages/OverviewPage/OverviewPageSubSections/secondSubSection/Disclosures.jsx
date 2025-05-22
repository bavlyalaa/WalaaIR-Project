import AnnouncementImage from "../../../../assets/AnnouncementsDisc.png";
import NewsImage from "../../../../assets/NewsDics.png";
import CalanderImage from "../../../../assets/CalendarDisc.png";
import "../../OverviewPage.css";
import "./disclosures.css";
const Disclosures = () => {
  return (
    <div className="disclosures-header">
      <div className="container-fluid data-container mt-5 ">
        <div className="title-wrapper">
          <h1 className="title">{"Disclosures"}</h1>
        </div>
        <div className="row disc-img-container">
          <div className="col-12 col-sm-4 mb-4">
            <img
              className="disc-img img-fluid"
              src={AnnouncementImage}
              alt="announcement"
            />
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <img className="disc-img img-fluid" src={NewsImage} alt="news" />
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <img
              className="disc-img img-fluid"
              src={CalanderImage}
              alt="calendar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclosures;
