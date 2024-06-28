import css from "../Options/Options.module.css";

export default function Options({ onClicks, onReset, totalFeedback }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onClicks("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onClicks("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onClicks("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
