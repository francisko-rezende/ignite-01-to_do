import styles from "./Header.module.css";
import todoLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" aria-hidden />
      <h1 className={styles.title}>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </h1>
    </header>
  );
};
