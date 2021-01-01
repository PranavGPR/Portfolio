import { Button } from "..";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__list}>
          <Button href='#hero' target_blank={false}>
            Intro
          </Button>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <Button href='#about' target_blank={false}>
            About
          </Button>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <Button href='#skills' target_blank={false}>
            Skills
          </Button>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <Button href='#projects' target_blank={false}>
            Projects
          </Button>
        </li>
      </ul>
    </nav>
  );
}
