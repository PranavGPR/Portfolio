import { Typography } from "../../components";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__social_icons}>
        <a target='_blank' href='mailto:pranav.gnanasekar23@gmail.com'>
          <span className='social social-mail'></span>
        </a>
        <a target='_blank' href='https://github.com/PranavGPR'>
          <span className='social social-github'></span>
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/pranav-g-7122111b5/'
        >
          <span className='social social-linkedin'></span>
        </a>
        <a target='_blank' href='https://twitter.com/pranavgpr'>
          <span className='social social-twitter'></span>
        </a>
        <a target='_blank' href='https://www.instagram.com/i_m_mystrix/'>
          <span className='social social-instagram'></span>
        </a>
        <a target='_blank' href='https://t.me/PranavGPR'>
          <span className='social social-telegram'></span>
        </a>
      </div>

      <Typography variant='description' className={styles.footer__content}>
        Copyright &#169; 2021 <br />
        <span className={styles.footer__content_name}>PranavGPR</span>
      </Typography>
    </footer>
  );
}
