export default function Feedback({ onFeedback }) {
  return (
    <div>
      <p>Good: {onFeedback.good}</p>
      <p>Neutral: {onFeedback.neutral}</p>
      <p>Bad: {onFeedback.bad}</p>
    </div>
  );
}
