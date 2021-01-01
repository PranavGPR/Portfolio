import { ReactChild } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  href: string;
  children: ReactChild;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <div className={styles.button}>
      <a href={href} className={styles.button__content}>
        {children}
      </a>
    </div>
  );
}
