import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  // const [clicks, setClicks] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  // Ініціалізація стану з localStorage або нулями
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("feedbackClicks");
    return savedClicks
      ? JSON.parse(savedClicks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // Зберігання стану в localStorage при його зміні
  useEffect(() => {
    localStorage.setItem("feedbackClicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <Options
        onClicks={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback onFeedback={clicks} totalFeedback={totalFeedback} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}
