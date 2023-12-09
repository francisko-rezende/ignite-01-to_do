import { PlusCircle } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./AddTaskForm.module.css";
import { type AddTaskForm as AddTaskFormProps } from "../../types/AddTaskForm";
import { useAddTaskForm } from "../../hooks/useAddTaskForm";

export const AddTaskForm = ({ setTasks }: AddTaskFormProps) => {
  const { handleCreateNewTask, handleInputChange, hasNewTask, newTask } =
    useAddTaskForm({ setTasks });

  return (
    <form className={styles.addTaskForm} onSubmit={handleCreateNewTask}>
      <Input
        value={newTask}
        onChange={handleInputChange}
        label="add a new task"
        placeholder="Create a task"
      />{" "}
      <Button disabled={!hasNewTask}>
        Create <PlusCircle size={16} />
      </Button>
    </form>
  );
};
