import "./Message.scss";
import { useState, useEffect } from "react";

const Message = () => {
  const [currentMessage, setCurrentMessage] = useState("Every Step of The Way");
  const [dailyMessages, setDailyMessages] = useState([
    "You're not alone. Together, we rise from challenges. Your strength inspires hope and positive change.",
    "We all need help in one way or another, So let us support one another.",
    "Embrace the challenges, celebrate the victories. Your journey is a canvas of potential—each step a brushstroke, painting a life filled with resilience and purpose.",
  ]);
  const [currentDailyMessageIndex, setCurrentDailyMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDailyMessageIndex(
        (prevIndex) => (prevIndex + 1) % dailyMessages.length
      );
    }, 20000);

    return () => clearInterval(intervalId);
  }, [dailyMessages.length]);

  return (
    <section className="message">
      <h1 className="message__constant">{currentMessage}</h1>
      <div className="message__daily">
        {dailyMessages[currentDailyMessageIndex]}
      </div>
    </section>
  );
};

export default Message;
