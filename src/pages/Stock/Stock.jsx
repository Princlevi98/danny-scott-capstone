import "./Stock.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Locations from "../../components/SingleLocation/SingleLocation";
import Location from "../../components/Location/Location";

const Stock = () => {
  return (
    <main className="stock">
      <div>
        <Location />
        <Locations />
      </div>
    </main>
  );
};

export default Stock;
