import styles from './FilmEdge.module.css';

const HOLES = Array.from({ length: 40 });

export default function FilmEdge() {
  return (
    <>
      <div className={`${styles.edge} ${styles.left}`}>
        {HOLES.map((_, i) => <div key={i} className={styles.hole} />)}
      </div>
      <div className={`${styles.edge} ${styles.right}`}>
        {HOLES.map((_, i) => <div key={i} className={styles.hole} />)}
      </div>
    </>
  );
}
