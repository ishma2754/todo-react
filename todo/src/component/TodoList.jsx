import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoList({todo}) {
  const [task, setTask] = useState(todo.task)
  const [isEditable, setIsEditable] = useState(false)
  const {updateTodo, deleteTodo} = useTodo();
  
  function handleEdit(){
    if(isEditable){
      updateTodo(todo.id, {...todo, task: task})

    }
    setIsEditable((prev) => !prev)
  }

  function removeTodo() {
    deleteTodo(todo.id)
  }
  return (
    <div className="flex flex-row gap-3">
    <input
     type='text'
     placeholder='write to do'
     className='border border-black'
     value={task}
     onChange={(e) => setTask(e.target.value)}
     readOnly={!isEditable}
    />
    <button 
    onClick={handleEdit}
    className={`border border-black p-4 text-white ${isEditable ?  "bg-green-500" :  "bg-orange-500" }`}

    >
      {isEditable ? "save" : "edit"}
    </button>
    <button 
    className="border border-black p-4 bg-red-500"
    onClick={removeTodo}
    >
      delete
    </button>
  </div>

  )
}

export default TodoList;
