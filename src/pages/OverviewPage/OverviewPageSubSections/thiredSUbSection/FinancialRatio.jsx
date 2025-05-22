import { Table } from "react-bootstrap";
import "../../OverviewPage.css";

const FinancialRatios = () => {
  return (
    <div className="container data-container h-100 d-flex flex-column">
      <div className="title-wrapper">
        <h1 className="title">{"Financial Ratio"}</h1>
      </div>

      <Table>
        <tbody>
          <tr>
            <td className="label">{"Financial Ratio"}</td>
            <td>{"Current"}</td>
          </tr>
          <tr>
            <td className="label">{"Shares Outstanding"}</td>
            <td>35.00</td>
          </tr>
          <tr>
            <td className="label">EPS (SAR) (TTM)</td>
            <td>5.42</td>
          </tr>
          <tr>
            <td className="label">EPS Diluted (SAR)</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="label">Book Value (BV) (SAR) (TTM)</td>
            <td>19.94</td>
          </tr>
          <tr>
            <td className="label">Dividend Yield (%) (TTM)</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td className="label">Market Cap (M SAR)</td>
            <td>5,117.00</td>
          </tr>
          <tr>
            <td className="label">P/E</td>
            <td>26.96</td>
          </tr>
          <tr>
            <td className="label">Adjusted P/E (Last12) (TTM)</td>
            <td>25.35</td>
          </tr>
        </tbody>
      </Table>

      <div className="mt-auto">
        <button
          className="btn rounded-pill"
          style={{ backgroundColor: "#53B4DB", color: "#FFFFFF" }}
        >
          {"More"}
        </button>
      </div>
    </div>
  );
};

export default FinancialRatios;