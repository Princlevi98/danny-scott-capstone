import "./Stock.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Location from "../../components/SingleLocation/SingleLocation";

const Stock = () => {
  return (
    <main className="stock">
      <div>
        <Location />
      </div>
    </main>
  );
};

export default Stock;
