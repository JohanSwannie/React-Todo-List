import { createContext, useContext } from "react";

export const ToDoListContext = createContext({
  toDoList: [
    {
      id: 1,
      todo: "Initial ToDo",
      completed: false,
    },
  ],
  addToDo: () => {},
  updateToDo: () => {},
  deleteToDo: () => {},
  toggleComplete: () => {},
});

export const useToDo = () => {
  return useContext(ToDoListContext);
};

export const ToDoListProvider = ToDoListContext.Provider;
