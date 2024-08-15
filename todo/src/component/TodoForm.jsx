import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoForm() {
  const [task, setTask] = useState("");
  const {addTodo} = useTodo();

  function add(e) {
    e.preventDefault();
    console.log("Add function called with task:", task);
    addTodo({ id: Date.now(), task: task });
    setTask("");
  }

  return (
    <form onSubmit={add} className="flex flex-row gap-3">
      <input
        type="text"
        placeholder="write to do"
        className="border border-black"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="border border-black p-4 bg-green-500">Add</button>
    </form>
  );
}

export default TodoForm;
