import { ReactChild, useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

import { Button, Typography } from "..";
import styles from "./accordion.module.scss";

interface AccordionProps {
  title: string;
  type?: string;
  tech?: string;
  children: ReactChild;
  link?: string;
  repo?: string;
  arrow: boolean;
}

export default function Accordion({
  title,
  type,
  tech,
  children,
  link,
  repo,
  arrow,
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
      style={
        !click
          ? { borderColor: "transparent" }
          : { boxShadow: "0 0 1rem #007acc" }
      }
      onClick={() => {
        setClick(!click);
      }}
    >
      <div className={styles.main}>
        {arrow && (
          <FaAngleRight
            className={styles.arrow}
            style={!click ? {} : { transform: "rotate(90deg)" }}
          />
        )}
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
            <Button
              href={repo}
              style={{
                margin: "1rem 3rem 0 0",
                border: "2px solid #007acc",
                borderRadius: "5px",
              }}
              target_blank={true}
            >
              Repo
            </Button>
          )}
          {link && (
            <Button
              href={link}
              style={{
                margin: "1rem 3rem 0 0",
                border: "2px solid #007acc",
                borderRadius: "5px",
              }}
              target_blank={true}
            >
              Link
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
