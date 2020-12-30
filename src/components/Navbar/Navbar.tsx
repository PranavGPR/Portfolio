import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__list}>Intro</li>
        <li className={styles.nav__list}>About</li>
        <li className={styles.nav__list}>Skills</li>
        <li className={styles.nav__list}>Projects</li>
        <li className={styles.nav__list}>Contact</li>
      </ul>
    </nav>
  );
}
