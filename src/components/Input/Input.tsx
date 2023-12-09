import styles from "./Input.module.css";

type Input = { label: string } & React.ComponentProps<"input">;

export const Input = ({ label, ...props }: Input) => {
  return (
    <label className={styles.label} htmlFor="input">
      <span className={styles.srOnly}>{label}</span>
      <input id="input" className={styles.input} {...props} />
    </label>
  );
};
