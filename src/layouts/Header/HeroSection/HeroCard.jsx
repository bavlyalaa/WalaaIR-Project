import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const HeroCard = () => {
  return (
    <Card className="hero-card text-center w-100">
      <Card.Header>
        <div className="d-flex flex-column gap-1 align-items-start">
          <span>8060</span>
          <span>TASI:</span>
          <span>Walaa Cooperative Insurance Co.</span>
        </div>
      </Card.Header>
      <div className="">
        <Card.Body>
          <Card.Title>
            <div className="d-flex gap-1 align-items-start">
              <span>
                21.04<sup>SAR</sup>
              </span>
            </div>
            <div className="d-flex gap-1 align-items-center ">
              <button className="btn btn-success rounded">
                <span>+0.46</span>
              </button>
              <span className="text-success">2.24%</span>
            </div>
          </Card.Title>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>Open</td>
                <td>20.80</td>
              </tr>
              <tr>
                <td>Previous Close</td>
                <td>21.20</td>
              </tr>
              <tr>
                <td>High</td>
                <td>20.80</td>
              </tr>
              <tr>
                <td>Low</td>
                <td>20.80</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>1246</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </div>
      <Card.Footer className="text-muted  d-flex flex-column">
        <div>
          <span>January 30th, 2025</span>
          <div>
            <span>Data Delayed 15 Minutes</span>
            <img src="../../../assets/cardimage.png" />
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default HeroCard;
