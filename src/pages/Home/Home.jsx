import "./Home.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "../../components/Message/Message";

const HomePage = () => {
  return (
    <main className="home">
      <div>
        <Message />
      </div>
    </main>
  );
};

export default HomePage;
