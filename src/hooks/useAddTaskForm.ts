import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { AddTaskForm } from "../types/AddTaskForm";

export const useAddTaskForm = ({ setTasks }: AddTaskForm) => {
  const [newTask, setNewTask] = useState("");
  const hasNewTask = !!newTask.length;
  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((tasks) => [
      ...tasks,
      { isDone: false, id: uuidv4(), children: newTask },
    ]);
    setNewTask("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask(e.target.value);

  return { hasNewTask, handleCreateNewTask, handleInputChange };
};
