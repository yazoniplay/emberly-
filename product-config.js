/* Central Emberly product and policy configuration. Confirm supplier specs before publishing. */
window.EMBERLY = {
  brand: "Emberly",
  product: {
    id: "emberly-flame-diffuser",
    name: "3D Flame Fireplace Diffuser",
    priceSEK: 899,
    currency: "SEK",
    supplierUrl: "https://cjdropshipping.com/product/new-flame-aromatherapy-machine-colorful-essential-oil-diffuser-home-large-fog-volume-flame-humidifier-3d-flame-fireplace-machine-p-2410050244571620700.html",
    description: "A fireplace-inspired ambience piece that uses illuminated mist to create a simulated flame effect. Designed to bring a warm visual glow to desks, bedrooms, and relaxed evening spaces.",
    images: [
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85", alt: "Warm, softly lit living room interior", type: "lifestyle" },
      { src: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1400&q=85", alt: "Warm candlelight and cosy home ambience", type: "lifestyle" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85", alt: "Calm, warm-toned home interior", type: "lifestyle" }
    ],
    /* Exact product photography not yet verified. Lifestyle photos are not product photos. Replace with supplier-approved product images. */
    verifiedSpecs: [],
    variants: [],
    supplierImageStatus: "Supplier-specific product images and specifications still need verification."
  },
  shipping: {
    supportedCountries: [],
    costs: "Not configured",
    estimates: "Shipping options and estimated delivery times must be confirmed before purchase.",
    returns: "Returns policy must be confirmed before launch.",
    contactEmail: "Add a verified support email before launch."
  },
  checkout: { provider: "not-configured", live: false, note: "Checkout is not configured. Do not accept payment until a legitimate provider and server-side order validation are set up." }
};