import styles from "./Checkbox.module.css";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

type Checkbox = React.ComponentProps<typeof Root>;

export const Checkbox = (props: Checkbox) => {
  return (
    <Root className={styles.checkboxRoot} {...props}>
      <Indicator className={styles.checkboxIndicator}>
        <Check size={12} />
      </Indicator>
    </Root>
  );
};
