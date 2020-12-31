import { Typography } from "../../components";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <Typography variant='description' className={styles.footer__content}>
        Copyright &#169; 2020 by PranavGPR
      </Typography>
    </footer>
  );
}
