import { type Task as TaskProps } from "../../types/Task";
import { Checkbox } from "../Checkbox";
import { IconButton } from "../IconButton";
import styles from "./Task.module.css";

export const Task = ({ children, isDone }: TaskProps) => {
  return (
    <li className={styles.task}>
      <Checkbox checked={isDone} />
      <p data-is-done={isDone} className={styles.taskDescription}>
        {children}
      </p>
      <IconButton />
    </li>
  );
};
