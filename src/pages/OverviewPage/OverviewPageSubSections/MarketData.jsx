
const MarketData = () => {
  return (
    <div className="continer market-data-container">
      <div>
        <h1>{"Market Data"}</h1>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <td className="text-start py-2">Last Trade (%)</td>
                <td className="text-end py-2 fw-bold">21.04</td>
                <td className="text-start py-2 ps-4">Volume</td>
                <td className="text-end py-2 fw-bold">147,841</td>
              </tr>

              <tr>
                <td className="text-start py-2">Change</td>
                <td className="text-end py-2 fw-bold text-success">0.46</td>
                <td className="text-start py-2 ps-4">Turnover</td>
                <td className="text-end py-2 fw-bold">3,078,886.00</td>
              </tr>

              <tr>
                <td className="text-start py-2">Change (%)</td>
                <td className="text-end py-2 fw-bold text-success">2.24</td>
                <td className="text-start py-2 ps-4">Transactions</td>
                <td className="text-end py-2 fw-bold">514</td>
              </tr>

              <tr>
                <td className="text-start py-2">Open</td>
                <td className="text-end py-2 fw-bold">20.16</td>
                <td className="text-start py-2 ps-4">Market Value</td>
                <td className="text-end py-2 fw-bold">1,789.45</td>
              </tr>

              <tr>
                <td className="text-start py-2">Low</td>
                <td className="text-end py-2 fw-bold">20.16</td>
                <td className="text-start py-2 ps-4">Avg. Volume (3M)</td>
                <td className="text-end py-2 fw-bold">892,597.46</td>
              </tr>

              <tr>
                <td className="text-start py-2">High</td>
                <td className="text-end py-2 fw-bold">21.06</td>
                <td className="text-start py-2 ps-4">Avg. Turnover (3M)</td>
                <td className="text-end py-2 fw-bold">20,202,808.14</td>
              </tr>

              <tr>
                <td className="text-start py-2">Prev. Close</td>
                <td className="text-end py-2 fw-bold">20.58</td>
                <td className="text-start py-2 ps-4">Avg. Transaction (3M)</td>
                <td className="text-end py-2 fw-bold">1,694.02</td>
              </tr>
            </tbody>
          </table>
          <h1>{("Change")}</h1>
          <table>
            <tr>
              <td>{("3 Months")}</td>
              <td>{("6 Months")}</td>
              <td>{("12 Months")}</td>
              <td>{("Year to date")}</td>
            </tr>
            <tr>
              <td>{("(27.45%)")}</td>
              <td>{("(23.91%)")}</td>
              <td>{("(17.54%)")}</td>
              <td>{("(10.97%)")}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
