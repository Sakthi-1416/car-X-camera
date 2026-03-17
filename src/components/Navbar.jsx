import { useState, useEffect } from 'react';
import { CONFIG } from '../data/portfolio';
import styles from './Navbar.module.css';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Films', href: '#films' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brandName}>
          CAR <span className={styles.brandX}>✕</span> CAMERA
        </span>
      </div>

      {/* Desktop Links */}
      <div className={styles.links}>
        {LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`${styles.link} ${
              activeSection === href.slice(1) ? styles.active : ''
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Burger Button */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ''}`}>
        {LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            {label}
          </a>
        ))}
      </div>

      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </nav>
  );
}