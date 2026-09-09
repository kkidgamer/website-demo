import { Link } from 'react-router-dom'

function PremiumHome() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>⭐ Premium Experience</span>
          <h1 style={styles.heroTitle}>Welcome to Greenfield International School</h1>
          <p style={styles.heroSubtitle}>
            Empowering young minds for a brighter tomorrow since 1985
          </p>
          <div style={styles.heroButtons}>
            <Link to="/premium/academics" style={styles.primaryBtn}>Explore Academics</Link>
            <Link to="/premium/contact" style={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.heroPlaceholder}>
            <span style={styles.heroIcon}>🏫</span>
          </div>
        </div>
      </section>

      <section style={styles.stats}>
        {[
          { number: '800+', label: 'Students' },
          { number: '60+', label: 'Teachers' },
          { number: '40+', label: 'Years' },
          { number: '98%', label: 'Pass Rate' }
        ].map(stat => (
          <div key={stat.label} style={styles.statCard}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section style={styles.aboutPreview}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About Our School</h2>
          <p style={styles.paragraph}>
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development, and inclusive learning.
            We offer a well-rounded curriculum, modern facilities, and a supportive
            community that prepares students for success in life.
          </p>
          <Link to="/premium/about" style={styles.learnMore}>Learn More About Us →</Link>
        </div>
      </section>

      <section style={styles.highlights}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.highlightGrid}>
          {[
            { icon: '📚', title: 'Strong Academics', desc: 'Accredited curriculum with experienced educators and modern teaching methods.' },
            { icon: '🔬', title: 'State-of-the-Art Facilities', desc: 'Science labs, computer labs, sports fields, library, and a modern auditorium.' },
            { icon: '🎨', title: 'Rich Extracurriculars', desc: 'Sports, music, drama, debate, robotics, and community service programs.' },
            { icon: '👨‍👩‍👧‍👦', title: 'Active Community', desc: 'A supportive parent-teacher association and regular community events.' },
            { icon: '🌐', title: 'Multi-Language Support', desc: 'English, French, and Swahili programs for global preparedness.' },
            { icon: '💻', title: 'Digital Learning', desc: 'One-to-one device programs, online portal, and virtual classrooms.' }
          ].map(item => (
            <div key={item.title} style={styles.highlightCard}>
              <div style={styles.highlightIcon}>{item.icon}</div>
              <h3 style={styles.highlightTitle}>{item.title}</h3>
              <p style={styles.highlightDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.events}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <div style={styles.eventsList}>
          {[
            { date: 'Sep 20', title: 'Annual Sports Day', time: '9:00 AM' },
            { date: 'Sep 25', title: 'Open Day & Campus Tour', time: '5:00 PM' },
            { date: 'Oct 10', title: 'STEM Fair 2026', time: '9:00 AM' }
          ].map(event => (
            <div key={event.title} style={styles.eventItem}>
              <div style={styles.eventDate}>{event.date}</div>
              <div style={styles.eventInfo}>
                <h4 style={styles.eventTitle}>{event.title}</h4>
                <p style={styles.eventTime}>🕐 {event.time}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/premium/events" style={styles.viewAll}>View All Events →</Link>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to Join Greenfield?</h2>
        <p style={styles.ctaText}>
          Admissions are now open for the upcoming academic year. Schedule a campus tour today.
        </p>
        <Link to="/premium/contact" style={styles.ctaButton}>Apply for Admission</Link>
      </section>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' },
  hero: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #7c3aed 100%)',
    color: '#fff', padding: '5rem 2rem', borderRadius: '12px', marginBottom: '2rem', gap: '2rem', flexWrap: 'wrap'
  },
  badge: {
    display: 'inline-block', background: '#fbbf24', color: '#1e1b4b', padding: '0.3rem 0.8rem',
    borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem'
  },
  heroContent: { flex: '1 1 400px' },
  heroTitle: { fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 },
  heroSubtitle: { fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' },
  heroButtons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  primaryBtn: { padding: '0.75rem 1.5rem', background: '#fbbf24', color: '#1e1b4b', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' },
  secondaryBtn: { padding: '0.75rem 1.5rem', border: '2px solid #fff', color: '#fff', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' },
  heroImage: { flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  heroPlaceholder: { fontSize: '6rem', background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.3)' },
  heroIcon: {},
  stats: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' },
  statCard: { background: '#fff', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  statNumber: { fontSize: '2rem', fontWeight: 'bold', color: '#7c3aed' },
  statLabel: { fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' },
  aboutPreview: { background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '3rem' },
  sectionContent: { maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  sectionTitle: { fontSize: '2rem', color: '#1e1b4b', marginBottom: '1rem', textAlign: 'center' },
  paragraph: { fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' },
  learnMore: { color: '#7c3aed', fontWeight: 'bold', textDecoration: 'none' },
  highlights: { marginBottom: '3rem' },
  highlightGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' },
  highlightCard: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center' },
  highlightIcon: { fontSize: '3rem', marginBottom: '1rem' },
  highlightTitle: { fontSize: '1.25rem', color: '#1e1b4b', marginBottom: '0.5rem' },
  highlightDesc: { color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 },
  events: { marginBottom: '3rem' },
  eventsList: { display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' },
  eventItem: { display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#fff', padding: '1.25rem 1.5rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' },
  eventDate: { background: '#1e1b4b', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem', minWidth: '70px', textAlign: 'center' },
  eventInfo: { flex: 1 },
  eventTitle: { fontSize: '1rem', color: '#1e1b4b', marginBottom: '0.25rem' },
  eventTime: { fontSize: '0.85rem', color: '#64748b' },
  viewAll: { color: '#7c3aed', fontWeight: 'bold', textDecoration: 'none' },
  cta: { background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)', color: '#fff', padding: '3rem 2rem', borderRadius: '12px', textAlign: 'center' },
  ctaTitle: { fontSize: '2rem', marginBottom: '1rem' },
  ctaText: { fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' },
  ctaButton: { display: 'inline-block', padding: '0.85rem 2rem', background: '#fbbf24', color: '#1e1b4b', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }
}

export default PremiumHome
