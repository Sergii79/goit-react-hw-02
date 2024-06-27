export default function Options({ onClicks }) {
  return (
    <div>
      <button onClick={() => onClicks("good")}>Good</button>
      <button onClick={() => onClicks("neutral")}>Neutral</button>
      <button onClick={() => onClicks("bad")}>Bad</button>
    </div>
  );
}
