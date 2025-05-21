import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const ContactIR = () => {
  return (
    <Container className="data-container">
      <div className="title-wrapper mb-4">
        <h1 className="title">Contact IR</h1>
      </div>

      <Row className="mb-3 align-items-start">
        <Col xs={1}>
          <FaMapMarkerAlt size={24} color="#606060" />
        </Col>
        <Col>
          <h5 className="label">Address</h5>
          <p className="mb-0">
            Building No: 4513, Khadim Al Haramain Ash Sharifain Rd, Secondary No: 8615, Al Khubar Al Janubiyah Dist, Al Khobar, Kingdom of Saudi Arabia
          </p>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col xs={1}>
          <FaUser size={22} color="#606060" />
        </Col>
        <Col>
          <span>Mr. Khalid Ahmed Omran (Compliance Manager)</span>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col xs={1}>
          <FaPhone size={22} color="#606060" />
        </Col>
        <Col>
          <span>+966 (13) 829 9405</span>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col xs={1}>
          <FaEnvelope size={22} color="#606060" />
        </Col>
        <Col>
          <span>investors@walaa.com</span>
        </Col>
      </Row>

      {/* Download IR App Section */}
      <div className=" mt-5">
        <h2 className="mb-4" style={{color:"#185a7d"}}>Download IR App</h2>
        <div className="d-flex  gap-3 flex-wrap">
          <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ height: "50px" }}
            />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{ height: "50px" }}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ContactIR;
