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
    <footer className="mt-auto bg-[#173b3a] px-5 pb-5 pt-13 text-[#e9f2eb]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-5 gap-y-8 pb-10 min-[441px]:grid-cols-2 min-[701px]:grid-cols-[minmax(240px,1.5fr)_repeat(2,minmax(160px,1fr))] min-[701px]:gap-12">
        <section className="min-[441px]:col-span-2 min-[701px]:col-span-1" aria-labelledby="footer-school-name">
          <Link to={`/${packageType}`} className="inline-flex items-center gap-3 text-base font-bold text-white hover:text-[#f3cd75] focus-visible:text-[#f3cd75]">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#e7b84b] font-extrabold text-[#173b3a]" aria-hidden="true">G</span>
            <span id="footer-school-name">Greenfield International School</span>
          </Link>
          <p className="mt-4 max-w-[300px] text-sm text-[#c3d4cc]">Learning, character, and community for every student.</p>
        </section>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-sm font-bold tracking-wide text-white">Explore</h2>
          <ul className="grid list-none grid-cols-2 gap-x-4 gap-y-2">
            {linksByPackage[packageType].map(([label, to]) => (
              <li key={to}><Link className="text-sm text-[#c3d4cc] transition-colors hover:text-[#f3cd75] focus-visible:text-[#f3cd75]" to={to}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="mb-4 text-sm font-bold tracking-wide text-white">Contact</h2>
          <address className="mb-3 text-sm not-italic leading-relaxed text-[#c3d4cc]">
            123 Education Avenue<br />
            Nairobi, Kenya
          </address>
          <a className="mt-2 block w-fit text-sm text-[#c3d4cc] transition-colors hover:text-[#f3cd75] focus-visible:text-[#f3cd75]" href="tel:+254700123456">+254 700 123 456</a>
          <a className="mt-2 block w-fit text-sm text-[#c3d4cc] transition-colors hover:text-[#f3cd75] focus-visible:text-[#f3cd75]" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </section>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 border-t border-white/15 pt-5 text-xs text-[#afc4b9] min-[441px]:flex-row min-[441px]:items-center">
        <p>© {new Date().getFullYear()} Greenfield International School. All rights reserved.</p>
        <Link className="text-[#c3d4cc] transition-colors hover:text-[#f3cd75] focus-visible:text-[#f3cd75]" to={`/${packageType}/contact`}>Get in touch <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  )
}

export default Footer
