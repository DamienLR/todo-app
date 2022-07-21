import { useState } from "react";
import "../scss/Todo.scss";

export default function Todo({ task }) {
  const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);

  const handleClick = () => {
    if (!isCheckboxTicked) {
      setIsCheckboxTicked(true);
    } else {
      setIsCheckboxTicked(false);
    }
  };

  const setClass = () => (isCheckboxTicked ? "todo__text--complete" : "");

  return (
    <div>
      <input type="checkbox" onClick={handleClick} />
      <p className={setClass()}>{task}</p>
    </div>
  );
}
