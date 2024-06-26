export default function Options() {
  const handleClick = () => {
    console.log("Hello click");
  };
  return (
    <div>
      <button onClick={handleClick}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
}
