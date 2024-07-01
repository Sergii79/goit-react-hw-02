import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "../App/App.module.css";

export default function App() {
  // Ініціалізація стану з localStorage або нулями
  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = localStorage.getItem("feedbackClicks");
    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
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

  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        onClicks={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          onFeedback={clicks}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
