export default function Options({ onClicks, onReset, totalFeedback }) {
  return (
    <div>
      <button onClick={() => onClicks("good")}>Good</button>
      <button onClick={() => onClicks("neutral")}>Neutral</button>
      <button onClick={() => onClicks("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
