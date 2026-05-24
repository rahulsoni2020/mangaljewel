export default function Newsletter() {
  return (
    <section className="newsletter" id="gifts">
      <div className="newsletter__card">
        <div className="newsletter__icon" aria-hidden="true">✦</div>
        <h2>Get 10% off before anyone else</h2>
        <p>
          Join 8,000+ subscribers for early access to new drops, styling tips, and
          members-only offers — <strong>no spam, unsubscribe anytime.</strong>
        </p>
        <form
          className="newsletter__form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn btn--primary">
            Unlock 10% off
          </button>
        </form>
        <p className="newsletter__trust">🔒 We respect your privacy. One click to unsubscribe.</p>
      </div>
    </section>
  )
}
