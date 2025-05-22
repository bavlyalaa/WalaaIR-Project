import MarketData from "./MarketData";
import OverViewIRChart from "./OverViewIRChart";

const FirstSubSection = () => {
  return (
    <div className="container-fluid py-3 subsection">
      <div className="row gx-4 gy-4">
        <div className="col-12 col-md-6 d-flex flex-column">
          <OverViewIRChart />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          <MarketData />
        </div>
      </div>
    </div>
  );
};

export default FirstSubSection;