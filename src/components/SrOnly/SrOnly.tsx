import styles from "./SrOnly.module.css";

type SrOnly = React.ComponentProps<"span">;

export const SrOnly = (props: SrOnly) => {
  return <span className={styles.srOnly} {...props} />;
};
