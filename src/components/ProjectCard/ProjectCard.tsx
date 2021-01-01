import styles from "./projectcard.module.scss";

export default function ProjectCard() {
  return (
    <div className={styles.project}>
      <figure className={styles.project__picture}>
        <img
          src='aubit.png'
          alt='aubit'
          className={styles.project__picture_img}
        />
        <figcaption className={styles.project__picture_caption}>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            Repo
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            Link
          </a>
        </figcaption>
      </figure>
      <div className={styles.project__description}>Hello</div>
    </div>
  );
}
