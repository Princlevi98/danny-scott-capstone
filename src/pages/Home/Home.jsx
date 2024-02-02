import "./Home.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "../../components/Message/Message";
import Content from "../../components/HomeContent/HomeContent";

const HomePage = () => {
  return (
    <main className="home">
      <div>
        <Message />
        <Content />
      </div>
    </main>
  );
};

export default HomePage;
