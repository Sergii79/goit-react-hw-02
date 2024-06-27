export default function Feedback({ onFeedback, totalFeedback }) {
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(
          ((onFeedback.good + onFeedback.neutral) / totalFeedback) * 100
        )
      : 0;

  return (
    <div>
      <p>Good: {onFeedback.good}</p>
      <p>Neutral: {onFeedback.neutral}</p>
      <p>Bad: {onFeedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
