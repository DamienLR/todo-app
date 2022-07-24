import { useState } from "react";
import "../scss/Todo.scss";

export default function Todo({ task, setTaskArray, id }) {
  const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);

  const handleClickCheckbox = () => {
    if (!isCheckboxTicked) {
      setIsCheckboxTicked(true);
    } else {
      setIsCheckboxTicked(false);
    }
  };
  // sets a CSS class for styling

  const handleClickClearButton = () => {
    setTaskArray((task) => task.filter((item) => item.id !== id));
  };

  const setClass = () => (isCheckboxTicked ? "todo__text--complete" : "");

  return (
    <div className="todo">
      <input type="checkbox" onClick={handleClickCheckbox} />
      <p className={`todo__text font-secondary ${setClass()}`}>{task}</p>
      <button onClick={handleClickClearButton}>Clear</button>
    </div>
  );
}
