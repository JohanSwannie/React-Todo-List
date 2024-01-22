import { useState, useRef, useEffect } from "react";
import { useToDo } from "../contexts";

const ToDoAddForm = () => {
  const [todoMessage, setTodoMessage] = useState("");

  const addAnotherMessage = useRef();

  const { addToDo } = useToDo();

  useEffect(() => {
    addAnotherMessage.current.focus();
  }, []);

  const addTodoMessage = (event) => {
    event.preventDefault();
    if (!todoMessage) return;
    addToDo({ todoMessage, completed: false });
    setTodoMessage("");
  };

  return (
    <form onSubmit={addTodoMessage} className="flex border-white border-2">
      <input
        type="text"
        value={todoMessage}
        placeholder="Add a ToDo description"
        maxLength={75}
        ref={addAnotherMessage}
        onChange={(event) => setTodoMessage(event.target.value)}
        className="w-full border placeholder:text-white-700 border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-600 text-white shrink-0 border-black border-2"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoAddForm;
