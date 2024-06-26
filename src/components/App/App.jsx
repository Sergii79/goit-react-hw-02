import { useState } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
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
      <div>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
      </div>
      <Options />
      <Feedback />
    </>
  );
}
