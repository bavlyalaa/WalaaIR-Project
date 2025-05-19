import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const HeroCard = () => {
  return (
    <Card className="herocard text-center w-100" >
      <Card.Header>
        <div>
          <span>8060</span>
          <span>TASI:</span>
          <span>Walaa Cooperative Insurance Co.</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div>

          <span>
            21.04<sup>SAR</sup>
          </span>
          </div>
          <button className="btn btn-success rounded">
            <span>+0.46</span>
          </button>
          <span className="text-success">2.24%</span>
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
      <Card.Footer className="text-muted">
        <div>
          <span>January 30th, 2025</span>
          <span>Data Delayed 15 Minutes</span>
          <img src="../../../assets/cardimage.png"/>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default HeroCard;
