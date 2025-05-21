import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import "../../../OverviewPage/OverviewPage.css";
import "../firstSubSection/firstSubSection.css";
const OverViewIRChart = () => {
  const buttonOptions = [
    "1 Day",
    "5 Day",
    "3 Months",
    "6m",
    "Year",
    "2 Year",
    "5 Year",
    "ALL",
  ];
  const [activeButton, setActiveButton] = useState("1 Day");

  const options = {
    chart: {
      type: "line",
      width: null,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: [
        "10.30",
        "11.00",
        "11.30",
        "12.00",
        "12.30",
        "01.00",
        "01.30",
        "02.00",
        "02.30",
        "03.00",
        "03.30",
        "04.00",
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    tooltip: {
      crosshairs: false,
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 1,
          lineColor: "#FFFFFF",
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        name: "Walaa",
        data: [
          5.2,
          5.7,
          8.7,
          13.9,
          18.2,
          21.4,
          25.0,
          {
            y: 26.4,
          },
          22.8,
          17.5,
          12.1,
          7.6,
        ],
        color: "#185A7D",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="container data-container  flex-grow">
      <div className="title-wrapper">
        <h1 className="title">{"Walaa Cooperative Insurance Co."}</h1>
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
      <div
        className="mt-4"
        style={{ width: "100%", height: "100%", minHeight: "400px" }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>

      <div className="d-flex justify-content-end">
        <button
          className="btn rounded-pill"
          style={{ backgroundColor: "#53B4DB", color: "#FFFFFF" }}
        >
          {"View chart"}
        </button>
      </div>
    </div>
  );
};

export default OverViewIRChart;
