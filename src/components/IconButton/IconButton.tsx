import { Trash2 } from "lucide-react";
import styles from "./IconButton.module.css";
import { SrOnly } from "../SrOnly";

type IconButton = React.ComponentProps<"button">;

export const IconButton = (props: IconButton) => {
  return (
    <button {...props} title="Delete task" className={styles.iconButton}>
      <Trash2 size={16} />
      <SrOnly>{props.children}</SrOnly>
    </button>
  );
};
