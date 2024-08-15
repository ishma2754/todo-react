import { TodoProvider } from "./context/todoContext";
import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {...todo}]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <div className="w-full h-full border border-red-800 flex flex-col gap-10">
        <div className=" border border-blue-200 p-8 flex justify-center items-center">
          <TodoForm />
        </div>
        <div className="border border-blue-200 p-8 flex justify-center items-center flex-col gap-3">{
          todos.map((todo) =>
          <TodoList key={todo.id} todo={todo}/>
        )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
