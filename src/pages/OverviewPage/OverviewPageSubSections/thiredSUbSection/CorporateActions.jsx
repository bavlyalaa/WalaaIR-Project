import React, { useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";

const CorporateActions = () => {
  const buttonOptions = ["Recent Changes", "Recent Dividends"];
  const [activeButton, setActiveButton] = useState("Recent Changes");
  return (
    <div className="container data-container ">
      <div className="title-wrapper">
        <h1 className="title">{"Corporate Actions"}</h1>
      </div>

      <ButtonGroup
        className="m-1 flex-grow  rounded-pill d-flex justify-content-between shadow-sm"
        style={{ border: "1px solid #185A7D" }}
      >
        {buttonOptions.map((option) => (
          <Button
            key={option}
            variant="outline-primary"
            active={activeButton === option}
            onClick={() => setActiveButton(option)}
            className={`rounded-pill border-0 ${
              activeButton === option ? "active" : ""
            }`}
            style={{
              color: "#185A7D",
              fontSize: "15px",
              backgroundColor:
                activeButton === option ? "#91D9F6" : "transparent",
            }}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>

      <div>
        <div className="table justify-content-between">
          <Table>
            <tbody>
              <tr>
                <td className="label">{"Previous Capital"}</td>
                <td>{"850.58 (Million Riyals)"}</td>
              </tr>
              <tr>
                <td className="label">Previous No. of Shares (M)</td>
                <td>85.06</td>
              </tr>
              <tr>
                <td className="label">Capital Change</td>
                <td>54.96%</td>
              </tr>
              <tr>
                <td className="label">Current Capital (M SAR)</td>
                <td>1,318.08</td>
              </tr>
              <tr>
                <td className="label">1,318.08</td>
                <td>1,318.08</td>
              </tr>
              <tr>
                <td className="label">Type</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td className="label">Announcement</td>
                <td>04/08/2024</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="d-flex justify-content-end">
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

export default CorporateActions;
