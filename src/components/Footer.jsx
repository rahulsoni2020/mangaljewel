import { COLLECTIONS } from '../data/collections'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="#" className="navbar__logo">
            <span className="navbar__logo-icon">✦</span>
            MJ Jewels
          </a>
          <p>
            Rajasthan&apos;s five legendary cities — one destination for pearls, gold, rose
            gold, blue diamonds &amp; Rajputana heritage.
          </p>
        </div>

        <div>
          <h4>City collections</h4>
          <ul>
            {COLLECTIONS.map((city) => (
              <li key={city.id}>
                <a href={`#collection-${city.id}`}>{city.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul className="footer__social">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 MJ Jewels. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
