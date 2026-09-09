import { Link } from 'react-router-dom'

const events = [
  {
    date: 'September 20, 2026',
    time: '9:00 AM - 3:00 PM',
    title: 'Annual Sports Day',
    desc: 'Inter-house sports competitions, relay races, and family-friendly activities for all grades.',
    location: 'Main School Field',
    featured: true
  },
  {
    date: 'September 25, 2026',
    time: '5:00 PM - 7:00 PM',
    title: 'Open Day & Campus Tour',
    desc: 'Prospective families are invited to tour the campus, meet teachers, and learn about our programs.',
    location: 'School Auditorium',
    featured: true
  },
  {
    date: 'October 10, 2026',
    time: '9:00 AM - 12:00 PM',
    title: 'STEM Fair 2026',
    desc: 'Students showcase science projects, robotics demonstrations, and innovation booths.',
    location: 'School Hall & Science Labs',
    featured: true
  },
  {
    date: 'October 15, 2026',
    time: '6:00 PM - 8:00 PM',
    title: 'PTA General Meeting',
    desc: 'Join our Parent-Teacher Association meeting to discuss upcoming events and volunteer opportunities.',
    location: 'Staff Room'
  },
  {
    date: 'November 3, 2026',
    time: '4:00 PM - 6:00 PM',
    title: 'Cultural Heritage Day',
    desc: 'Students and families share food, music, and traditions from their diverse cultural backgrounds.',
    location: 'School Grounds'
  },
  {
    date: 'December 12, 2026',
    time: '5:00 PM - 9:00 PM',
    title: 'End-of-Year Christmas Gala',
    desc: 'An evening of carols, drama performances, dinner, and celebration for the whole school community.',
    location: 'School Auditorium'
  },
  {
    date: 'January 15, 2027',
    time: '10:00 AM - 12:00 PM',
    title: 'New Year Welcome Assembly',
    desc: 'Kick off the new term with student performances, awards, and an overview of the year ahead.',
    location: 'School Auditorium'
  },
  {
    date: 'February 14, 2027',
    time: '9:00 AM - 2:00 PM',
    title: 'Science & Innovation Expo',
    desc: 'A showcase of student research projects, tech prototypes, and creative experiments.',
    location: 'School Hall'
  }
]

const featured = events.filter(e => e.featured)
const more = events.filter(e => !e.featured)

function PremiumEvents() {
  return (
    <div style={styles.container}>
      <section style={styles.pageHeader}>
        <span style={styles.badge}>⭐ Premium</span>
        <h1 style={styles.pageTitle}>Events Calendar</h1>
        <p style={styles.pageSubtitle}>Save the date for our upcoming school events</p>
      </section>

      <section style={styles.upcoming}>
        <h2 style={styles.sectionTitle}>Featured Events</h2>
        <div style={styles.eventList}>
          {featured.map(event => (
            <div key={event.title} style={styles.eventCard}>
              <div style={styles.eventDate}>
                <div style={styles.eventMonth}>
                  {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                </div>
                <div style={styles.eventDay}>
                  {new Date(event.date).getDate()}
                </div>
              </div>
              <div style={styles.eventDetails}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventTime}>🕐 {event.time}</p>
                <p style={styles.eventLocation}>📍 {event.location}</p>
                <p style={styles.eventDesc}>{event.desc}</p>
                <div style={styles.eventAction}>
                  <span style={styles.rsvpButton}>📅 Add to Calendar</span>
                  <span style={styles.registerButton}>✋ RSVP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.more}>
        <h2 style={styles.sectionTitle}>More Events</h2>
        <div style={styles.eventList}>
          {more.map(event => (
            <div key={event.title} style={styles.eventCardLite}>
              <div style={styles.eventDate}>
                <div style={styles.eventMonth}>
                  {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                </div>
                <div style={styles.eventDay}>
                  {new Date(event.date).getDate()}
                </div>
              </div>
              <div style={styles.eventDetailsLite}>
                <h3 style={styles.eventTitleLite}>{event.title}</h3>
                <p style={styles.eventTimeLite}>🕐 {event.time}</p>
                <p style={styles.eventLocationLite}>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/premium" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  badge: { display: 'inline-block', background: '#fbbf24', color: '#1e1b4b', padding: '0.25rem 0.7rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.75rem' },
  pageTitle: { fontSize: '2.5rem', color: '#1e1b4b', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  upcoming: { marginBottom: '2.5rem' },
  sectionTitle: { fontSize: '1.75rem', color: '#1e1b4b', textAlign: 'center', marginBottom: '1.5rem' },
  eventList: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  eventCard: { background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden', display: 'flex' },
  eventDate: { background: '#1e1b4b', color: '#fff', width: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  eventMonth: { fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' },
  eventDay: { fontSize: '2.2rem', fontWeight: 'bold', lineHeight: 1 },
  eventDetails: { padding: '1.5rem', flex: 1 },
  eventTitle: { fontSize: '1.1rem', color: '#1e1b4b', marginBottom: '0.5rem' },
  eventTime: { fontSize: '0.88rem', color: '#64748b', marginBottom: '0.25rem' },
  eventLocation: { fontSize: '0.88rem', color: '#64748b', marginBottom: '0.75rem' },
  eventDesc: { fontSize: '0.92rem', color: '#475569', lineHeight: 1.5, marginBottom: '1rem' },
  eventAction: { display: 'flex', gap: '0.5rem' },
  rsvpButton: { background: '#fbbf24', color: '#1e1b4b', padding: '0.35rem 0.85rem', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 'bold' },
  registerButton: { background: '#7c3aed', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 'bold' },
  more: { marginBottom: '2rem' },
  eventCardLite: { background: '#fff', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #fbbf24', display: 'flex', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
  eventDetailsLite: { flex: 1, paddingLeft: '1rem' },
  eventTitleLite: { fontSize: '1rem', color: '#1e1b4b', marginBottom: '0.25rem' },
  eventTimeLite: { fontSize: '0.82rem', color: '#64748b', marginBottom: '0.25rem' },
  eventLocationLite: { fontSize: '0.82rem', color: '#64748b' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#7c3aed', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumEvents
