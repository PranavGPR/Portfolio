import styles from "./hero.module.scss";
import { Typography } from "../../components";

const tagName = "< GPR />";

export default function Hero() {
  return (
    <section className={styles.hero__container} id='hero'>
      <div className={styles.hero__heading}>
        <Typography variant='h5'>Hey There!</Typography>
        <Typography variant='h1'>
          I'm <span className={styles.hero__name}>Pranav</span>
        </Typography>
        <Typography variant='h4' style={{ color: "gray" }}>
          A Full Stack Developer.
        </Typography>
      </div>
      <div className={styles.hero__tag} role='img'>
        {tagName}
      </div>
    </section>
  );
}
