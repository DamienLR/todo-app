import React, { useState } from "react";
import Todo from "./Todo";

export default function EnterNewTodo() {
  const [newTask, setNewTask] = useState("");
  const [taskArray, setTaskArray] = useState([
    "add a remove button",
    "add a filter option",
    "find a different way to generate keys",
  ]);

  const renderTaskArray = taskArray.map((task, index) => {
    return (
      <div key={index}>
        <Todo task={task} />
      </div>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskArray(() => taskArray.concat(newTask));
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const conditionalRender = () => {
    if (!taskArray.length) {
      return (
        <React.Fragment>
          <p>No tasks.</p>
        </React.Fragment>
      );
    } else {
      return <React.Fragment>{renderTaskArray}</React.Fragment>;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a task..."
          type="text"
          value={newTask}
          onChange={handleChange}
        />
      </form>
      {conditionalRender()}
    </div>
  );
}
