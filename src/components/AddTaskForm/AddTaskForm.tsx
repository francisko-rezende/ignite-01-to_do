import { PlusCircle } from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./AddTaskForm.module.css";

export const AddTaskForm = () => {
  return (
    <form className={styles.addTaskForm}>
      <Input label="add a new task" placeholder="Create a task" />{" "}
      <Button>
        Create <PlusCircle size={16} />
      </Button>
    </form>
  );
};
