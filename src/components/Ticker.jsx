import { CONFIG } from '../data/portfolio';
import styles from './Ticker.module.css';

const ITEMS = [
  CONFIG.photographer,
  'AVAILABLE FOR COMMISSIONS',
  'EDITORIAL · DOCUMENTARY · COMMERCIAL',
  `@${CONFIG.instagram}`,
  'BASED EVERYWHERE',
  'PHOTOGRAPHY & FILM',
];

const DOUBLED = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {DOUBLED.map((text, i) => (
          <span key={i}>
            {text}
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
