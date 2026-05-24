const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Mumbai',
    text: 'The ring exceeded my expectations — delicate, sparkly, and arrived in beautiful packaging.',
    rating: 5,
    initial: 'P',
  },
  {
    id: 2,
    name: 'Emma L.',
    location: 'London',
    text: 'Easy to browse, fast shipping, and customer support helped me pick the perfect gift.',
    rating: 5,
    initial: 'E',
  },
  {
    id: 3,
    name: 'Ananya R.',
    location: 'Delhi',
    text: 'I have ordered three times now. Quality is consistent and the site is so easy to use.',
    rating: 5,
    initial: 'A',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section__header">
        <span className="section__label">Social proof</span>
        <h2>Loved by real customers</h2>
        <p>Verified reviews from people who bought &amp; wore our pieces</p>
      </div>

      <div className="testimonials__aggregate">
        <span className="testimonials__big">4.9</span>
        <div>
          <span className="testimonials__stars" aria-hidden="true">★★★★★</span>
          <p>Based on 3,200+ verified reviews</p>
        </div>
      </div>

      <div className="testimonials__grid">
        {reviews.map((review) => (
          <blockquote key={review.id} className="testimonial-card">
            <header className="testimonial-card__head">
              <span className="testimonial-card__avatar">{review.initial}</span>
              <div>
                <strong>{review.name}</strong>
                <span>{review.location} · Verified buyer</span>
              </div>
            </header>
            <div className="testimonial-card__stars" aria-label={`${review.rating} out of 5 stars`}>
              {'★'.repeat(review.rating)}
            </div>
            <p>&ldquo;{review.text}&rdquo;</p>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
