import type { StaticImageData } from 'next/image';
import type { Language } from './i18n';
import imgBeechwoodChoppingBoard from './assets/products/beechwood-chopping-board.webp';
import imgClearTumblerGlass from './assets/products/clear-tumbler-glass.webp';
import imgGlassSpiceCarousel from './assets/products/glass-spice-carousel.webp';
import imgWoodenServingTray from './assets/products/wooden-serving-tray.webp';
import imgRollingPinAndPastryBoard from './assets/products/rolling-pin-and-pastry-board.webp';
import imgStainlessTiffinLunchBox from './assets/products/stainless-tiffin-lunch-box.webp';
import imgBambooSpatula from './assets/products/bamboo-spatula.webp';
import imgCeramicPlantPot from './assets/products/ceramic-plant-pot.webp';
import imgSteelPotWithGlassLid from './assets/products/steel-pot-with-glass-lid.webp';
import imgWoodenHandleChefsKnife from './assets/products/wooden-handle-chefs-knife.webp';
import imgWoodenHandleSieve from './assets/products/wooden-handle-sieve.webp';
import imgCherryWoodBedsideTable from './assets/products/cherry-wood-bedside-table.webp';
import imgCarbonSteelWok from './assets/products/carbon-steel-wok.webp';
import imgFourSidedBoxGrater from './assets/products/four-sided-box-grater.webp';
import imgBalloonWhisk from './assets/products/balloon-whisk.webp';
import imgFineMeshStrainer from './assets/products/fine-mesh-strainer.webp';
import imgEverydayFryingPan from './assets/products/everyday-frying-pan.webp';
import imgMetalPlantStand from './assets/products/metal-plant-stand.webp';
import imgTableSpoonsSetOf4 from './assets/products/table-spoons-set-of-4.webp';
import imgDinnerForksSetOf4 from './assets/products/dinner-forks-set-of-4.webp';

export type ProductSeed = {
  productId: number;
  imgSrc: StaticImageData;
  productName: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  currency: string;
};

// Mock catalogue for the storefront: names, descriptions and prices are
// placeholders for layout and copy, not real inventory or pricing data.
// Images are DummyJSON (dummyjson.com) placeholder product renders.
export const productSeeds: ProductSeed[] = [
  {
    productId: 1,
    imgSrc: imgBeechwoodChoppingBoard,
    productName: {
      en: 'Beechwood Chopping Board',
      el: 'Επιφάνεια κοπής από οξιά',
    },
    description: {
      en: "A thick, round-edged board in solid beech that's kind to knives.",
      el: 'Χοντρή επιφάνεια κοπής από μασίφ οξιά με στρογγυλεμένες άκρες, φιλική στα μαχαίρια.',
    },
    price: 22.90,
    currency: '€',
  },
  {
    productId: 2,
    imgSrc: imgClearTumblerGlass,
    productName: {
      en: 'Clear Tumbler Glass',
      el: 'Διάφανο ποτήρι',
    },
    description: {
      en: 'A heavy-based glass tumbler for water, juice or wine, sturdy enough for every day.',
      el: 'Ποτήρι με βαρύ πάτο για νερό, χυμό ή κρασί, αρκετά ανθεκτικό για καθημερινή χρήση.',
    },
    price: 6.90,
    currency: '€',
  },
  {
    productId: 3,
    imgSrc: imgGlassSpiceCarousel,
    productName: {
      en: 'Glass Spice Carousel',
      el: 'Περιστρεφόμενη γυάλινη μπαχαροθήκη',
    },
    description: {
      en: 'Glass jars with steel shaker lids on a turning base, so every spice stays within reach.',
      el: 'Γυάλινα βάζα με μεταλλικά καπάκια σε περιστρεφόμενη βάση για τα μπαχαρικά σας.',
    },
    price: 26.90,
    currency: '€',
  },
  {
    productId: 4,
    imgSrc: imgWoodenServingTray,
    productName: {
      en: 'Wooden Serving Tray',
      el: 'Ξύλινος δίσκος σερβιρίσματος',
    },
    description: {
      en: 'A light, curved tray with cut-out handles for breakfast in bed.',
      el: 'Ελαφρύς, καμπυλωτός δίσκος με χειρολαβές κατάλληλος για πρωινό στο κρεβάτι.',
    },
    price: 29.90,
    currency: '€',
  },
  {
    productId: 5,
    imgSrc: imgRollingPinAndPastryBoard,
    productName: {
      en: 'Rolling Pin & Pastry Board',
      el: 'Πλάστης & επιφάνεια ζύμης',
    },
    description: {
      en: 'A smooth wooden rolling pin with a round board for dough, pastry and Sunday baking.',
      el: 'Λείος ξύλινος πλάστης με στρογγυλή επιφάνεια για ζύμες, πίτες και κυριακάτικο ψήσιμο.',
    },
    price: 19.90,
    currency: '€',
  },
  {
    productId: 6,
    imgSrc: imgStainlessTiffinLunchBox,
    productName: {
      en: 'Stainless Tiffin Lunch Box',
      el: 'Ανοξείδωτο φαγητοδοχείο τριών επιπέδων',
    },
    description: {
      en: 'Stacking steel tier with a locking handle, for warm lunches that travel well.',
      el: 'Ανοξείδωτο δοχείο που στοιβάζεται, με λαβή ασφάλισης, για ζεστό φαγητό που ταξιδεύει άνετα.',
    },
    price: 8.90,
    currency: '€',
  },
  {
    productId: 7,
    imgSrc: imgBambooSpatula,
    productName: {
      en: 'Bamboo Spatula',
      el: 'Σπάτουλα από μπαμπού',
    },
    description: {
      en: "A light, heat-safe bamboo spatula that won't scratch your pans.",
      el: 'Ελαφριά σπάτουλα από μπαμπού, ανθεκτική στη θερμότητα, που δεν χαράζει τα σκεύη σας.',
    },
    price: 5.90,
    currency: '€',
  },
  {
    productId: 8,
    imgSrc: imgCeramicPlantPot,
    productName: {
      en: 'Ceramic Plant Pot',
      el: 'Κεραμική γλάστρα',
    },
    description: {
      en: 'A matte black ceramic pot, suitable for a kitchen herb or houseplant.',
      el: 'Ματ μαύρη κεραμική γλάστρα, κατάλληλη για αρωματικά ή φυτά εσωτερικού χώρου.',
    },
    price: 16.90,
    currency: '€',
  },
  {
    productId: 9,
    imgSrc: imgSteelPotWithGlassLid,
    productName: {
      en: 'Steel Pot with Glass Lid',
      el: 'Ανοξείδωτη κατσαρόλα με γυάλινο καπάκι',
    },
    description: {
      en: 'A heavy-bottomed stainless steel pot with a glass lid, so you can check without lifting it.',
      el: 'Ανοξείδωτη κατσαρόλα με παχύ πάτο και γυάλινο καπάκι, για να βλέπετε το φαγητό με άνεση.',
    },
    price: 39.90,
    currency: '€',
  },
  {
    productId: 10,
    imgSrc: imgWoodenHandleChefsKnife,
    productName: {
      en: "Wooden-Handle Chef's Knife",
      el: 'Μαχαίρι σεφ με ξύλινη λαβή',
    },
    description: {
      en: 'A balanced stainless steel blade with a warm wooden handle, for everyday chopping.',
      el: 'Ισορροπημένη ανοξείδωτη λεπίδα με ζεστή ξύλινη λαβή, για το καθημερινό κόψιμο.',
    },
    price: 27.90,
    currency: '€',
  },
  {
    productId: 11,
    imgSrc: imgWoodenHandleSieve,
    productName: {
      en: 'Wooden-Handle Sieve',
      el: 'Κόσκινο με ξύλινη λαβή',
    },
    description: {
      en: 'A fine steel sieve with a wooden handle for flour, sauces and loose-leaf tea.',
      el: 'Ψιλό μεταλλικό κόσκινο με ξύλινη λαβή για αλεύρι, σάλτσες και χύμα τσάι.',
    },
    price: 9.90,
    currency: '€',
  },
  {
    productId: 12,
    imgSrc: imgCherryWoodBedsideTable,
    productName: {
      en: 'Cherry Wood Bedside Table',
      el: 'Κομοδίνο κερασιάς',
    },
    description: {
      en: 'A compact bedside table in a cherry finish, with a drawer and an open shelf for books.',
      el: 'Μικρό κομοδίνο σε απόχρωση κερασιάς, με συρτάρι και ανοιχτό ράφι για βιβλία.',
    },
    price: 149.00,
    currency: '€',
  },
  {
    productId: 13,
    imgSrc: imgCarbonSteelWok,
    productName: {
      en: 'Carbon Steel Wok',
      el: 'Wok από ανθρακοχάλυβα',
    },
    description: {
      en: 'A light carbon steel wok with wooden handles that heats fast.',
      el: 'Ελαφρύ wok από ανθρακοχάλυβα με ξύλινες λαβές. Ζεσταίνεται γρήγορα.',
    },
    price: 34.90,
    currency: '€',
  },
  {
    productId: 14,
    imgSrc: imgFourSidedBoxGrater,
    productName: {
      en: 'Four-Sided Box Grater',
      el: 'Τρίφτης τεσσάρων πλευρών',
    },
    description: {
      en: 'A sturdy stainless grater with four cutting faces and a comfortable grip.',
      el: 'Γερός ανοξείδωτος τρίφτης με τέσσερις πλευρές κοπής και άνετη λαβή.',
    },
    price: 12.90,
    currency: '€',
  },
  {
    productId: 15,
    imgSrc: imgBalloonWhisk,
    productName: {
      en: 'Balloon Whisk',
      el: 'Σύρμα χτυπήματος',
    },
    description: {
      en: 'A whisk with flexible steel wires for light batters and fluffy whipped cream.',
      el: 'Σύρμα χτυπήματος με εύκαμπτα μεταλλικά σύρματα για αφράτα μείγματα και σαντιγί.',
    },
    price: 8.90,
    currency: '€',
  },
  {
    productId: 16,
    imgSrc: imgFineMeshStrainer,
    productName: {
      en: 'Fine Mesh Strainer',
      el: 'Σουρωτήρι με ψιλό πλέγμα',
    },
    description: {
      en: 'A long-handled strainer with a resting hook.',
      el: 'Σουρωτήρι με μακριά λαβή και άγκιστρο στήριξης.',
    },
    price: 11.90,
    currency: '€',
  },
  {
    productId: 17,
    imgSrc: imgEverydayFryingPan,
    productName: {
      en: 'Everyday Frying Pan',
      el: 'Τηγάνι καθημερινής χρήσης',
    },
    description: {
      en: 'A non-stick frying pan with a riveted steel handle, for eggs, vegetables and more.',
      el: 'Αντικολλητικό τηγάνι με σταθερή μεταλλική λαβή, για αυγά, λαχανικά και πολλά ακόμα.',
    },
    price: 29.90,
    currency: '€',
  },
  {
    productId: 18,
    imgSrc: imgMetalPlantStand,
    productName: {
      en: 'Metal Plant Stand',
      el: 'Μεταλλική βάση φυτών',
    },
    description: {
      en: 'A slim metal stand that lifts a potted plant to eye level, in a corner or by a window.',
      el: 'Λεπτή μεταλλική βάση που ανεβάζει ένα φυτό σε ύψος ματιού, σε μια γωνία ή δίπλα στο παράθυρο.',
    },
    price: 34.90,
    currency: '€',
  },
  {
    productId: 19,
    imgSrc: imgTableSpoonsSetOf4,
    productName: {
      en: 'Table Spoons, Set of 4',
      el: 'Κουτάλια φαγητού, σετ των 4',
    },
    description: {
      en: 'Polished stainless steel spoons with a pleasant weight in the hand. Dishwasher safe.',
      el: 'Γυαλισμένα ανοξείδωτα κουτάλια με ευχάριστο βάρος στο χέρι. Κατάλληλα για πλυντήριο πιάτων.',
    },
    price: 12.90,
    currency: '€',
  },
  {
    productId: 20,
    imgSrc: imgDinnerForksSetOf4,
    productName: {
      en: 'Dinner Forks, Set of 4',
      el: 'Πιρούνια φαγητού, σετ των 4',
    },
    description: {
      en: 'Polished stainless steel forks to match our table spoons. Dishwasher safe.',
      el: 'Γυαλισμένα ανοξείδωτα πιρούνια ταιριαστά με τα κουτάλια μας. Κατάλληλα για πλυντήριο πιάτων.',
    },
    price: 12.90,
    currency: '€',
  },
];
