import { useState, useEffect } from "react";
import { ToDoListProvider } from "./contexts";
import ToDoAddForm from "./components/ToDoAddForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setToDoList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList]);

  const addToDo = (todo) => {
    setToDoList((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateToDo = (id, todo) => {
    setToDoList((prev) => {
      prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo));
    });
  };

  const deleteToDo = (id) => {
    setToDoList((prev) => {
      prev.filter((prevToDo) => prevToDo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setToDoList((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };

  return (
    <ToDoListProvider
      value={{ toDoList, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="min-h-screen bg-[#181900] select-none">
        <div className="w-full max-w-7xl mx-auto shadow-lg shadow-white rounded-md px-12 py-16 text-white">
          <h1 className="text-3xl font-bold text-center mb-8">My To Do List</h1>
          <div className="mb-4">
            <ToDoAddForm />
          </div>
          <div className="flex flex-wrap gap-y-2">
            {toDoList.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoListProvider>
  );
}

export default App;
