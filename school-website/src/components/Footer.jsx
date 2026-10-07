import { Link, useLocation } from 'react-router-dom'
import { CONTACT_EMAIL } from '../utils/contact'

const linksByPackage = {
  basic: [
    ['Home', '/basic'], ['About', '/basic/about'], ['Admissions', '/basic/admissions'],
    ['Gallery', '/basic/gallery'], ['Contact', '/basic/contact'],
  ],
  standard: [
    ['Home', '/standard'], ['About', '/standard/about'], ['Academics', '/standard/academics'],
    ['News', '/standard/news'], ['Events', '/standard/events'], ['Contact', '/standard/contact'],
  ],
  premium: [
    ['Home', '/premium'], ['About', '/premium/about'], ['Academics', '/premium/academics'],
    ['News', '/premium/news'], ['Events', '/premium/events'], ['Contact', '/premium/contact'],
  ],
}

function Footer() {
  const { pathname } = useLocation()
  const packageType = pathname.startsWith('/basic')
    ? 'basic'
    : pathname.startsWith('/premium')
      ? 'premium'
      : 'standard'

  return (
    <footer className="schoolweb-footer">
      <div className="schoolweb-footer-main">
        <section className="schoolweb-footer-about" aria-labelledby="footer-school-name">
          <Link to={`/${packageType}`} className="schoolweb-footer-brand">
            <span className="schoolweb-footer-mark" aria-hidden="true">G</span>
            <span id="footer-school-name">Greenfield International School</span>
          </Link>
          <p>Learning, character, and community for every student.</p>
        </section>

        <nav className="schoolweb-footer-links" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            {linksByPackage[packageType].map(([label, to]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <section className="schoolweb-footer-contact" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading">Contact</h2>
          <address>
            123 Education Avenue<br />
            Nairobi, Kenya
          </address>
          <a href="tel:+254700123456">+254 700 123 456</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </section>
      </div>

      <div className="schoolweb-footer-bottom">
        <p>© {new Date().getFullYear()} Greenfield International School. All rights reserved.</p>
        <Link to={`/${packageType}/contact`}>Get in touch <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  )
}

export default Footer
