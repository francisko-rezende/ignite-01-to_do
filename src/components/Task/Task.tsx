import { Checkbox } from "../Checkbox";
import { IconButton } from "../IconButton";
import styles from "./Task.module.css";

type Task = {
  isDone: boolean;
  children: React.ReactNode;
};

export const Task = ({ children, isDone }: Task) => {
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
