import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__list}>Intro</li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>About</li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>Skills</li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>Projects</li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>Contact</li>
      </ul>
    </nav>
  );
}
