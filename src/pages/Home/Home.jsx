import "./Home.scss";
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
