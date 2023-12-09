import { type TaskData } from "../../types/Task";
import { Checkbox } from "../Checkbox";
import { IconButton } from "../IconButton";
import styles from "./Task.module.css";

type Task = {
  handleToggleDone: () => void;
  handleDeleteTask: () => void;
} & TaskData;

export const Task = ({
  children,
  isDone,
  handleDeleteTask,
  handleToggleDone,
}: Task) => {
  return (
    <li className={styles.task}>
      <Checkbox onClick={handleToggleDone} checked={isDone} />
      <span data-is-done={isDone} className={styles.taskDescription}>
        {children}
      </span>
      <IconButton onClick={handleDeleteTask}>
        {`delete the task "${children}"`}
      </IconButton>
    </li>
  );
};
