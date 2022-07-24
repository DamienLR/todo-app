import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

export default function EnterNewTodo() {
  const boilerplateTasks = [
    { task: "add a remove button", id: uuidv4(), isComplete: false },
    { task: "add a filter option", id: uuidv4(), isComplete: false },
    {
      task: "find a different way to generate keys",
      id: uuidv4(),
      isComplete: false,
    },
    { task: "add a button to clear all tasks", id: uuidv4(), isComplete: true },
  ];

  const [newTask, setNewTask] = useState("");
  const [taskArray, setTaskArray] = useState(boilerplateTasks);

  const renderTaskArray = taskArray.map(({ task, id }) => {
    return (
      <div key={id}>
        <Todo task={task} />
      </div>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskArray(() =>
      taskArray.concat({
        task: newTask,
        id: taskArray.length + 1,
        isComplete: false,
      })
    );
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

  const clearTasks = () => {
    setTaskArray([]);
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
      <button onClick={clearTasks}>Clear all tasks</button>
    </div>
  );
}
