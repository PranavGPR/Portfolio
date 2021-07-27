import { Fade } from "react-reveal";

import { Typography } from "components";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <Fade bottom cascade>
        <Typography variant='h6' style={{ marginBottom: "2rem" }}>
          Contact me through
        </Typography>
      </Fade>

      <Fade bottom cascade>
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
          <a target='_blank' href='https://www.instagram.com/pranavgpr/'>
            <span className='social social-instagram'></span>
          </a>
          <a target='_blank' href='https://t.me/GPR'>
            <span className='social social-telegram'></span>
          </a>
        </div>
      </Fade>

      <Fade bottom cascade>
        <Typography variant='description' className={styles.footer__content}>
          Designed and Built by <br />
          <span className={styles.footer__content_name}>Pranav Gnanasekar</span>
        </Typography>
      </Fade>
    </footer>
  );
}
