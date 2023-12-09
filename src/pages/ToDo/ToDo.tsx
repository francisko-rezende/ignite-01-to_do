import { ClipboardList } from "lucide-react";
import { AddTaskForm } from "../../components/AddTaskForm";
import { Header } from "../../components/Header";
import { StatIndicator } from "../../components/StatIndicator";
import { Task } from "../../components/Task";
import { TaskData } from "../../types/Task";
import styles from "./ToDo.module.css";
import { useState } from "react";

export const ToDo = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleToggleDone = (id: string) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task;
      });
    });
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };

  const finishedTasks = tasks.reduce(
    (acc, { isDone }) => (isDone ? ++acc : acc),
    0,
  );
  const createdTasks = tasks.length;

  const hasTasks = Boolean(tasks.length > 0);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AddTaskForm setTasks={setTasks} />
        <div className={styles.statIndicatorsWrapper}>
          <StatIndicator statistic={createdTasks} variation="created" />
          <StatIndicator statistic={finishedTasks} variation="finished" />
        </div>

        {!hasTasks && (
          <div className={styles.noTasksWrapper}>
            <ClipboardList color="#333333" size={60} />
            <p className={`${styles.noTaskParagraph} ${styles.bold}`}>
              You have no registered tasks
            </p>
            <p className={styles.noTaskParagraph}>
              Create tasks and organize what you gotta do!
            </p>
          </div>
        )}

        {hasTasks && (
          <ul className={styles.taskList}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                handleDeleteTask={() => handleDeleteTask(task.id)}
                handleToggleDone={() => handleToggleDone(task.id)}
              />
            ))}
          </ul>
        )}
      </main>
    </>
  );
};
