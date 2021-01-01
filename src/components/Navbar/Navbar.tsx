import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__list}>
          <a href='#hero'>Intro</a>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <a href='#about'>About</a>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <a href='#skills'>Skills</a>
        </li>
        <div className={styles.nav__line} />
        <li className={styles.nav__list}>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
    </nav>
  );
}
