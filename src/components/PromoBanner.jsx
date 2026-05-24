export default function PromoBanner() {
  return (
    <section className="promo" id="new">
      <div className="promo__card">
        <div className="promo__text">
          <span className="promo__urgency">
            <span className="promo__dot" aria-hidden="true" />
            Offer ends Sunday
          </span>
          <h2>Your first order: <span className="promo__highlight">20% off</span></h2>
          <p>
            Explore any city collection — Udaipur pearls to Chittorgarh heritage. Use{' '}
            <strong>WELCOME20</strong> at checkout on orders over $100.
          </p>
          <a href="#shop" className="btn btn--gold btn--lg">
            Claim my 20% off
          </a>
          <p className="promo__fine">No account needed · Applied at checkout</p>
        </div>
        <div className="promo__visual">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80"
            alt="Jewelry collection showcase"
          />
        </div>
      </div>
    </section>
  )
}
