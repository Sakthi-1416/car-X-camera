import { CONFIG, GEAR } from '../data/portfolio';
import styles from './About.module.css';
import aboume from '../assets/about.jpeg'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      {/* Image col */}
      <div className={styles.imageCol}>
        <img
          src={aboume}
          alt={CONFIG.photographer}
          className={styles.img}
        />
        <div className={styles.imgOverlay} />
        <div className={styles.sticker}>
          <span>EST.</span>
          <span className={styles.stickerYear}>2016</span>
        </div>
      </div>

      {/* Text col */}
      <div className={`${styles.textCol} reveal-left`}>
        <div>
          <p className="lbl">The Person</p>
          <h2 className={styles.name}>
            CAR <span>✕</span><br /><span>CAMERA</span>
          </h2>
          <p className={styles.bio}>"{CONFIG.bio}"</p>
        </div>

        <div>
          <div className={styles.statsRow}>
            {CONFIG.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.gearBlock}>
            <div className={styles.gearLabel}>Kit</div>
            <div className={styles.gearItems}>
              {GEAR.map((g) => (
                <span key={g} className={styles.gearTag} data-hover>{g}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
