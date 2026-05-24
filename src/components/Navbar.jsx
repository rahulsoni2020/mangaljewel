import { COLLECTIONS } from '../data/collections'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">✦</span>
          MJ Jewels
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <div className="navbar__dropdown">
            <button type="button" className="navbar__dropdown-btn" aria-haspopup="true">
              Cities
              <span aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown-menu" role="menu">
              {COLLECTIONS.map((city) => (
                <li key={city.id} role="none">
                  <a href={`#collection-${city.id}`} role="menuitem">
                    <strong>{city.name}</strong>
                    <span>{city.epithet}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#shop">Shop</a>
          <a href="#new">Offers</a>
        </nav>

        <div className="navbar__actions">
          <button type="button" className="navbar__icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="navbar__icon-btn" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button type="button" className="navbar__icon-btn navbar__cart" aria-label="Cart">
            <BagIcon />
            <span className="navbar__cart-count">2</span>
          </button>
          <a href="#collections" className="btn btn--primary btn--sm navbar__shop-btn">
            Shop now
          </a>
        </div>
      </div>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h12l1 14H5L6 6z" />
      <path d="M9 6V5a3 3 0 0 1 6 0v1" />
    </svg>
  )
}
