import { useEffect, useState } from 'react'
import { productSeeds } from './Seed.js'
import ProductList from './components/ProductList.jsx'
import { getLanguageFromUrl, languageHref, translations } from './i18n.js'

const benefitIcons = ['↗', '↺', '▤', '⌂']

// Font faces in use. Google Fonts splits them per script, so the Greek or Latin
// files would otherwise only download on the first switch and swap in visibly.
const fontFaces = [
  '300 1em "Noto Serif Display"',
  'italic 300 1em "Noto Serif Display"',
  '400 1em "Commissioner"',
  '500 1em "Commissioner"',
  '600 1em "Commissioner"',
  '700 1em "Commissioner"',
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [language, setLanguage] = useState(getLanguageFromUrl)
  const t = translations[language]
  const featuredProducts = [productSeeds[11], productSeeds[7]]

  useEffect(() => {
    for (const face of fontFaces) {
      document.fonts?.load(face, 'Αα Aa').catch(() => {})
    }

    const handlePopState = () => setLanguage(getLanguageFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Swap the copy in place instead of reloading, so the page keeps its scroll
  // position. Modified clicks still open the other version in a new tab.
  function switchLanguage(event, nextLanguage) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (nextLanguage === language) return
    window.history.pushState(null, '', languageHref(nextLanguage))
    setLanguage(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.documentTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.documentDescription)
  }, [language, t])

  return (
    <div className="storefront" id="top">
      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-search">
            <nav aria-label={t.languageLabel} className="language-switch">
              <a
                aria-current={language === 'el' ? 'page' : undefined}
                href={languageHref('el')}
                hrefLang="el"
                onClick={(event) => switchLanguage(event, 'el')}
                lang="el"
              >
                GR
              </a>
              <a
                aria-current={language === 'en' ? 'page' : undefined}
                href={languageHref('en')}
                hrefLang="en"
                onClick={(event) => switchLanguage(event, 'en')}
                lang="en"
              >
                EN
              </a>
            </nav>
            <label className="search-field">
              <span aria-hidden="true">⌕</span>
              <input
                aria-label={t.searchLabel}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t.searchPlaceholder}
                type="search"
                value={searchTerm}
              />
            </label>
          </div>

          <a aria-label={t.homeLabel} className="wordmark" href="#">
            <span>THE EDIT</span>
            <small>A HOUSE OF CONSIDERED GOODS</small>
          </a>

          <div className="header-actions">
            <a aria-label={t.accountLabel} className="icon-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="7.5" r="4" />
                <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" />
              </svg>
            </a>
            <a aria-label={t.wishlistLabel} className="icon-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
              </svg>
            </a>
            <a className="bag-link" href="#products">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>
              <span>{t.bag}</span>
              <strong>0</strong>
            </a>
          </div>
        </div>

        <nav aria-label={t.mainNavLabel} className="main-nav">
          {t.nav.map((item) => (
            <a href="#products" key={item}>{item}</a>
          ))}
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1 id="hero-title">{t.heroTitle[0]}<br />{t.heroTitle[1]}</h1>
            <p className="hero-description">{t.heroDescription}</p>
            <a className="hero-cta" href="#products">
              {t.heroCta} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div aria-hidden="true" className="hero-visual">
            <div className="hero-image hero-image-main">
              <img alt="" src={featuredProducts[0].imgSrc} />
            </div>
            <div className="hero-image hero-image-small">
              <img alt="" src={featuredProducts[1].imgSrc} />
            </div>
            <div className="hero-sticker">
              {t.heroSticker[0]}<br />{t.heroSticker[1]}<br /><span>{t.heroSticker[2]}</span>
            </div>
          </div>

          <span className="hero-index">01 — 04</span>
        </section>

        <section aria-label={t.benefitsLabel} className="benefits">
          {t.benefits.map((benefit, index) => (
            <div key={benefit}><span aria-hidden="true">{benefitIcons[index]}</span> {benefit}</div>
          ))}
        </section>

        <ProductList language={language} searchTerm={searchTerm} />
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#">THE EDIT</a>
        <p>{t.footerTagline}</p>
        <a href="#top">{t.backToTop}</a>
      </footer>
    </div>
  )
}

export default App
