import { useState } from "react";
import styles from "./App.module.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { Header } from "./components/Header";
import { StatIndicator } from "./components/StatIndicator";
import { Task } from "./components/Task";
import "./styles/global.css";
import { TaskData } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AddTaskForm setTasks={setTasks} />
        <div className={styles.statIndicatorsWrapper}>
          <StatIndicator statistic={10} variation="created" />
          <StatIndicator statistic={10} variation="finished" />
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
