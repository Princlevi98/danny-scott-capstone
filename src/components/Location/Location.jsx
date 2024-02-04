import "./Location.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const SingleLocation = () => {
  return (
    <main className="location">
      <div className="location__names-container">
        <Link to="/stock/1">
          <p className="location__name">Lambeth</p>
        </Link>
        <Link to="/stock/2">
          <p className="location__name">Wandsworth</p>
        </Link>
        <Link to="/stock/3">
          <p className="location__name">Battersea</p>
        </Link>
        <Link to="/stock/4">
          <p className="location__name">Croydon</p>
        </Link>
      </div>
    </main>
  );
};

export default SingleLocation;
