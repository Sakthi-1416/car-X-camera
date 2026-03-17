import { useRef, useState } from 'react';
import { VIDEOS } from '../data/portfolio';
import styles from './Films.module.css';

export default function Films() {
  const [playing, setPlaying] = useState({});
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const vid = videoRefs.current[id];
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlaying((p) => ({ ...p, [id]: true }));
    } else {
      vid.pause();
      setPlaying((p) => ({ ...p, [id]: false }));
    }
  };

  return (
    <section id="films" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div>
          <p className="lbl">Motion Pictures</p>
          <h2 className={styles.title}>THE<br /><span>FILMS</span></h2>
        </div>
        <div className={styles.countCol}>
          <div className={styles.countNum}>{String(VIDEOS.length).padStart(2, '0')}</div>
          <p className="lbl">REELS</p>
        </div>
      </div>

      <div className={styles.grid}>
        {VIDEOS.map((video, i) => (
          <div key={video.id} className={`${styles.card} reveal`}>
            {/* Video side */}
            <div
              className={`${styles.videoSide} ${playing[video.id] ? styles.playing : ''}`}
              onClick={() => togglePlay(video.id)}
              data-hover
            >
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                className={styles.videoEl}
                poster={video.poster}
                preload="metadata"
                onEnded={() => setPlaying((p) => ({ ...p, [video.id]: false }))}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className={styles.playOverlay}>
                <div className={styles.playIcon}>
                  {playing[video.id] ? '⏸' : '▶'}
                </div>
              </div>
            </div>

            {/* Info side */}
            <div className={styles.infoSide}>
              <div className={styles.index}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className={styles.year}>{video.year}</div>
                <div className={styles.name}>{video.title}</div>
                <p className={styles.desc}>{video.desc}</p>
              </div>
              <div className={styles.duration}>{video.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
