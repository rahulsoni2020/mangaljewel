const features = [
  {
    icon: '◇',
    title: 'Certified Quality',
    desc: 'Every piece is inspected and comes with authenticity assurance.',
  },
  {
    icon: '↺',
    title: '30-Day Returns',
    desc: 'Not in love? Return hassle-free within 30 days of delivery.',
  },
  {
    icon: '✧',
    title: 'Secure Checkout',
    desc: 'Encrypted payments and buyer protection on every order.',
  },
  {
    icon: '♡',
    title: 'Gift Ready',
    desc: 'Elegant packaging included — perfect for birthdays and weddings.',
  },
]

export default function TrustSection() {
  return (
    <section className="section trust">
      <div className="trust__grid">
        {features.map((item) => (
          <div key={item.title} className="trust__item">
            <span className="trust__icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
