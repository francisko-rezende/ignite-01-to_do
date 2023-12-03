import styles from "./Checkbox.module.css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { Check } from "lucide-react";

type Checkbox = {
  children: ReactNode;
};

export const Checkbox = () => {
  return (
    <CheckboxPrimitive.Root className={styles.checkboxRoot} defaultChecked>
      <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
        <Check size={14} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
