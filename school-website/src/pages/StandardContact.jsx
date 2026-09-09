import { useState } from 'react'
import { Link } from 'react-router-dom'

function StandardContact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div style={styles.container}>
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.pageSubtitle}>We'd love to hear from you</p>
      </section>

      <div style={styles.contactGrid}>
        <section style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📍</div>
            <div>
              <h3 style={styles.infoLabel}>Our Location</h3>
              <p style={styles.infoText}>
                Greenfield International School<br />
                123 Education Avenue<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📞</div>
            <div>
              <h3 style={styles.infoLabel}>Phone</h3>
              <p style={styles.infoText}>+254 700 123 456</p>
              <p style={styles.infoText}>+254 700 987 654</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>✉️</div>
            <div>
              <h3 style={styles.infoLabel}>Email</h3>
              <a href="mailto:office@greenfield.academy" style={styles.infoLink}>office@greenfield.academy</a>
              <br />
              <a href="mailto:admissions@greenfield.academy" style={styles.infoLink}>admissions@greenfield.academy</a>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>🕐</div>
            <div>
              <h3 style={styles.infoLabel}>Office Hours</h3>
              <p style={styles.infoText}>Monday - Friday: 7:30 AM - 5:00 PM</p>
              <p style={styles.infoText}>Saturday: 9:00 AM - 1:00 PM</p>
              <p style={{ ...styles.infoText, color: '#ef4444' }}>Sunday: Closed</p>
            </div>
          </div>

          <div style={styles.mapPlaceholder}>
            <span>🗺️ School Location Map</span>
          </div>
        </section>

        <section style={styles.contactForm}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <form style={styles.form} onSubmit={e => e.preventDefault()}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange} style={styles.select}>
                <option value="">Select a subject</option>
                <option value="admissions">Admissions Inquiry</option>
                <option value="academics">Academic Question</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                style={styles.textarea}
                required
              />
            </div>

            <button type="submit" style={styles.submitBtn}>Send Message</button>

            <p style={styles.formNote}>
              We typically respond within 1-2 business days. For urgent matters, please call us.
            </p>
          </form>
        </section>
      </div>

      <div style={styles.backNav}>
        <Link to="/standard" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: '#1e3a5f', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  contactGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' },
  contactInfo: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  contactForm: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  sectionTitle: { fontSize: '1.5rem', color: '#1e3a5f', marginBottom: '1.5rem', textAlign: 'center' },
  infoItem: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' },
  infoIcon: { fontSize: '1.75rem', flexShrink: 0 },
  infoLabel: { fontSize: '0.95rem', color: '#2563eb', marginBottom: '0.3rem' },
  infoText: { fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 },
  infoLink: { fontSize: '0.92rem', color: '#2563eb', textDecoration: 'none', lineHeight: 1.6 },
  mapPlaceholder: { background: '#f1f5f9', borderRadius: '10px', padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' },
  form: { display: 'flex', flexDirection: 'column' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '0.9rem', color: '#334155', marginBottom: '0.4rem', fontWeight: 500 },
  input: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' },
  select: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', background: '#fff', outline: 'none' },
  textarea: { width: '100%', padding: '0.7rem 0.9rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', resize: 'vertical', outline: 'none' },
  submitBtn: { background: '#2563eb', color: '#fff', border: 'none', padding: '0.85rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', width: '100%' },
  formNote: { fontSize: '0.82rem', color: '#64748b', textAlign: 'center', marginTop: '0.75rem' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#2563eb', textDecoration: 'none', fontWeight: 500 }
}

export default StandardContact
