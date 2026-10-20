// Interface copy per language. The shop name, subtitle and product names are
// intentionally not translated; established commerce terms (OUTLET, BRANDS)
// stay in English in the Greek version too.
export const translations = {
  el: {
    locale: 'el-GR',
    documentTitle: 'The Edit Shop | Επιλογές για κάθε μέρα',
    documentDescription: 'Ανακαλύψτε προσεγμένες επιλογές για κάθε μέρα στο The Edit Shop.',
    languageLabel: 'Γλώσσα',
    homeLabel: 'Αρχική σελίδα The Edit Shop',
    searchLabel: 'Αναζήτηση προϊόντων',
    searchPlaceholder: 'Αναζήτηση',
    accountLabel: 'Λογαριασμός',
    wishlistLabel: 'Αγαπημένα',
    bag: 'Καλάθι',
    mainNavLabel: 'Κύρια πλοήγηση',
    nav: ['ΑΝΔΡΑΣ', 'ΓΥΝΑΙΚΑ', 'ΠΑΙΔΙ', 'OUTLET', 'BRANDS'],
    heroEyebrow: 'ΝΕΕΣ ΑΦΙΞΕΙΣ · 2026',
    heroTitle: ['Μικρές λύσεις.', 'Μεγάλη διάθεση.'],
    heroDescription: 'Προσεγμένες επιλογές για την καθημερινότητά σας, όλες σε ένα μέρος.',
    heroCta: 'ΑΝΑΚΑΛΥΨΤΕ ΤΗ ΣΥΛΛΟΓΗ',
    heroSticker: ['GOOD', 'THINGS', 'INSIDE'],
    benefitsLabel: 'Πλεονεκτήματα αγορών',
    benefits: [
      'ΔΩΡΕΑΝ ΑΠΟΣΤΟΛΗ ΑΝΩ ΤΩΝ 75 $',
      'ΕΥΚΟΛΕΣ ΕΠΙΣΤΡΟΦΕΣ',
      'ΑΣΦΑΛΕΙΣ ΠΛΗΡΩΜΕΣ',
      'ΠΑΡΑΔΟΣΗ ΜΕ ΦΡΟΝΤΙΔΑ',
    ],
    productsEyebrow: 'ΕΠΙΛΕΓΜΕΝΑ ΓΙΑ ΕΣΑΣ',
    productsTitle: 'Νέες ανακαλύψεις',
    productCount: (count) => `${count} ${count === 1 ? 'ΠΡΟΪΟΝ' : 'ΠΡΟΪΟΝΤΑ'}`,
    emptyState: (term) => `Δεν βρέθηκαν προϊόντα για «${term}». Δοκιμάστε άλλη αναζήτηση.`,
    viewProduct: (name) => `Προβολή: ${name}`,
    productAction: 'ΑΝΑΚΑΛΥΨΤΕ',
    footerTagline: 'Όμορφες ανακαλύψεις κάθε μέρα.',
    backToTop: 'ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΚΟΡΥΦΗ ↑',
  },
  en: {
    locale: 'en-US',
    documentTitle: 'The Edit Shop | Everyday Finds',
    documentDescription: 'Discover considered everyday finds in The Edit Shop.',
    languageLabel: 'Language',
    homeLabel: 'The Edit Shop home',
    searchLabel: 'Search products',
    searchPlaceholder: 'Search',
    accountLabel: 'Account',
    wishlistLabel: 'Wishlist',
    bag: 'Bag',
    mainNavLabel: 'Main navigation',
    nav: ['MEN', 'WOMEN', 'KIDS', 'OUTLET', 'BRANDS'],
    heroEyebrow: 'NEW ARRIVALS · 2026',
    heroTitle: ['Small discoveries.', 'Big mood.'],
    heroDescription: 'Everyday solutions to big problems, all in one place.',
    heroCta: 'DISCOVER THE COLLECTION',
    heroSticker: ['GOOD', 'THINGS', 'INSIDE'],
    benefitsLabel: 'Shopping benefits',
    benefits: [
      'FREE SHIPPING OVER $75',
      'EASY RETURNS',
      'SECURE PAYMENT',
      'DELIVERED WITH CARE',
    ],
    productsEyebrow: 'CURATED FOR YOU',
    productsTitle: 'The latest finds',
    productCount: (count) => `${count} ${count === 1 ? 'FIND' : 'FINDS'}`,
    emptyState: (term) => `No products match “${term}”. Try another search.`,
    viewProduct: (name) => `View ${name}`,
    productAction: 'DISCOVER',
    footerTagline: 'Good finds, made for everyday.',
    backToTop: 'BACK TO TOP ↑',
  },
}

export const defaultLanguage = 'el'

export function getLanguageFromUrl() {
  const language = new URLSearchParams(window.location.search).get('lang')
  return Object.hasOwn(translations, language) ? language : defaultLanguage
}

export function languageHref(language) {
  return language === defaultLanguage ? './' : `?lang=${language}`
}
