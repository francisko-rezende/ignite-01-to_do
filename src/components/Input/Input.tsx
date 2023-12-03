import styles from "./Input.module.css";

type Input = { label: string } & React.ComponentProps<"input">;

export const Input = ({ label, ...props }: Input) => {
  return (
    <>
      <label htmlFor="input" className={styles.srOnly}>
        {label}
      </label>
      <input id="input" className={styles.input} {...props} />
    </>
  );
};
