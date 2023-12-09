import { TaskData } from "./Task";

export type AddTaskForm = {
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
};
