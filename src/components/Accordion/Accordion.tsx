import { ReactChild, useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

import { Typography } from "..";
import styles from "./accordion.module.scss";

interface AccordionProps {
  title: string;
  type?: string;
  tech?: string;
  children: ReactChild;
  link?: string;
  repo?: string;
}

export default function Accordion({
  title,
  type,
  tech,
  children,
  link,
  repo,
}: AccordionProps) {
  const [click, setClick] = useState<boolean>(false);
  const additional = useRef(null);

  useEffect(() => {
    if (click) {
      additional.current.style.maxHeight = "20rem";
      setTimeout(() => {
        additional.current.style.overflow = "visible";
      }, 50);
    } else {
      additional.current.style.maxHeight = 0;
      additional.current.style.overflow = "hidden";
    }
  }, [click]);

  return (
    <div
      className={styles.accordion}
      style={!click ? { borderColor: "transparent" } : {}}
      onClick={() => {
        setClick(!click);
      }}
    >
      <div className={styles.main}>
        <FaAngleRight
          className={styles.arrow}
          style={!click ? {} : { transform: "rotate(90deg)" }}
        />
        <span className={styles.title}>{title}</span>
        <span className={styles.type}>{type}</span>
        <span className={styles.tech}>{tech}</span>
      </div>
      <div className={styles.extra} ref={additional}>
        <Typography variant='description' className={styles.description}>
          {children}
        </Typography>
        <div className={styles.actions}>
          {repo && (
            <a href={repo} className={styles.button}>
              Repo
            </a>
          )}
          {link && (
            <a href={link} className={styles.button}>
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
