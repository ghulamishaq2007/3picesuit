========================================================================
   AURELIA COLLECTION — PREMIUM LADIES FASHION WEBSITE
   EASY MANAGEMENT & EDITING GUIDE (VANILLA HTML / CSS / JS)
========================================================================

Welcome to Aurelia Collection's official website codebase!
This website is built with clean, standard HTML5, CSS3, and Vanilla JavaScript.
No complex frameworks, npm builds, or server setups are required.
You can directly upload this entire folder to Netlify, GitHub Pages, or any web host.

------------------------------------------------------------------------
TABLE OF CONTENTS
------------------------------------------------------------------------
1. How to Change Website Name & Logo
2. How to Edit the WhatsApp Number
3. How to Add a New Product
4. How to Edit or Remove an Existing Product
5. How to Change Prices and Discounts
6. How to Change Product Images
7. How to Change or Add New Collections (e.g. Eid Collection, Festive)
8. How Clean Product URLs Work (e.g. /lili, /mahnoor)
9. How to Upload Directly to Netlify
10. File Structure Overview

------------------------------------------------------------------------
1. HOW TO CHANGE WEBSITE NAME & LOGO
------------------------------------------------------------------------
• Open "index.html".
• Search for the logo section (around line 40). Look for:
    <span class="logo-title">AURELIA</span>
    <span class="logo-sub">COLLECTION</span>
• Change the text inside to your desired brand name.
• You can also update the <title> and meta tags at the top of "index.html".

------------------------------------------------------------------------
2. HOW TO EDIT THE WHATSAPP NUMBER
------------------------------------------------------------------------
• Open "script.js".
• Look at the very top under "CONFIG / STORE SETTINGS":
    whatsappNumber: "03232974451",
    whatsappIntl: "923232974451",
• Simply replace this number with your business WhatsApp number.
• All order submissions and floating WhatsApp chat buttons will automatically
  use your new number!

------------------------------------------------------------------------
3. HOW TO ADD A NEW PRODUCT
------------------------------------------------------------------------
• Open "script.js".
• Look for the section clearly marked:
  "/* ===================================================================
     PRODUCT DATA — EDIT PRODUCTS HERE
     =================================================================== */"

• Copy any existing product block and paste it into the "products" array.
  Example:

  {
    id: 9,
    name: "Zunaira Embroidered Chiffon",
    slug: "zunaira",
    collection: "Festive Collection",
    price: 6800,
    oldPrice: 8500,
    discount: 20,
    isNew: true,
    isSale: true,
    images: [
      "images/zunaira-1.jpg",
      "images/zunaira-2.jpg",
      "images/zunaira-3.jpg",
      "images/zunaira-4.jpg"
    ],
    fabric: "Pure Chiffon with Zari Embroidery",
    color: "Emerald Green & Gold",
    pieces: "3 Piece (Shirt + Dupatta + Trouser)",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large"],
    description: "An opulent Pakistani chiffon ensemble adorned with delicate zari needlework and matching embroidered chiffon dupatta.",
    details: [
      "Embroidered Chiffon Front (0.85m)",
      "Plain Dyed Chiffon Back (0.85m)",
      "Embroidered Chiffon Sleeves (0.65m)",
      "Embroidered Net Dupatta with Scalloped Borders (2.5m)",
      "Dyed Raw Silk Trouser (2.5m)",
      "Embroidered Neckline & Daman Patch"
    ],
    care: [
      "Dry clean recommended",
      "Iron at low temperature inside out",
      "Do not use bleach or stain removing chemicals",
      "Avoid direct sunlight when drying"
    ]
  },

• Save the file. That's it!
• The website will automatically generate the product card on the Home and
  Shop pages, and create the clean product link at:
  https://yourwebsite.com/zunaira

------------------------------------------------------------------------
4. HOW TO EDIT OR REMOVE AN EXISTING PRODUCT
------------------------------------------------------------------------
• In "script.js", locate the product in the "products" array by name or slug.
• To edit: Change any field (name, price, fabric, description, etc.).
• To delete: Remove the whole { ... } block of that product. Make sure the
  commas between items in the list remain valid JavaScript.

------------------------------------------------------------------------
5. HOW TO CHANGE PRICES & DISCOUNTS
------------------------------------------------------------------------
• In "script.js", each product has:
    price: 4500,          // Current selling price in PKR
    oldPrice: 5500,       // Optional original price before discount
    discount: 18,         // Discount percentage badge (e.g. 18% OFF)

• If the product is NOT on sale, simply set:
    price: 4500,
    oldPrice: null,
    discount: null,
    isSale: false,

• The website will automatically hide the old crossed-out price and discount badge!

------------------------------------------------------------------------
6. HOW TO CHANGE PRODUCT IMAGES
------------------------------------------------------------------------
• Place your image files into the "images/" folder.
• In "script.js", update the "images" array for that product:
    images: [
      "images/lili-front.jpg",
      "images/lili-2.jpg",
      "images/lili-3.jpg",
      "images/lili-4.jpg"
    ]
• Image 1 (index 0) will be used as the primary card image and main gallery image.
• Images 2, 3, and 4 will be shown in the clickable interactive gallery.
• You can also use external image URLs (e.g. https://images.unsplash.com/...)
  directly if you prefer hosting images on a cloud storage provider.

------------------------------------------------------------------------
7. HOW TO CHANGE OR ADD NEW COLLECTIONS
------------------------------------------------------------------------
• You can change "Summer Collection" to "Festive Collection" or "Eid Collection"
  simply by changing the "collection" property of products in "script.js":
    collection: "Eid Collection"

• The filters, badges, and category tabs will automatically adapt!

------------------------------------------------------------------------
8. HOW CLEAN PRODUCT URLS WORK (e.g. /lili, /mahnoor)
------------------------------------------------------------------------
• Each product has a unique "slug":
    slug: "lili"
• When someone clicks the product, the URL becomes:
    https://yourdomain.com/lili
• The built-in lightweight JavaScript router intercepts the path and renders
  the full 2-column product page instantly with 4-image zoom gallery, size
  selector, WhatsApp order modal, and full specifications.
• Netlify is configured via "_redirects" (included in this folder) to serve
  "index.html" on every path, ensuring that if a customer refreshes or directly
  opens https://yourdomain.com/lili, it will never show a 404 error!

------------------------------------------------------------------------
9. HOW TO UPLOAD DIRECTLY TO NETLIFY
------------------------------------------------------------------------
Method A (Drag & Drop — Fastest!):
1. Go to https://app.netlify.com/drop
2. Drag and drop this whole folder (containing index.html, style.css, script.js,
   _redirects, and images/).
3. Netlify will deploy your website in less than 30 seconds with a free HTTPS URL!

Method B (GitHub Integration):
1. Push this folder to a GitHub repository.
2. Link the repository to Netlify (Build command: leave empty or vite build,
   Publish directory: root "." or "dist").

------------------------------------------------------------------------
10. FILE STRUCTURE OVERVIEW
------------------------------------------------------------------------
/
├── index.html        (Main semantic markup, navigation, views & modals)
├── style.css         (Custom luxury styling, typography, animations & responsive layout)
├── script.js         (Centralized Product Data, Router, WhatsApp ordering & UI logic)
├── _redirects        (Netlify SPA routing rules for clean URLs)
├── images/           (Folder for product and banner images)
└── README.txt        (This guide)

Enjoy your luxury Aurelia Collection store!
========================================================================
