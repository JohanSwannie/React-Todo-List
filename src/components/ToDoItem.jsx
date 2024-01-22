import { useState } from "react";
import { useToDo } from "../contexts";

const ToDoItem = ({ todo }) => {
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const [canTodoBeEdited, setCanTodoBeEdited] = useState(false);

  const { updateToDo, deleteToDo, toggleComplete } = useToDo();

  const editToDo = () => {
    updateToDo(todo.id, { ...todo, todo: todoMessage });
    setCanTodoBeEdited(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-2 py-1 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#70af55]" : "bg-[#84caa4]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          canTodoBeEdited ? "border-white px-2 py-1" : "border-transparent"
        }`}
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        readOnly={!canTodoBeEdited}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border-black border-2 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (canTodoBeEdited) {
            editToDo();
          } else setCanTodoBeEdited((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {canTodoBeEdited ? "📁" : "✏️"}
      </button>
      <button
        type="button"
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 border-black border-2"
        onClick={() => deleteToDo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default ToDoItem;