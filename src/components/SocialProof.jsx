export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Customer activity">
      <div className="social-proof__inner">
        <div className="social-proof__avatars" aria-hidden="true">
          <span>P</span>
          <span>E</span>
          <span>A</span>
          <span>+</span>
        </div>
        <p>
          <strong>128 orders</strong> placed in the last 24 hours ·{' '}
          <span className="social-proof__live">Live</span> — 34 people shopping now
        </p>
      </div>
    </section>
  )
}
