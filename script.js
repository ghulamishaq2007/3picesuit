/**
 * ===================================================================
 * AURELIA COLLECTION — VANILLA JAVASCRIPT CORE ENGINE
 * ===================================================================
 * 
 * Clean, lightweight, modular vanilla JavaScript.
 * Contains:
 *  1. Store Configuration (WhatsApp, Brand settings)
 *  2. Centralized Product Data (EASY EDITING SECTION)
 *  3. Client-Side Clean Slug Router (/lili, /shop, /about, etc.)
 *  4. Product Gallery & Zoom Interactivity
 *  5. Order Now System & WhatsApp Auto-Builder
 *  6. Catalog Search, Filter & Sort
 *  7. Dynamic SEO & Product JSON-LD Schema
 *  8. Toast & UI Utilities
 */

"use strict";

/* ===================================================================
   1. STORE CONFIGURATION
   =================================================================== */
const STORE_CONFIG = {
  brandName: "Aurelia Collection",
  tagline: "Premium Pakistani Ladies Fashion & Couture",
  currency: "PKR",
  whatsappNumber: "03232974451", // Domestic format
  whatsappIntl: "923232974451",  // International format for wa.me URL
  supportEmail: "concierge@aureliacollection.com",
  freeShippingThreshold: 5000,
  defaultDeliveryFee: 250,
};

/* ===================================================================
   2. PRODUCT DATA — EDIT PRODUCTS HERE
   ===================================================================
   HOW TO MANAGE PRODUCTS:
   • To add a new product: Copy any object below, paste it into the array, 
     and give it a unique "id" and "slug" (e.g. slug: "lili" creates /lili).
   • To change prices/discounts: Update "price", "oldPrice", and "discount".
   • If no discount: set oldPrice: null and discount: null.
   • To change collection name: set collection: "Summer Collection", "Winter Collection", "Eid Collection", etc.
   • To change images: update the "images" array with your file paths or image URLs.
   =================================================================== */

const products = [
  {
    id: 1,
    name: "Lili Embroidered Lawn Suit",
    slug: "lili",
    collection: "Summer Collection",
    price: 4500,
    oldPrice: 5500,
    discount: 18,
    isNew: true,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Premium Swiss Lawn with Organza Cutwork",
    color: "Soft Lilac & Antique Ivory",
    pieces: "3 Piece Suit (Shirt + Dupatta + Trouser)",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large", "XL"],
    shortDesc: "A beautifully crafted Pakistani lawn suit designed for elegant everyday and festive summer wear.",
    description: "The Lili Embroidered Lawn Suit exudes quiet luxury. Crafted from breathable, ultra-soft Swiss voile lawn, it features delicate floral resham embroidery across the front panel, scalloped organza daman borders, and a printed digital silk dupatta with matching dyed cambric trousers.",
    details: [
      "Embroidered Swiss Lawn Front Panel (1.15m)",
      "Digital Printed Lawn Back & Sleeves (1.85m)",
      "Embroidered Organza Neckline & Daman Border (1m)",
      "Digital Printed Pure Chiffon / Silk Dupatta (2.5m)",
      "Dyed Premium Cambric Cotton Trouser (2.5m)",
      "Handcrafted Tassel Accents included"
    ],
    care: [
      "Dry clean recommended for first wash",
      "Gentle hand wash in cold water with mild detergent",
      "Do not bleach or use stain removers",
      "Iron on medium heat inside out",
      "Dry in shade away from direct sunlight"
    ]
  },
  {
    id: 2,
    name: "Mahnoor Chiffon Festive Edition",
    slug: "mahnoor",
    collection: "Summer Collection",
    price: 7200,
    oldPrice: 8500,
    discount: 15,
    isNew: true,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Pure Bamber Chiffon with Zari & Panni Work",
    color: "Dusty Rose & Champagne Gold",
    pieces: "3 Piece Festive Ensemble",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large"],
    shortDesc: "An opulent Pakistani chiffon ensemble adorned with delicate zari needlework and matching embroidered dupatta.",
    description: "Designed for wedding celebrations and Eid festivities, the Mahnoor ensemble pairs lightweight, flowing chiffon with intricate panni tilla embellishments. The heavy embroidered borders on the dupatta add royal grandeur.",
    details: [
      "Heavy Embroidered Chiffon Front (0.85m)",
      "Embroidered Chiffon Back (0.85m)",
      "Embroidered Chiffon Sleeves with Border (0.65m)",
      "Embroidered Net Dupatta with 4-Side Cutwork Borders (2.5m)",
      "Dyed Raw Silk Trouser with Embroidered Bunches (2.5m)",
      "Inner Silk Slip Fabric included (2m)"
    ],
    care: [
      "Strictly Dry Clean Only",
      "Iron with steam at low temperature",
      "Store in a cotton garment bag"
    ]
  },
  {
    id: 3,
    name: "Noor Luxury Velvet 3-Piece",
    slug: "noor",
    collection: "Winter Collection",
    price: 8900,
    oldPrice: 11000,
    discount: 19,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Micro 9000 Velvet with Banarasi Brocade Shawl",
    color: "Midnight Emerald & Antique Gold",
    pieces: "3 Piece Winter Couture",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large", "XL"],
    shortDesc: "Royal winter velvet suit with golden tilla embroidery and a sumptuous woven jacquard shawl.",
    description: "The Noor Velvet suit represents quintessential Pakistani winter glamour. Made with premium grade Micro 9000 plush velvet that drapes effortlessly, accented with intricate gold metallic embroidery on the gala and sleeves.",
    details: [
      "Embroidered Micro Velvet Shirt Front (1m)",
      "Plain Dyed Micro Velvet Back & Sleeves (1.5m)",
      "Heavy Embroidered Daman & Sleeve Velvet Patches",
      "Woven Banarasi Jacquard Shawl with Tassel Corners (2.5m)",
      "Dyed Raw Silk Trouser (2.5m)"
    ],
    care: [
      "Professional Dry Clean Only",
      "Do not iron directly on velvet pile (steam only from reverse)",
      "Keep away from direct moisture"
    ]
  },
  {
    id: 4,
    name: "Ayesha Printed Silk Ensemble",
    slug: "ayesha",
    collection: "Summer Collection",
    price: 5400,
    oldPrice: 6000,
    discount: 10,
    isNew: true,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Pure Medium Silk with Embroidered Neckline",
    color: "Cobalt Blue & Floral Pastels",
    pieces: "3 Piece Silk Suit",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large"],
    shortDesc: "Vibrant digital printed silk suit featuring signature botanical motifs and resham embroidery.",
    description: "Lightweight and silky smooth, the Ayesha ensemble brings radiant colors and effortless elegance. Features a high-definition digital printed silk shirt with an intricate embroidered organza neckline.",
    details: [
      "Digital Printed Pure Medium Silk Shirt (3m)",
      "Embroidered Neckline Patch on Organza",
      "Digital Printed Medium Silk Dupatta (2.5m)",
      "Dyed Raw Silk Trouser (2.5m)"
    ],
    care: [
      "Dry clean or delicate cold hand wash",
      "Iron at low silk setting with protective cloth"
    ]
  },
  {
    id: 5,
    name: "Zara Organza Embroidered Festive",
    slug: "zara",
    collection: "Sale",
    price: 4800,
    oldPrice: 6800,
    discount: 29,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Fine Sheer Organza with Resham Threadwork",
    color: "Pearl White & Blush Peach",
    pieces: "3 Piece Luxury Festive",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large"],
    shortDesc: "Subtle and sophisticated organza dress with delicate sequin spray and scalloped borders.",
    description: "An ethereal festive design with meticulous threadwork. The Zara suit in pearl white and blush peach delivers unmatched grace for daytime celebrations and summer soirees.",
    details: [
      "Embroidered Organza Shirt Front & Sleeves (1.8m)",
      "Dyed Organza Back (1.2m)",
      "Embroidered Organza Dupatta with Cutwork (2.5m)",
      "Dyed Cotton Silk Inner Slip (2m)",
      "Dyed Raw Silk Trouser (2.5m)"
    ],
    care: [
      "Dry clean only",
      "Store flat in protective muslin cloth"
    ]
  },
  {
    id: 6,
    name: "Dua Pastel Jacquard Collection",
    slug: "dua",
    collection: "New Arrivals",
    price: 6200,
    oldPrice: null,
    discount: null,
    isNew: true,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Self-Weave Cotton Jacquard with Zari Border",
    color: "Mint Sage & Gilded Ivory",
    pieces: "3 Piece Jacquard Suit",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large", "XL"],
    shortDesc: "Sophisticated self-jacquard weave with subtle metallic accents and a luxury organza dupatta.",
    description: "Crafted with intricate yarn-dyed jacquard weave that glistens gently in the light. The Dua ensemble is paired with a matching embroidered organza dupatta and tailored cambric pants.",
    details: [
      "Yarn-Dyed Jacquard Shirt Fabric (3m)",
      "Embroidered Organza Neckline & Border Set",
      "Embroidered Jacquard Dupatta (2.5m)",
      "Dyed Cambric Cotton Trouser (2.5m)"
    ],
    care: [
      "Hand wash cold with like colors",
      "Do not wring or twist"
    ]
  },
  {
    id: 7,
    name: "Hania Schiffli Lawn 3-Piece",
    slug: "hania",
    collection: "New Arrivals",
    price: 5900,
    oldPrice: 6900,
    discount: 14,
    isNew: true,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Laser Cut Schiffli Embroidered Lawn",
    color: "Coral Sunset & Cream",
    pieces: "3 Piece Embroidered Lawn",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large"],
    shortDesc: "Intricate cutwork Schiffli embroidered front with a soft printed chiffon dupatta.",
    description: "The Hania Schiffli 3-piece suit features delicate eyelet cutwork embroidery on the front panel and breathable Swiss lawn sleeves. Finished with a dreamy chiffon dupatta.",
    details: [
      "Schiffli Laser-Cut Embroidered Lawn Front (1m)",
      "Dyed Plain Lawn Back (1.25m)",
      "Embroidered Lawn Sleeves (0.65m)",
      "Digital Printed Pure Chiffon Dupatta (2.5m)",
      "Dyed Cambric Trouser with Embroidered Patch (2.5m)"
    ],
    care: [
      "Gentle machine wash or hand wash in cold water",
      "Iron with low steam"
    ]
  },
  {
    id: 8,
    name: "Anum Royal Banarasi Brocade",
    slug: "anum",
    collection: "Winter Collection",
    price: 9500,
    oldPrice: 12000,
    discount: 21,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1596783049557-0a418e2a149c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
    ],
    fabric: "Pure Banarasi Brocade with Zari Weave",
    color: "Deep Ruby & Antique Zari",
    pieces: "3 Piece Festive Winter Suit",
    availability: "In Stock - Ready to Dispatch",
    sizes: ["Unstitched", "Small", "Medium", "Large", "XL"],
    shortDesc: "Traditional Pakistani heirloom banarasi brocade crafted for formal evening wear.",
    description: "An authentic tribute to traditional heritage. Rich ruby banarasi brocade interwoven with real gold tilla yarns, accompanied by an embroidered velvet border and matching silk pants.",
    details: [
      "Woven Banarasi Brocade Shirt (3m)",
      "Heavy Embroidered Velvet Border for Daman (1m)",
      "Woven Pure Zari Dupatta with Pallu Finishes (2.5m)",
      "Dyed Raw Silk Trouser (2.5m)"
    ],
    care: [
      "Dry Clean Only",
      "Store in breathable cotton cloth"
    ]
  }
];

/* ===================================================================
   3. APP STATE MANAGEMENT
   =================================================================== */
const AppState = {
  currentRoute: "/",
  currentProduct: null,
  selectedQuantity: 1,
  selectedImageIndex: 0,
  shopFilter: "all",
  shopSearch: "",
  shopSort: "newest",
};

/* ===================================================================
   4. DOM HELPERS & FORMATTING
   =================================================================== */
function formatPKR(num) {
  if (num === null || num === undefined || isNaN(num)) return "";
  return `PKR ${Number(num).toLocaleString("en-PK")}`;
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ===================================================================
   5. PRODUCT CARD HTML GENERATOR
   =================================================================== */
function createProductCardHTML(product) {
  const isDiscounted = product.oldPrice && product.oldPrice > product.price;
  const discountVal = product.discount || (isDiscounted ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0);
  const primaryImg = product.images && product.images[0] ? product.images[0] : "";
  const secondaryImg = product.images && product.images[1] ? product.images[1] : primaryImg;

  return `
    <article class="product-card ${!product.images[1] ? 'no-secondary' : ''}" data-product-id="${product.id}" data-slug="${product.slug}">
      <div class="product-card-media">
        <a href="/${product.slug}" data-route="/${product.slug}" title="View ${product.name}">
          <img src="${primaryImg}" alt="${product.name} - Front View" class="product-card-img" loading="lazy" />
          <img src="${secondaryImg}" alt="${product.name} - Detail View" class="product-card-img-secondary" loading="lazy" />
        </a>
        <div class="product-card-badges">
          ${isDiscounted ? `<span class="badge badge-sale">${discountVal}% OFF</span>` : ''}
          ${product.isNew ? `<span class="badge badge-new">New</span>` : ''}
        </div>
      </div>
      <div class="product-card-content">
        <span class="card-collection-name">${product.collection}</span>
        <h3 class="card-product-title">
          <a href="/${product.slug}" data-route="/${product.slug}">${product.name}</a>
        </h3>
        <p class="card-product-desc">${product.shortDesc || product.description}</p>
        <div class="card-price-row">
          <span class="card-price-current">${formatPKR(product.price)}</span>
          ${isDiscounted ? `<span class="card-price-old">${formatPKR(product.oldPrice)}</span>` : ''}
          ${isDiscounted ? `<span class="card-discount-tag">(${discountVal}% OFF)</span>` : ''}
        </div>
        <a href="/${product.slug}" class="card-action-btn" data-route="/${product.slug}">
          <i class="fa-solid fa-eye"></i> View Product
        </a>
      </div>
    </article>
  `;
}

/* ===================================================================
   6. RENDER HOMEPAGE COLLECTIONS
   =================================================================== */
function renderHomePageSections() {
  // 1. New Arrivals
  const newArrivalsGrid = document.getElementById("grid-home-new-arrivals");
  if (newArrivalsGrid) {
    const newItems = products.filter(p => p.isNew || p.collection === "New Arrivals");
    const displayItems = newItems.length ? newItems.slice(0, 4) : products.slice(0, 4);
    newArrivalsGrid.innerHTML = displayItems.map(createProductCardHTML).join("");
  }

  // 2. Summer Collection
  const summerGrid = document.getElementById("grid-home-summer");
  if (summerGrid) {
    const summerItems = products.filter(p => p.collection.toLowerCase().includes("summer"));
    const displayItems = summerItems.length ? summerItems.slice(0, 4) : products.slice(0, 4);
    summerGrid.innerHTML = displayItems.map(createProductCardHTML).join("");
  }

  // 3. Winter Collection
  const winterGrid = document.getElementById("grid-home-winter");
  if (winterGrid) {
    const winterItems = products.filter(p => p.collection.toLowerCase().includes("winter"));
    const displayItems = winterItems.length ? winterItems.slice(0, 4) : products.slice(0, 4);
    winterGrid.innerHTML = displayItems.map(createProductCardHTML).join("");
  }

  // 4. Sale Collection
  const saleGrid = document.getElementById("grid-home-sale");
  if (saleGrid) {
    const saleItems = products.filter(p => p.isSale || (p.oldPrice && p.oldPrice > p.price));
    const displayItems = saleItems.length ? saleItems.slice(0, 4) : products.slice(0, 4);
    saleGrid.innerHTML = displayItems.map(createProductCardHTML).join("");
  }
}

/* ===================================================================
   7. SHOP VIEW: FILTERING, SEARCH & SORTING
   =================================================================== */
function applyShopFilters() {
  const catalogGrid = document.getElementById("grid-shop-catalog");
  const countText = document.getElementById("catalog-count-text");
  const noResultsBox = document.getElementById("shop-no-results");
  const resetBtn = document.getElementById("reset-filters-btn");
  if (!catalogGrid) return;

  let filtered = [...products];

  // 1. Filter by category
  if (AppState.shopFilter === "Summer Collection") {
    filtered = filtered.filter(p => p.collection.toLowerCase().includes("summer"));
  } else if (AppState.shopFilter === "Winter Collection") {
    filtered = filtered.filter(p => p.collection.toLowerCase().includes("winter"));
  } else if (AppState.shopFilter === "new-arrivals") {
    filtered = filtered.filter(p => p.isNew || p.collection.toLowerCase().includes("new"));
  } else if (AppState.shopFilter === "sale") {
    filtered = filtered.filter(p => p.isSale || (p.oldPrice && p.oldPrice > p.price));
  } else if (AppState.shopFilter !== "all") {
    filtered = filtered.filter(p => p.collection.toLowerCase() === AppState.shopFilter.toLowerCase());
  }

  // 2. Search keyword
  if (AppState.shopSearch.trim()) {
    const q = AppState.shopSearch.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      (p.fabric && p.fabric.toLowerCase().includes(q)) ||
      (p.color && p.color.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // 3. Sorting
  if (AppState.shopSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.shopSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.shopSort === "discount") {
    filtered.sort((a, b) => {
      const discA = a.discount || 0;
      const discB = b.discount || 0;
      return discB - discA;
    });
  } else {
    // Newest first by ID descending
    filtered.sort((a, b) => b.id - a.id);
  }

  // Render items
  if (filtered.length > 0) {
    catalogGrid.innerHTML = filtered.map(createProductCardHTML).join("");
    catalogGrid.style.display = "grid";
    if (noResultsBox) noResultsBox.style.display = "none";
    if (countText) countText.textContent = `Showing ${filtered.length} elegant design${filtered.length === 1 ? '' : 's'}`;
  } else {
    catalogGrid.innerHTML = "";
    catalogGrid.style.display = "none";
    if (noResultsBox) noResultsBox.style.display = "block";
    if (countText) countText.textContent = `0 designs found`;
  }

  // Show / Hide reset button
  const isFiltered = AppState.shopFilter !== "all" || AppState.shopSearch !== "" || AppState.shopSort !== "newest";
  if (resetBtn) resetBtn.style.display = isFiltered ? "inline-flex" : "none";
}

function setupShopControls() {
  // Filter tabs click
  const tabs = document.querySelectorAll("#shop-category-tabs .filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      AppState.shopFilter = tab.getAttribute("data-filter") || "all";
      applyShopFilters();
    });
  });

  // Search input
  const searchInput = document.getElementById("catalog-search-input");
  const clearSearchBtn = document.getElementById("catalog-search-clear");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.shopSearch = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = AppState.shopSearch ? "block" : "none";
      applyShopFilters();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      AppState.shopSearch = "";
      clearSearchBtn.style.display = "none";
      applyShopFilters();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("catalog-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.shopSort = e.target.value;
      applyShopFilters();
    });
  }

  // Reset button
  const resetBtn = document.getElementById("reset-filters-btn");
  const clearFiltersCta = document.getElementById("shop-clear-filters-cta");
  const handleReset = () => {
    AppState.shopFilter = "all";
    AppState.shopSearch = "";
    AppState.shopSort = "newest";
    tabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-filter") === "all"));
    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.style.display = "none";
    if (sortSelect) sortSelect.value = "newest";
    applyShopFilters();
  };
  if (resetBtn) resetBtn.addEventListener("click", handleReset);
  if (clearFiltersCta) clearFiltersCta.addEventListener("click", handleReset);
}

/* ===================================================================
   8. INDIVIDUAL PRODUCT DETAIL PAGE RENDERER
   =================================================================== */
function renderProductDetailPage(product) {
  if (!product) return;
  AppState.currentProduct = product;
  AppState.selectedQuantity = 1;
  AppState.selectedImageIndex = 0;
  AppState.selectedSize = (product.sizes && product.sizes.length > 0) ? product.sizes[0] : "Unstitched";

  // 1. Breadcrumbs
  const crumbColl = document.getElementById("p-crumb-collection");
  const crumbTitle = document.getElementById("p-crumb-title");
  if (crumbColl) {
    crumbColl.textContent = product.collection;
    crumbColl.setAttribute("data-route", `/shop?filter=${encodeURIComponent(product.collection)}`);
  }
  if (crumbTitle) crumbTitle.textContent = product.name;

  // 2. Images & Gallery
  const mainImg = document.getElementById("product-main-img");
  const thumbnailsTrack = document.getElementById("product-thumbnails-track");
  const badgesWrap = document.getElementById("product-detail-badges");

  const imagesList = (product.images && product.images.length > 0) 
    ? product.images 
    : ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"];

  if (mainImg) {
    mainImg.src = imagesList[0];
    mainImg.alt = `${product.name} - Luxury Pakistani Ladies Suit`;
  }

  // Badges
  if (badgesWrap) {
    const isDiscounted = product.oldPrice && product.oldPrice > product.price;
    const discountVal = product.discount || (isDiscounted ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0);
    badgesWrap.innerHTML = `
      ${isDiscounted ? `<span class="badge badge-sale">${discountVal}% OFF</span>` : ''}
      ${product.isNew ? `<span class="badge badge-new">New Season</span>` : ''}
      <span class="badge badge-collection">${product.collection}</span>
    `;
  }

  // Thumbnails (4 thumbnails)
  if (thumbnailsTrack) {
    // Ensure we show up to 4 thumbnails
    const thumbsToRender = imagesList.slice(0, 4);
    thumbnailsTrack.innerHTML = thumbsToRender.map((imgSrc, idx) => `
      <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${imgSrc}" alt="${product.name} - View ${idx + 1}" loading="lazy" />
      </div>
    `).join("");

    // Add thumbnail click event
    const thumbElements = thumbnailsTrack.querySelectorAll(".thumb-item");
    thumbElements.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = parseInt(thumb.getAttribute("data-index"), 10);
        AppState.selectedImageIndex = idx;
        thumbElements.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        if (mainImg) {
          mainImg.style.opacity = "0.4";
          setTimeout(() => {
            mainImg.src = imagesList[idx];
            mainImg.style.opacity = "1";
          }, 120);
        }
      });
    });
  }

  // 3. Product Info Metadata
  const collectionTag = document.getElementById("p-collection-tag");
  const pTitle = document.getElementById("p-title");
  const pCurPrice = document.getElementById("p-current-price");
  const pOldPrice = document.getElementById("p-old-price");
  const pDiscBadge = document.getElementById("p-discount-badge");
  const pShortDesc = document.getElementById("p-short-desc");
  const pFabric = document.getElementById("p-fabric-val");
  const pColor = document.getElementById("p-color-val");
  const pPieces = document.getElementById("p-pieces-val");
  const pAvail = document.getElementById("p-avail-val");

  if (collectionTag) collectionTag.textContent = product.collection;
  if (pTitle) pTitle.textContent = product.name;
  if (pCurPrice) pCurPrice.textContent = formatPKR(product.price);

  const isDiscounted = product.oldPrice && product.oldPrice > product.price;
  const discountVal = product.discount || (isDiscounted ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0);

  if (pOldPrice) {
    pOldPrice.textContent = isDiscounted ? formatPKR(product.oldPrice) : "";
    pOldPrice.style.display = isDiscounted ? "inline-block" : "none";
  }
  if (pDiscBadge) {
    pDiscBadge.textContent = isDiscounted ? `${discountVal}% OFF` : "";
    pDiscBadge.style.display = isDiscounted ? "inline-block" : "none";
  }

  if (pShortDesc) pShortDesc.textContent = product.shortDesc || product.description;
  if (pFabric) pFabric.textContent = product.fabric || "Premium Pakistani Lawn / Silk";
  if (pColor) pColor.textContent = product.color || "Multicolor";
  if (pPieces) pPieces.textContent = product.pieces || "3 Piece Suit";
  if (pAvail) pAvail.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${product.availability || "In Stock - Ready to Dispatch"}`;

  // 4. Quantity & Subtotal Preview
  updateDetailQuantityDisplay();

  // 6. Accordions
  const specsBody = document.getElementById("p-detailed-specs");
  if (specsBody) {
    const detailsList = product.details || [
      "Embroidered Shirt Front & Daman Patch",
      "Plain Dyed Back & Sleeves",
      "Embroidered Luxury Dupatta (2.5m)",
      "Dyed Trouser (2.5m)"
    ];
    specsBody.innerHTML = `
      <p style="margin-bottom: 12px;">${product.description}</p>
      <ul>
        ${detailsList.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  const careBody = document.getElementById("p-care-instructions");
  if (careBody) {
    const careList = product.care || [
      "Dry clean recommended for initial wash",
      "Hand wash cold with mild detergent",
      "Do not bleach",
      "Iron on low heat"
    ];
    careBody.innerHTML = `
      <ul>
        ${careList.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  // 7. Complementary / Related Products
  const relatedGrid = document.getElementById("grid-related-products");
  if (relatedGrid) {
    const others = products.filter(p => p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = others.map(createProductCardHTML).join("");
  }

  // 8. Update SEO & Schema
  updateProductSEO(product);
}

function updateDetailQuantityDisplay() {
  const qtyDisplay = document.getElementById("p-qty-display");
  const totalPreview = document.getElementById("p-total-preview");
  if (!AppState.currentProduct) return;

  const total = AppState.currentProduct.price * AppState.selectedQuantity;
  if (qtyDisplay) qtyDisplay.textContent = AppState.selectedQuantity;
  if (totalPreview) totalPreview.textContent = formatPKR(total);
}

/* ===================================================================
   9. PRODUCT IMAGE ZOOM & FULLSCREEN LIGHTBOX
   =================================================================== */
function setupImageInteractivity() {
  const zoomContainer = document.getElementById("image-zoom-container");
  const mainImg = document.getElementById("product-main-img");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const openLightboxBtn = document.getElementById("open-lightbox-btn");
  const closeLightboxBtn = document.getElementById("lightbox-close");

  if (zoomContainer && mainImg) {
    zoomContainer.addEventListener("mousemove", (e) => {
      // Only zoom on desktop
      if (window.innerWidth < 768) return;
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = "scale(1.75)";
    });

    zoomContainer.addEventListener("mouseleave", () => {
      mainImg.style.transformOrigin = "center center";
      mainImg.style.transform = "scale(1)";
    });
  }

  // Lightbox
  if (openLightboxBtn && lightbox && lightboxImg) {
    openLightboxBtn.addEventListener("click", () => {
      if (mainImg) lightboxImg.src = mainImg.src;
      lightbox.classList.add("open");
    });
  }
  if (closeLightboxBtn && lightbox) {
    closeLightboxBtn.addEventListener("click", () => lightbox.classList.remove("open"));
  }
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("open");
    });
  }
}

/* ===================================================================
   10. ORDER MODAL & WHATSAPP ORDER GENERATOR (Requirements 13, 14, 15)
   =================================================================== */
function openOrderModal(product) {
  if (!product) product = AppState.currentProduct;
  if (!product) return;

  const modal = document.getElementById("order-modal");
  const backdrop = document.getElementById("order-modal-backdrop");
  if (!modal || !backdrop) return;

  // Populate summary
  const summaryImg = document.getElementById("order-summary-img");
  const summaryName = document.getElementById("order-summary-name");
  const summaryPieces = document.getElementById("order-summary-pieces");
  const summaryQty = document.getElementById("order-summary-qty");
  const summaryUnitPrice = document.getElementById("order-summary-unit-price");
  const summaryTotal = document.getElementById("order-summary-total");
  const modalQtyVal = document.getElementById("modal-qty-val");

  if (summaryImg) summaryImg.src = (product.images && product.images[0]) || "";
  if (summaryName) summaryName.textContent = product.name;
  if (summaryPieces) summaryPieces.textContent = product.pieces || "3 Piece Suit";
  if (summaryQty) summaryQty.textContent = AppState.selectedQuantity;
  if (summaryUnitPrice) summaryUnitPrice.textContent = `${formatPKR(product.price)} each`;
  if (modalQtyVal) modalQtyVal.textContent = AppState.selectedQuantity;

  const total = product.price * AppState.selectedQuantity;
  if (summaryTotal) summaryTotal.textContent = formatPKR(total);

  // Clear previous error states
  document.querySelectorAll(".field-error").forEach(el => el.style.display = "none");

  // Open modal
  backdrop.classList.add("active");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  const backdrop = document.getElementById("order-modal-backdrop");
  if (modal) modal.classList.remove("open");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function setupOrderForm() {
  const orderForm = document.getElementById("order-checkout-form");
  const modalCloseBtn = document.getElementById("order-modal-close");
  const modalBackdrop = document.getElementById("order-modal-backdrop");

  // Quantity adjustments inside product page
  const minusBtn = document.getElementById("qty-minus-btn");
  const plusBtn = document.getElementById("qty-plus-btn");
  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (AppState.selectedQuantity > 1) {
        AppState.selectedQuantity--;
        updateDetailQuantityDisplay();
      }
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      if (AppState.selectedQuantity < 20) {
        AppState.selectedQuantity++;
        updateDetailQuantityDisplay();
      }
    });
  }

  // Quantity adjustments inside modal
  const modalMinus = document.getElementById("modal-qty-minus");
  const modalPlus = document.getElementById("modal-qty-plus");
  const modalQtyVal = document.getElementById("modal-qty-val");
  const summaryQty = document.getElementById("order-summary-qty");
  const summaryTotal = document.getElementById("order-summary-total");

  if (modalMinus) {
    modalMinus.addEventListener("click", () => {
      if (AppState.selectedQuantity > 1) {
        AppState.selectedQuantity--;
        if (modalQtyVal) modalQtyVal.textContent = AppState.selectedQuantity;
        if (summaryQty) summaryQty.textContent = AppState.selectedQuantity;
        updateDetailQuantityDisplay();
        if (AppState.currentProduct && summaryTotal) {
          summaryTotal.textContent = formatPKR(AppState.currentProduct.price * AppState.selectedQuantity);
        }
      }
    });
  }
  if (modalPlus) {
    modalPlus.addEventListener("click", () => {
      if (AppState.selectedQuantity < 20) {
        AppState.selectedQuantity++;
        if (modalQtyVal) modalQtyVal.textContent = AppState.selectedQuantity;
        if (summaryQty) summaryQty.textContent = AppState.selectedQuantity;
        updateDetailQuantityDisplay();
        if (AppState.currentProduct && summaryTotal) {
          summaryTotal.textContent = formatPKR(AppState.currentProduct.price * AppState.selectedQuantity);
        }
      }
    });
  }

  // ORDER NOW Button Click (Opens modal)
  const pOrderNowBtn = document.getElementById("p-order-now-btn");
  if (pOrderNowBtn) {
    pOrderNowBtn.addEventListener("click", () => openOrderModal(AppState.currentProduct));
  }

  // Direct WhatsApp fast inquiry (Opens WhatsApp directly with questions)
  const pWaInquiryBtn = document.getElementById("p-whatsapp-inquiry-btn");
  if (pWaInquiryBtn) {
    pWaInquiryBtn.addEventListener("click", () => {
      if (!AppState.currentProduct) return;
      const msg = `Assalam o Alaikum, I have an inquiry regarding *${AppState.currentProduct.name}* (Price: ${formatPKR(AppState.currentProduct.price)}). Could you please share more details or fabric video?`;
      const waUrl = `https://wa.me/${STORE_CONFIG.whatsappIntl}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
    });
  }

  // Close modal events
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeOrderModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeOrderModal);

  // Form Submission -> Format WhatsApp Message & Open WhatsApp
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("order-name");
      const phoneInput = document.getElementById("order-phone");
      const areaSelect = document.getElementById("order-area");
      const addressInput = document.getElementById("order-address");
      const noteInput = document.getElementById("order-note");

      const errName = document.getElementById("err-order-name");
      const errPhone = document.getElementById("err-order-phone");
      const errArea = document.getElementById("err-order-area");
      const errAddress = document.getElementById("err-order-address");

      let isValid = true;

      // Validate Name
      const nameVal = nameInput ? nameInput.value.trim() : "";
      if (!nameVal) {
        if (errName) errName.style.display = "block";
        isValid = false;
      } else {
        if (errName) errName.style.display = "none";
      }

      // Validate WhatsApp Number (Pakistani formats: 03001234567, 3001234567, 923001234567, +923001234567)
      const phoneVal = phoneInput ? phoneInput.value.replace(/[\s\-()]/g, "") : "";
      const pkPhoneRegex = /^((\+92)|(92)|(0))?3[0-9]{9}$/;
      if (!phoneVal || !pkPhoneRegex.test(phoneVal)) {
        if (errPhone) errPhone.style.display = "block";
        isValid = false;
      } else {
        if (errPhone) errPhone.style.display = "none";
      }

      // Validate Karachi Area
      const areaVal = areaSelect ? areaSelect.value : "";
      if (!areaVal) {
        if (errArea) errArea.style.display = "block";
        isValid = false;
      } else {
        if (errArea) errArea.style.display = "none";
      }

      // Validate Address
      const addressVal = addressInput ? addressInput.value.trim() : "";
      if (!addressVal || addressVal.length < 5) {
        if (errAddress) errAddress.style.display = "block";
        isValid = false;
      } else {
        if (errAddress) errAddress.style.display = "none";
      }

      if (!isValid) return;

      const product = AppState.currentProduct;
      if (!product) return;

      const qty = AppState.selectedQuantity;
      const unitPriceFormatted = formatPKR(product.price);
      const totalAmountFormatted = formatPKR(product.price * qty);
      const noteVal = noteInput ? noteInput.value.trim() : "";

      // Construct Exact WhatsApp Order Message format with Karachi Area (No size asked)
      let message = `Assalam o Alaikum, I want to place an order.\n\n` +
                    `Product: ${product.name}\n` +
                    `Price: ${unitPriceFormatted}\n` +
                    `Quantity: ${qty}\n` +
                    `Total: ${totalAmountFormatted}\n\n` +
                    `Customer Name: ${nameVal}\n` +
                    `WhatsApp: ${phoneVal}\n` +
                    `Karachi Area: ${areaVal}\n` +
                    `Complete Address: ${addressVal}\n`;

      if (noteVal) {
        message += `\nAdditional Note:\n${noteVal}\n`;
      }

      message += `\nPlease confirm my order.`;

      const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappIntl}?text=${encodeURIComponent(message)}`;

      // Feedback toast and open WhatsApp directly
      showToast("Opening WhatsApp with your order details...");
      closeOrderModal();

      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 350);
    });
  }
}

/* ===================================================================
   11. QUICK SEARCH DRAWER IN HEADER
   =================================================================== */
function setupQuickSearch() {
  const triggerBtn = document.getElementById("search-trigger-btn");
  const drawer = document.getElementById("quick-search-drawer");
  const closeBtn = document.getElementById("close-quick-search");
  const clearBtn = document.getElementById("clear-quick-search");
  const searchInput = document.getElementById("quick-search-input");
  const resultsBox = document.getElementById("quick-search-results");

  if (!triggerBtn || !drawer) return;

  triggerBtn.addEventListener("click", () => {
    drawer.classList.toggle("open");
    if (drawer.classList.contains("open") && searchInput) {
      searchInput.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
      if (searchInput) searchInput.value = "";
      if (resultsBox) resultsBox.innerHTML = "";
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      if (resultsBox) resultsBox.innerHTML = "";
    });
  }

  if (searchInput && resultsBox) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (clearBtn) clearBtn.style.display = q ? "block" : "none";

      if (!q) {
        resultsBox.innerHTML = "";
        return;
      }

      const matches = products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        (p.fabric && p.fabric.toLowerCase().includes(q))
      );

      if (matches.length > 0) {
        resultsBox.innerHTML = `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
            ${matches.slice(0, 6).map(p => `
              <a href="/${p.slug}" data-route="/${p.slug}" style="display: flex; align-items: center; gap: 12px; padding: 8px; border-radius: 4px; background: #FAF8F5; border: 1px solid #E8E2D9;">
                <img src="${p.images[0]}" alt="${p.name}" style="width: 44px; height: 55px; object-fit: cover; border-radius: 4px;" />
                <div>
                  <strong style="font-size: 0.85rem; display: block; line-height: 1.2;">${p.name}</strong>
                  <span style="font-size: 0.75rem; color: #B88E2F; font-weight: 600;">${formatPKR(p.price)}</span>
                </div>
              </a>
            `).join("")}
          </div>
        `;
      } else {
        resultsBox.innerHTML = `<p style="padding: 12px 0; color: #8C827A; font-size: 0.85rem;">No Pakistani suits matching "${q}".</p>`;
      }
    });
  }
}

/* ===================================================================
   13. MOBILE DRAWER NAVIGATION
   =================================================================== */
function setupMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-drawer-backdrop");
  const closeBtn = document.getElementById("mobile-drawer-close");

  const openDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.add("open");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  const closeDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  // Close drawer on link clicks
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ===================================================================
   14. CONTACT FORM TO WHATSAPP
   =================================================================== */
function setupContactForm() {
  const contactForm = document.getElementById("contact-inquiry-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const city = document.getElementById("contact-city").value.trim();
    const subject = document.getElementById("contact-subject").value.trim() || "General Inquiry";
    const msg = document.getElementById("contact-message").value.trim();

    const waText = `Assalam o Alaikum,\n\n` +
                   `Customer Name: ${name}\n` +
                   `WhatsApp: ${phone}\n` +
                   `City: ${city}\n` +
                   `Subject: ${subject}\n\n` +
                   `Message:\n${msg}\n\n` +
                   `Please assist me.`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappIntl}?text=${encodeURIComponent(waText)}`;
    showToast("Opening WhatsApp conversation...");
    setTimeout(() => window.open(url, "_blank"), 300);
  });
}

/* ===================================================================
   15. DYNAMIC SEO & STRUCTURED DATA (Requirements 24 & 25)
   =================================================================== */
function updateProductSEO(product) {
  if (!product) return;

  const pageTitle = `${product.name} | Aurelia Collection - Luxury Pakistani Fashion`;
  const pageDesc = `Shop ${product.name} from Aurelia Collection. ${product.shortDesc || product.description} Made with ${product.fabric}. Price: ${formatPKR(product.price)}. Fast nationwide delivery.`;
  const productURL = `https://aureliacollection.com/${product.slug}`;
  const productImg = (product.images && product.images[0]) || "";

  // Title
  document.title = pageTitle;

  // Meta Description
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", pageDesc);

  // Canonical
  const canonical = document.getElementById("canonical-url");
  if (canonical) canonical.setAttribute("href", productURL);

  // Open Graph
  const ogTitle = document.getElementById("og-title");
  const ogDesc = document.getElementById("og-description");
  const ogUrl = document.getElementById("og-url");
  const ogImg = document.getElementById("og-image");
  if (ogTitle) ogTitle.setAttribute("content", pageTitle);
  if (ogDesc) ogDesc.setAttribute("content", pageDesc);
  if (ogUrl) ogUrl.setAttribute("content", productURL);
  if (ogImg) ogImg.setAttribute("content", productImg);

  // Twitter
  const twTitle = document.getElementById("tw-title");
  const twDesc = document.getElementById("tw-description");
  const twUrl = document.getElementById("tw-url");
  const twImg = document.getElementById("tw-image");
  if (twTitle) twTitle.setAttribute("content", pageTitle);
  if (twDesc) twDesc.setAttribute("content", pageDesc);
  if (twUrl) twUrl.setAttribute("content", productURL);
  if (twImg) twImg.setAttribute("content", productImg);

  // JSON-LD Product Structured Data (Requirement 25)
  const structuredDataEl = document.getElementById("structured-data");
  if (structuredDataEl) {
    const schemaObj = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": product.images || [productImg],
      "description": product.description,
      "sku": `AURELIA-${product.id}`,
      "brand": {
        "@type": "Brand",
        "name": STORE_CONFIG.brandName
      },
      "offers": {
        "@type": "Offer",
        "url": productURL,
        "priceCurrency": "PKR",
        "price": product.price,
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    };
    structuredDataEl.textContent = JSON.stringify(schemaObj, null, 2);
  }
}

function updateGeneralSEO(title, description, path = "") {
  document.title = title;
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", description);
  const canonical = document.getElementById("canonical-url");
  if (canonical) canonical.setAttribute("href", `https://aureliacollection.com${path}`);
}

/* ===================================================================
   16. CLIENT-SIDE CLEAN SLUG ROUTER (Requirements 6, 7, 30, 31)
   =================================================================== */
function navigateTo(url, pushHistory = true) {
  if (pushHistory) {
    history.pushState(null, "", url);
  }
  handleRoute();
}

function switchView(viewId) {
  document.querySelectorAll(".router-view").forEach(v => v.classList.remove("active"));
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateActiveNavLinks(path) {
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const route = link.getAttribute("data-route");
    if (route === path) {
      link.classList.add("active");
    } else if (route === "/shop" && (path.startsWith("/summer") || path.startsWith("/winter") || path.startsWith("/sale") || path.startsWith("/new"))) {
      link.classList.remove("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function handleRoute() {
  const fullPath = window.location.pathname;
  // Clean slug
  let slug = fullPath.replace(/^\/+|\/+$/g, "").toLowerCase();

  // Close quick search drawer on navigation
  const searchDrawer = document.getElementById("quick-search-drawer");
  if (searchDrawer) searchDrawer.classList.remove("open");

  // ROUTE 1: HOME ("" or "/")
  if (slug === "" || slug === "index.html" || slug === "home") {
    switchView("view-home");
    updateActiveNavLinks("/");
    updateGeneralSEO(
      "Aurelia Collection | Premium Pakistani Ladies Fashion & Luxury Suits",
      "Discover Aurelia Collection's luxury Pakistani ladies fashion. Shop premium embroidered lawn, luxury chiffon, velvet, unstitched & ready-to-wear 3-piece suits."
    );
    renderHomePageSections();
    return;
  }

  // ROUTE 2: SHOP ALL ("/shop")
  if (slug === "shop") {
    switchView("view-shop");
    updateActiveNavLinks("/shop");
    const shopTitle = document.getElementById("shop-title");
    const shopSub = document.getElementById("shop-subtitle");
    if (shopTitle) shopTitle.textContent = "All Collections";
    if (shopSub) shopSub.textContent = "Explore our complete catalog of Pakistani luxury suits, embroidered lawn, velvet, and festive chiffon.";
    
    // Check for query filter e.g. /shop?filter=Summer
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter") || "all";
    AppState.shopFilter = filterParam;

    document.querySelectorAll("#shop-category-tabs .filter-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-filter") === filterParam);
    });

    applyShopFilters();
    updateGeneralSEO("Shop All Collections | Aurelia Collection", "Browse all Pakistani embroidered lawn, unstitched dresses, and luxury suits.", "/shop");
    return;
  }

  // ROUTE 3: SUMMER COLLECTION ("/summer-collection" or "/summer")
  if (slug === "summer-collection" || slug === "summer") {
    switchView("view-shop");
    updateActiveNavLinks("/summer-collection");
    const shopTitle = document.getElementById("shop-title");
    const shopSub = document.getElementById("shop-subtitle");
    if (shopTitle) shopTitle.textContent = "Summer Collection 2026";
    if (shopSub) shopSub.textContent = "Cool pastel tones, breathable Swiss lawn, laser cut schiffli, and digital silk dupattas.";
    AppState.shopFilter = "Summer Collection";
    document.querySelectorAll("#shop-category-tabs .filter-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-filter") === "Summer Collection");
    });
    applyShopFilters();
    updateGeneralSEO("Summer Lawn Collection | Aurelia Collection", "Breezy Swiss lawn and embroidered summer dresses with pure chiffon dupattas.", "/summer-collection");
    return;
  }

  // ROUTE 4: WINTER COLLECTION ("/winter-collection" or "/winter")
  if (slug === "winter-collection" || slug === "winter") {
    switchView("view-shop");
    updateActiveNavLinks("/winter-collection");
    const shopTitle = document.getElementById("shop-title");
    const shopSub = document.getElementById("shop-subtitle");
    if (shopTitle) shopTitle.textContent = "Winter Collection";
    if (shopSub) shopSub.textContent = "Plush Micro 9000 velvet suits, warm banarasi brocades, and jacquard shawls.";
    AppState.shopFilter = "Winter Collection";
    document.querySelectorAll("#shop-category-tabs .filter-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-filter") === "Winter Collection");
    });
    applyShopFilters();
    updateGeneralSEO("Winter Velvet & Shawls | Aurelia Collection", "Royal Micro 9000 velvet and woven jacquard shawls for Pakistani winter festivities.", "/winter-collection");
    return;
  }

  // ROUTE 5: NEW ARRIVALS ("/new-arrivals" or "/new")
  if (slug === "new-arrivals" || slug === "new") {
    switchView("view-shop");
    updateActiveNavLinks("/new-arrivals");
    const shopTitle = document.getElementById("shop-title");
    const shopSub = document.getElementById("shop-subtitle");
    if (shopTitle) shopTitle.textContent = "New Arrivals";
    if (shopSub) shopSub.textContent = "The freshest Pakistani embroidered designs just off our atelier looms.";
    AppState.shopFilter = "new-arrivals";
    document.querySelectorAll("#shop-category-tabs .filter-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-filter") === "new-arrivals");
    });
    applyShopFilters();
    updateGeneralSEO("New Arrivals | Aurelia Collection", "Latest Pakistani designer ladies suits and fresh festive collections.", "/new-arrivals");
    return;
  }

  // ROUTE 6: SALE ("/sale" or "/discounts")
  if (slug === "sale" || slug === "discounts") {
    switchView("view-shop");
    updateActiveNavLinks("/sale");
    const shopTitle = document.getElementById("shop-title");
    const shopSub = document.getElementById("shop-subtitle");
    if (shopTitle) shopTitle.textContent = "Sale & Special Discounts";
    if (shopSub) shopSub.textContent = "Enjoy up to 30% OFF on selected embroidered lawn, chiffon, and velvet suits.";
    AppState.shopFilter = "sale";
    document.querySelectorAll("#shop-category-tabs .filter-tab").forEach(tab => {
      tab.classList.toggle("active", tab.getAttribute("data-filter") === "sale");
    });
    applyShopFilters();
    updateGeneralSEO("Sale & Discounts | Aurelia Collection", "Special offers on Pakistani luxury suits and lawn unstitched collections.", "/sale");
    return;
  }

  // ROUTE 7: ABOUT US ("/about")
  if (slug === "about" || slug === "our-story") {
    switchView("view-about");
    updateActiveNavLinks("/about");
    updateGeneralSEO("Our Story & Heritage | Aurelia Collection", "Learn about Aurelia Collection's passion for Pakistani artisan needlework and ethical textile craftsmanship.", "/about");
    return;
  }

  // ROUTE 8: CONTACT ("/contact")
  if (slug === "contact") {
    switchView("view-contact");
    updateActiveNavLinks("/contact");
    updateGeneralSEO("Contact Concierge & WhatsApp Order | Aurelia Collection", "Get in touch with Aurelia Collection. Instant WhatsApp ordering at 03232974451.", "/contact");
    return;
  }

  // ROUTE 9: INDIVIDUAL PRODUCT BY SLUG (e.g. /lili, /mahnoor, /noor, /ayesha, /zara)
  const matchedProduct = products.find(p => p.slug.toLowerCase() === slug);
  if (matchedProduct) {
    switchView("view-product");
    updateActiveNavLinks("");
    renderProductDetailPage(matchedProduct);
    return;
  }

  // ROUTE 10: 404 NOT FOUND
  switchView("view-404");
  updateActiveNavLinks("");
  updateGeneralSEO("Product Not Found | Aurelia Collection", "The requested Pakistani dress could not be found. Explore our latest collections.");
}

/* ===================================================================
   17. GLOBAL LINK INTERCEPTION (SPA Behavior)
   =================================================================== */
function setupLinkInterception() {
  document.addEventListener("click", (e) => {
    // Find closest anchor tag with an href
    const anchor = e.target.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    const isTargetBlank = anchor.getAttribute("target") === "_blank";

    // Allow external URLs, WhatsApp wa.me, tel:, mailto:, #
    if (!href || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#") || isTargetBlank) {
      return;
    }

    // Only intercept internal site links
    if (href.startsWith("/")) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    handleRoute();
  });
}

/* ===================================================================
   18. HEADER SCROLL SHADOW EFFECT
   =================================================================== */
function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ===================================================================
   19. APP INITIALIZATION
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderHomePageSections();
  setupShopControls();
  setupImageInteractivity();
  setupOrderForm();
  setupQuickSearch();
  setupMobileDrawer();
  setupContactForm();
  setupHeaderScroll();
  setupLinkInterception();

  // Automatic image error fallback to ensure no broken images appear
  window.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") {
      const fallbackUrl = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85";
      if (e.target.src !== fallbackUrl) {
        e.target.src = fallbackUrl;
      }
    }
  }, true);

  // Initial Route evaluation based on current URL path
  handleRoute();
});
