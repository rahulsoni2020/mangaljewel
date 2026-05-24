import { COLLECTIONS } from '../data/collections'

export default function Collections() {
  return (
    <section className="section collections-section" id="collections">
      <div className="section__header">
        <span className="section__label">Rajasthan heritage</span>
        <h2>Five cities, five collections</h2>
        <p>
          Each bucket celebrates a legendary city — pearls from Udaipur, blue diamonds from
          Jodhpur, pure gold from Jaisalmer, rose gold from Jaipur, and Rajputana craft from
          Chittorgarh.
        </p>
      </div>

      <div className="collections">
        {COLLECTIONS.map((collection) => (
          <a
            key={collection.id}
            href={`#collection-${collection.id}`}
            id={`collection-${collection.id}`}
            className={`collection-card collection-card--${collection.theme}`}
          >
            <div className="collection-card__image">
              <img src={collection.image} alt={`${collection.name} collection jewelry`} />
              <span className="collection-card__epithet">{collection.epithet}</span>
            </div>
            <div className="collection-card__body">
              <div className="collection-card__head">
                <h3>{collection.name}</h3>
                <span className="collection-card__tagline">{collection.tagline}</span>
              </div>
              <p className="collection-card__desc">{collection.description}</p>
              <ul className="collection-card__types" aria-label="Jewelry types">
                {collection.jewelry.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
              <div className="collection-card__footer">
                <span className="collection-card__count">{collection.count}</span>
                <span className="collection-card__cta">
                  Explore collection
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
