import { useState, useEffect } from 'react';
import { PHOTOS, CATEGORIES } from '../data/portfolio';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleIds, setVisibleIds] = useState(new Set());

  const filtered = activeCategory === 'ALL'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeCategory);

  // Stagger fade-in when category changes
  useEffect(() => {
    setVisibleIds(new Set());
    const timers = filtered.map((p, i) =>
      setTimeout(() => setVisibleIds((v) => new Set([...v, p.id])), i * 70)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeCategory]); // eslint-disable-line

  // Keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape')      setLightboxIndex(null);
      if (e.key === 'ArrowRight')  setLightboxIndex((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')   setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, filtered.length]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <section id="work" className={styles.section}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div>
            <p className="lbl">Selected Works</p>
            <h2 className={styles.title}>THE<br /><span>WORK</span></h2>
          </div>
          <span className={styles.count}>{String(filtered.length).padStart(2, '0')}</span>
        </div>

        {/* Filters */}
        <div className={`${styles.filterBar} reveal`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
              data-hover
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className={`${styles.cell} ${visibleIds.has(photo.id) ? styles.visible : ''}`}
              onClick={() => setLightboxIndex(i)}
              data-hover
            >
              <img src={photo.src} alt={photo.title} className={styles.img} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.overlayCat}>{photo.category}</div>
                <div className={styles.overlayTitle}>{photo.title}</div>
                <div className={styles.overlayYear}>{photo.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)}
            >←</button>

            <img src={current.src} alt={current.title} className={styles.lightboxImg} />

            <button
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={() => setLightboxIndex((i) => (i + 1) % filtered.length)}
            >→</button>

            <div className={styles.lightboxBar}>
              <div className={styles.lightboxInfo}>
                <span className={styles.lightboxCat}>{current.category}</span>
                <span className={styles.lightboxTitle}>{current.title}</span>
              </div>
              <button className={styles.closeBtn} onClick={() => setLightboxIndex(null)}>
                ESC / CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
