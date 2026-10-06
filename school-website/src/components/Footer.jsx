function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="schoolweb-footer-content">
          <span className="schoolweb-footer-mark" aria-hidden="true">S</span>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} SchoolWeb. Built for curious minds.
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#1e293b',
    color: '#fff',
    padding: '2rem 0',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center'
  },
  copyright: {
    opacity: 0.8
  }
}

export default Footer
