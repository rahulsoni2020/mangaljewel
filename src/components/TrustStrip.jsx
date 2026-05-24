const items = [
  { icon: '✓', text: '12,400+ happy customers' },
  { icon: '★', text: '4.9 average rating' },
  { icon: '↺', text: '30-day easy returns' },
  { icon: '◇', text: 'Certified authentic' },
]

export default function TrustStrip() {
  return (
    <div className="trust-strip" role="region" aria-label="Store guarantees">
      <ul>
        {items.map((item) => (
          <li key={item.text}>
            <span className="trust-strip__icon">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
