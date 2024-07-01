import css from "../Feedback/Feedback.module.css";

export default function Feedback({
  onFeedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={css.container}>
      <p>Good: {onFeedback.good}</p>
      <p>Neutral: {onFeedback.neutral}</p>
      <p>Bad: {onFeedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
