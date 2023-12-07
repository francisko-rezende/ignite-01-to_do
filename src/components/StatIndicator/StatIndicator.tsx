import styles from "./StatIndicator.module.css";

type StatIndicator = {
  statistic: number;
  variation: "created" | "finished";
};

export const StatIndicator = ({ statistic, variation }: StatIndicator) => {
  const isCreatedTask = variation === "created";
  const variationClassName = isCreatedTask
    ? styles.createdTasks
    : styles.finishedTasks;
  const variationLabel = isCreatedTask ? "Created tasks" : "Finished";

  return (
    <p className={`${styles.statIndicator} ${variationClassName}`}>
      {variationLabel} <span className={styles.statistic}>{statistic}</span>
    </p>
  );
};
