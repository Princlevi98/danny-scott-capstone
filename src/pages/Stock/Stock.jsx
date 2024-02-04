import "./Stock.scss";

import Locations from "../../components/SingleLocation/SingleLocation";
import Location from "../../components/Location/Location";
import LocationStock from "../../components/StockInfo/StockInfo";

const Stock = () => {
  return (
    <main className="stock">
      <div>
        <Location />
        <Locations />
        <LocationStock />
      </div>
    </main>
  );
};

export default Stock;
