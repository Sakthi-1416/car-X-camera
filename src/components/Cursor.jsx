import { useState, useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const [pos, setPos]   = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hov, setHov]   = useState(false);

  const ringRef = useRef({ x: -100, y: -100 });
  const posRef  = useRef({ x: -100, y: -100 });
  const rafRef  = useRef();

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHov(!!el?.closest('a, button, [data-hover]'));
    };

    window.addEventListener('mousemove', onMove);

    const animate = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.14;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.14;
      setRing({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.dot} ${hov ? styles.hovered : ''}`}
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      />
      <div
        className={`${styles.ring} ${hov ? styles.hovered : ''}`}
        style={{ left: ring.x - 17, top: ring.y - 17 }}
      />
    </>
  );
}
