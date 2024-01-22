import { createContext, useContext } from "react";

export const ToDoListContext = createContext({
  toDoList: [
    {
      id: 1,
      todo: "Initial ToDo",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoListContext);
};

export const ToDoListProvider = ToDoListContext.Provider;
