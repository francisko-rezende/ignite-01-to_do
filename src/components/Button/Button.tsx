import styles from "./Button.module.css";

type Button = React.ComponentProps<"button">;

export const Button = (props: Button) => {
  return <button {...props} className={styles.button} />;
};
