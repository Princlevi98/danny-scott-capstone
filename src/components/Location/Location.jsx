import "./Location.scss";
import { useState } from "react";

import { Link } from "react-router-dom";

const SingleLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (locationId) => {
    setSelectedLocation(locationId);
  };

  return (
    <main className="location">
      <div className="location__names-container">
        <Link
          className={`location__link ${selectedLocation === 1 && "selected"}`}
          to="/stock/1"
          onClick={() => handleLocationClick(1)}
        >
          <p className="location__name">Lambeth</p>
        </Link>
        <Link
          className={`location__link ${selectedLocation === 2 && "selected"}`}
          to="/stock/2"
          onClick={() => handleLocationClick(2)}
        >
          <p className="location__name">Wandsworth</p>
        </Link>
        <Link
          className={`location__link ${selectedLocation === 3 && "selected"}`}
          to="/stock/3"
          onClick={() => handleLocationClick(3)}
        >
          <p className="location__name">Battersea</p>
        </Link>
        <Link
          className={`location__link ${selectedLocation === 4 && "selected"}`}
          to="/stock/4"
          onClick={() => handleLocationClick(4)}
        >
          <p className="location__name">Croydon</p>
        </Link>
      </div>
    </main>
  );
};

export default SingleLocation;
