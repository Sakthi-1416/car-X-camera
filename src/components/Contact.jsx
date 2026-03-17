import { useState } from 'react';
import { CONFIG } from '../data/portfolio';
import styles from './Contact.module.css';

// 🔗 Google Apps Script endpoint — submits to your Google Sheet
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzYwSy3y7WGeyGr59UvvsCfZrAGh54w3yY_S6YMB2wo2_YIdKGRSh6gULmuXr2y_X6sRA/exec';

const CONTACT_LINKS = [
  { label: 'Instagram DM',        href: `https://www.instagram.com/${CONFIG.instagram}`, external: true  },
  { label: 'Email',               href: 'mailto:hello@example.com',                       external: false },
  { label: 'View Portfolio on IG', href: `https://www.instagram.com/${CONFIG.instagram}`, external: true  },
];

const EMPTY = { name: '', mobile: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(null); // 'success' | 'error'

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // required for Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      // no-cors means we can't read the response — assume success if no throw
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>

      {/* ── Left col ── */}
      <div className="reveal-left">
        <p className="lbl" style={{ marginBottom: 14 }}>Commission</p>
        <h2 className={styles.big}>LET'S<br /><span>SHOOT</span></h2>
        <p className={styles.note}>
          Got a car you want immortalised? Fill the form and I'll get back within 24 hours.
        </p>
        <div className={styles.linkList}>
          {CONTACT_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={styles.linkItem}
              data-hover
            >
              {label}
              <span>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Right col — form ── */}
      <div className="reveal">
        {status === 'success' ? (
          <div className={`${styles.form} ${styles.successMsg}`}>
            <span className={styles.successIcon}>✓</span>
            MESSAGE SENT
            <span className={styles.successSub}>I'll reach out soon.</span>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* Row 1 — Name + Mobile */}
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Name</span>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={set('name')}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Mobile</span>
                <input
                  className={styles.input}
                  type="tel"
                  name="mobile"
                  placeholder="+91 00000 00000"
                  required
                  value={form.mobile}
                  onChange={set('mobile')}
                />
              </div>
            </div>

            {/* Row 2 — Email full width */}
            <div className={`${styles.row} ${styles.rowFull}`}>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Email</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="you@domain.com"
                  required
                  value={form.email}
                  onChange={set('email')}
                />
              </div>
            </div>

            {/* Row 3 — Message full width */}
            <div className={`${styles.row} ${styles.rowFull} ${styles.rowBorder}`}>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Tell me about the shoot — car, location, vibe..."
                  required
                  value={form.message}
                  onChange={set('message')}
                />
              </div>
            </div>

            {/* Footer — error + submit */}
            <div className={styles.formFooter}>
              {status === 'error' && (
                <span className={styles.errorNote}>Something went wrong. Try again.</span>
              )}
              <button
                type="submit"
                className={`${styles.submitBtn} ${loading ? styles.submitLoading : ''}`}
                disabled={loading}
                data-hover
              >
                {loading ? (
                  <span className={styles.spinner}>◌ SENDING</span>
                ) : (
                  'SEND →'
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
  );
}
