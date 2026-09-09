function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copyright}>
          © 2026 SchoolWeb. All rights reserved.
        </p>
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
