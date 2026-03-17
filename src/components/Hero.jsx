import { useState, useEffect } from 'react';
import { CONFIG, PHOTOS } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let n = 0;
    const timer = setInterval(() => {
      n += 7;
      if (n >= PHOTOS.length) { setCount(PHOTOS.length); clearInterval(timer); }
      else setCount(n);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgImage} />
      <div className={styles.gridLines} />
      <div className={styles.counter}>{String(count).padStart(2, '0')}</div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          VOL. IX — {new Date().getFullYear()} — CAR X CAMERA
        </p>
        <h1 className={styles.headline}>
          <span className={styles.line1}>CAPTURE</span>
          <span className={styles.line2}>THE</span>
          <span className={styles.line3}>REAL</span>
        </h1>
        <div className={styles.meta}>
          <p className={styles.tagline}>"{CONFIG.tagline}"</p>
          <a href="#work" className={styles.cta}>
            <span className={styles.ctaText}>VIEW WORK</span>
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>

      <div className={styles.statsBar}>
        {CONFIG.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
