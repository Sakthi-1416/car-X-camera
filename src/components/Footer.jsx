import { CONFIG } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © {new Date().getFullYear()} <a style={{textDecoration:'none'}} href="http://zaclab.in" target="_blank" rel="noopener noreferrer">Zac LAb</a>
      </div>
      <div className={styles.brand}>
        CAR <span className={styles.dot}>✕</span> CAMERA
      </div>
      <div className={styles.right}>
        <a
          href={`https://www.instagram.com/${CONFIG.instagram}_?igsh=MWk3N2kwMWdyeGpsMQ==`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.igLink}
          data-hover
        >
          @{CONFIG.instagram}
        </a>
      </div>
    </footer>
  );
}
