import { FEATURED_PRODUCTS, getCollectionById } from '../data/collections'

export default function FeaturedProducts() {
  return (
    <section className="section section--blush" id="shop">
      <div className="section__header section__header--row">
        <div>
          <span className="section__label">Across all buckets</span>
          <h2>Signature pieces from each city</h2>
          <p>One standout from every collection — handpicked for weddings, gifts &amp; heirlooms</p>
        </div>
        <a href="#collections" className="link-arrow">
          All collections
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="products">
        {FEATURED_PRODUCTS.map((product) => {
          const collection = getCollectionById(product.collectionId)
          return (
            <article key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
                {collection && (
                  <span
                    className={`product-card__collection product-card__collection--${collection.theme}`}
                  >
                    {collection.name}
                  </span>
                )}
                {product.tag && (
                  <span
                    className={`product-card__tag product-card__tag--${product.tag.toLowerCase()}`}
                  >
                    {product.tag}
                  </span>
                )}
                {product.stock !== null && product.stock <= 5 && (
                  <span className="product-card__stock">Only {product.stock} left</span>
                )}
                <button type="button" className="product-card__wishlist" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
              <div className="product-card__body">
                <div className="product-card__rating">
                  <span aria-hidden="true">★</span> {product.rating}{' '}
                  <span className="product-card__reviews">({product.reviews} reviews)</span>
                </div>
                <h3>{product.name}</h3>
                {collection && (
                  <p className="product-card__collection-name">
                    {collection.epithet} · {collection.jewelry.slice(0, 2).join(' & ')}
                  </p>
                )}
                <div className="product-card__pricing">
                  <span className="product-card__price">${product.price}</span>
                  {product.compareAt && (
                    <span className="product-card__compare">${product.compareAt}</span>
                  )}
                  {product.compareAt && (
                    <span className="product-card__save">
                      Save ${product.compareAt - product.price}
                    </span>
                  )}
                </div>
                <a
                  href={`#collection-${product.collectionId}`}
                  className="btn btn--primary btn--block"
                >
                  Shop {collection?.name} collection
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
