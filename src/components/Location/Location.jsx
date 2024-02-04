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
          <p>Lambeth</p>
        </Link>
        <Link to="/stock/2">
          <p>Wandsworth</p>
        </Link>
        <Link to="/stock/3">
          <p>Battersea</p>
        </Link>
      </div>
    </main>
  );
};

export default SingleLocation;
