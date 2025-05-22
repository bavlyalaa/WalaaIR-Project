import "../../../OverviewPage/OverviewPage.css";
import "../firstSubSection/firstSubSection.css"
const MarketData = () => {
  return (
    <div className="container data-container h-100 d-flex flex-column">
      <div className="title-wrapper">
        <h1 className="title" id="market-data-title">
          {"Market Data"}
        </h1>
      </div>

      <div className="">
        <table  className="table justify-content-between">
          <tbody>
            <tr>
              <td className="label py-2">Last Trade (%)</td>
              <td className="text-end py-2">21.04</td>
              <td className="label py-2 ps-4">Volume</td>
              <td className="text-end py-2">147,841</td>
            </tr>

            <tr>
              <td className="label py-2">Change</td>
              <td className="text-end py-2  text-success">0.46</td>
              <td className="label py-2 ps-4">Turnover</td>
              <td className="text-end py-2">3,078</td>
            </tr>

            <tr>
              <td className="label py-2">Change (%)</td>
              <td className="text-end py-2 text-success">2.24</td>
              <td className="label py-2 ps-4">Transactions</td>
              <td className="text-end py-2">514</td>
            </tr>

            <tr>
              <td className="label py-2">Open</td>
              <td className="text-end py-2">20.16</td>
              <td className="label py-2 ps-4">Market Value</td>
              <td className="text-end py-2">1,7</td>
            </tr>

            <tr>
              <td className="label py-2">Low</td>
              <td className="text-end py-2">20.16</td>
              <td className="label py-2 ps-4">Avg. Volume (3M)</td>
              <td className="text-end py-2">89,59</td>
            </tr>

            <tr>
              <td className="label py-2">High</td>
              <td className="text-end py-2">21.06</td>
              <td className="label py-2 ps-4">Avg. Turnover (3M)</td>
              <td className="text-end py-2">20,202</td>
            </tr>

            <tr>
              <td className="label py-2">Prev. Close</td>
              <td className="text-end py-2">20.58</td>
              <td className="label py-2 ps-4">Avg. Transaction (3M)</td>
              <td className="text-end py-2">1,69</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <h1 className="title">{"Change"}</h1>
          <table className="table justify-content-between table-borderless">
            <tbody>
              <tr>
                <td className="label">{"3 Months"}</td>
                <td className="label">{"6 Months"}</td>
                <td className="label">{"12 Months"}</td>
                <td className="label">{"Year to date"}</td>
              </tr>
              <tr>
                <td className="text-danger">{"(27.45%)"}</td>
                <td className="text-danger">{"(23.91%)"}</td>
                <td className="text-success">{"(17.54%)"}</td>
                <td className="text-success">{"(10.97%)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
