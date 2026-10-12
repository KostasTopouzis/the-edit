import { useState } from 'react'
import { productSeeds } from './Seed.js'
import ProductList from './components/ProductList.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const featuredProducts = [productSeeds[11], productSeeds[7]]

  return (
    <div className="storefront" id="top">
      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-search">
            <span className="language-switch">GR <span>EN</span></span>
            <label className="search-field">
              <span aria-hidden="true">⌕</span>
              <input
                aria-label="Search products"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search"
                type="search"
                value={searchTerm}
              />
            </label>
          </div>

          <a aria-label="The Edit Shop home" className="wordmark" href="#">
            <span>THE EDIT</span>
            <small>THE SHOPPING DESTINATION</small>
          </a>

          <div className="header-actions">
            <a aria-label="Account" className="icon-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="7.5" r="4" />
                <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" />
              </svg>
            </a>
            <a aria-label="Wishlist" className="icon-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
              </svg>
            </a>
            <a className="bag-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>
              <span>Bag</span>
              <strong>0</strong>
            </a>
          </div>
        </div>

        <nav aria-label="Main navigation" className="main-nav">
          <a href="#products">ΑΝΔΡΑΣ</a>
          <a href="#products">ΓΥΝΑΙΚΑ</a>
          <a href="#products">ΠΑΙΔΙ</a>
          <a href="#products">OUTLET</a>
          <a href="#products">BRANDS</a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">THE NEW EDIT · 2026</p>
            <h1 id="hero-title">Μικρές ανακαλύψεις.<br />Μεγάλη διάθεση.</h1>
            <p className="hero-description">
              Thoughtful finds for your everyday, all in one place.
            </p>
            <a className="hero-cta" href="#products">
              DISCOVER THE EDIT <span aria-hidden="true">→</span>
            </a>
          </div>

          <div aria-hidden="true" className="hero-visual">
            <div className="hero-image hero-image-main">
              <img alt="" src={featuredProducts[0].imgSrc} />
            </div>
            <div className="hero-image hero-image-small">
              <img alt="" src={featuredProducts[1].imgSrc} />
            </div>
            <div className="hero-sticker">GOOD<br />THINGS<br /><span>INSIDE</span></div>
          </div>

          <span className="hero-index">01 — 04</span>
        </section>

        <section aria-label="Shopping benefits" className="benefits">
          <div><span aria-hidden="true">↗</span> FREE SHIPPING OVER $75</div>
          <div><span aria-hidden="true">↺</span> EASY RETURNS</div>
          <div><span aria-hidden="true">▤</span> SECURE PAYMENT</div>
          <div><span aria-hidden="true">⌂</span> DELIVERED WITH CARE</div>
        </section>

        <ProductList searchTerm={searchTerm} />
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#">THE EDIT</a>
        <p>Good finds, made for everyday.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
