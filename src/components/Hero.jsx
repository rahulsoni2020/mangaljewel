export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__rating">
          <span className="hero__stars" aria-hidden="true">★★★★★</span>
          <span>Rated 4.9 · Rajasthan heritage jewelry</span>
        </div>

        <h1 className="hero__title">
          Five royal cities,
          <br />
          <em>one jewelry house</em>
        </h1>

        <p className="hero__subtitle">
          Shop by city collection — Udaipur pearls &amp; silver, Jodhpur blue diamonds,
          Jaisalmer pure gold, Jaipur rose gold, and Chittorgarh traditional Rajputana
          pieces. Certified, gift-ready, delivered in 2–4 days.
        </p>

        <ul className="hero__cities" aria-label="City collections">
          <li>Udaipur</li>
          <li>Jodhpur</li>
          <li>Jaisalmer</li>
          <li>Jaipur</li>
          <li>Chittorgarh</li>
        </ul>

        <div className="hero__ctas">
          <a href="#collections" className="btn btn--primary btn--lg">
            Explore city collections
          </a>
          <a href="#shop" className="btn btn--outline">
            Shop signature pieces
          </a>
        </div>

        <p className="hero__micro">
          <span className="hero__micro-dot" aria-hidden="true" />
          5 curated buckets · 380+ designs across Rajasthan
        </p>

        <div className="hero__stats">
          <div>
            <strong>5</strong>
            <span>City collections</span>
          </div>
          <div>
            <strong>12K+</strong>
            <span>Happy customers</span>
          </div>
          <div>
            <strong>30-day</strong>
            <span>Easy returns</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__card hero__card--main">
          <img
            src="https://images.unsplash.com/photo-1596944924616-7b384c8e3272?w=600&q=80"
            alt="Traditional Rajasthani jewelry"
          />
          <div className="hero__card-badge">
            <span className="hero__badge-tag">Chittorgarh</span>
            <span className="hero__badge-price">Rajasthani heritage</span>
          </div>
        </div>
        <div className="hero__card hero__card--float">
          <img
            src="https://images.unsplash.com/photo-1617032215565-a7e99744ee3e?w=400&q=80"
            alt="Pearl jewelry from Udaipur collection"
          />
          <span className="hero__float-label">Udaipur</span>
        </div>
      </div>
    </section>
  )
}
