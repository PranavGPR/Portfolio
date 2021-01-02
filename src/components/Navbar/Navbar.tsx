import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";
import { useRef } from "react";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Navbar() {
  const check = useRef(null);

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <motion.svg
          className={styles.nav__logo}
          width='40'
          height='70'
          viewBox='0 0 70 110'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            variants={pathVariants}
            initial='hidden'
            animate='visible'
            d='M19.04 109.714C19.3285 108.6 23.5114 97.3188 28.1271 84.7842C34.6179 67.5143 37.3585 61.8041 39.5221 60.9685C41.3972 60.2721 42.6953 60.5507 42.9838 61.5256C43.1281 62.3612 40.3875 70.7176 36.9257 80.1882C32.3101 92.4442 28.7041 99.2686 24.3769 104.561C21.0593 108.6 18.6073 110.828 19.04 109.714Z'
          />
          <motion.path
            variants={pathVariants}
            initial='hidden'
            animate='visible'
            d='M18.1742 72.8077L19.0397 51.9168L14.1355 45.6495C11.395 42.1677 7.35624 37.0146 5.19264 34.2291L1.15392 28.9367L7.78896 29.7724C11.395 30.3295 14.424 30.3295 14.424 29.9116C14.424 29.4938 11.2507 25.4549 7.212 20.9982C3.31752 16.5414 0 12.5025 0 12.0847C0 11.1098 17.0203 13.1989 28.5595 15.8451C53.3688 21.2767 62.8887 30.3295 57.696 43.4211C55.9651 48.0171 48.8974 52.0561 39.3775 54.1451L32.0213 55.8164L26.5402 70.5794C17.0203 96.4841 17.1646 96.4841 18.1742 72.8077ZM42.6951 44.8139C52.0707 40.4964 50.3398 33.3935 38.5121 28.2404C34.3291 26.5691 29.1365 24.6193 26.9729 24.2015C22.3572 23.2265 22.3572 22.948 28.848 32.4186C35.3388 41.7499 35.1946 41.6106 31.1559 40.6357C26.8286 39.6608 26.3959 40.9142 29.8577 44.5353C32.7425 47.5993 36.3485 47.7386 42.6951 44.8139Z'
          />
          <motion.path
            variants={pathVariants}
            initial='hidden'
            animate='visible'
            d='M62.8887 26.9835C61.7347 22.3875 54.09 16.9558 44.2817 13.6133C36.06 10.8278 13.9913 6.6496 7.35623 6.6496H3.60599L7.35623 3.0285C11.1065 -0.592594 11.2507 -0.592594 22.5014 1.07868C50.9167 5.1176 66.7831 11.942 69.8122 21.4125C70.3891 23.3624 69.6679 25.1729 67.2159 27.4013L63.7541 30.4653L62.8887 26.9835Z'
          />
        </motion.svg>
      </Link>
      <div className={styles.nav__items_container}>
        <input
          ref={check}
          type='checkbox'
          className={styles.nav__check}
          id='nav__check'
        />
        <label htmlFor='nav__check' className={styles.nav__toggle}>
          &nbsp;
        </label>

        <ul className={styles.nav__items}>
          <li className={styles.nav__list}>
            <Link href='/'>Intro</Link>
          </li>
          <div className={styles.nav__line} />
          <li className={styles.nav__list}>
            <Link href='/#about'>About</Link>
          </li>
          <div className={styles.nav__line} />
          <li className={styles.nav__list}>
            <Link href='/#skills'>Skills</Link>
          </li>
          <div className={styles.nav__line} />
          <li className={styles.nav__list}>
            <Link href='/#projects'>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
