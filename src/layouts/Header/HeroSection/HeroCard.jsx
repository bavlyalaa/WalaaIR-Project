import Card from "react-bootstrap/Card";
import cardImage from "../../../assets/cardimage.png";

const HeroCard = () => {
  return (
    <Card
      className="hero-card text-center text-light d-flex flex-column"
      id="overlay"
      style={{ width: "385px" }}
    >
      <div>
        <Card.Header className="w-100">
          <div className="d-flex flex-column gap-1 align-items-start">
            <span>8060</span>
            <span>TASI:</span>
            <span>Walaa Cooperative Insurance Co.</span>
          </div>
        </Card.Header>
        <div className="">
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between">
            <Card.Title style={{ flexShrink: 0 }}>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-2">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "50px",
                        lineHeight: 1,
                      }}
                    >
                      21.04
                    </span>
                    <sup
                      style={{
                        fontSize: "16px",
                        position: "relative",
                        top: "10px",
                      }}
                    >
                      SAR
                    </sup>
                  </span>
                </div>

                <div className="d-flex gap-2 align-items-center">
                  <button
                    className="btn btn-success rounded-pill px-3 py-1"
                    style={{ fontWeight: "bold" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                    >
                      <path
                        id="Polygon_18"
                        data-name="Polygon 18"
                        d="M5,0l5,6H0Z"
                        fill="#fff"
                      />
                    </svg>
                    <span> {"0.46"}</span>
                  </button>
                  <span className=" fw-semibold" style={{ color: "#00D200" }}>
                    2.24%
                  </span>
                </div>
              </div>
            </Card.Title>
            <table
              className="table table-borderless w-100 mb-0"
              style={{ flexGrow: 1 }}
            >
              <tbody>
                <tr className="d-flex justify-content-between">
                  <td className="text-start">Open</td>
                  <td className="text-end">20.80</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="text-start">Previous Close</td>
                  <td className="text-end">21.20</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="text-start">High</td>
                  <td className="text-end">20.80</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="text-start">Low</td>
                  <td className="text-end">20.80</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="text-start">Volume</td>
                  <td className="text-end">1246</td>
                </tr>
              </tbody>
            </table>
            <div
              className="align-item"
              style={{
                color: "#6AAAE4",
                letterSpacing: "0px",
                textAlign: "left",
                font: "normal normal normal 14px/22px Graphik Arabic Web",
                opacity: 1,
              }}
            >
              <span>{"January 30th, 2025"}</span>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span>{"Data Delayed 15 Minutes"}</span>
                <img
                  src={cardImage}
                  alt="Card Visual"
                  style={{ width: "80px" }}
                />
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default HeroCard;
