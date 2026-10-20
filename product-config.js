/* Central Emberly configuration. Price is a test assumption; confirm supplier variant and fulfilment before launch. */
window.EMBERLY = {
  brand: { name: "emberly.", tagline: "Bring the Glow Home." },
  product: {
    id: "emberly-flame-diffuser",
    name: "3D Flame Fireplace Diffuser",
    price: 899,
    currency: "SEK",
    supplierUrl: "https://cjdropshipping.com/product/new-flame-aromatherapy-machine-colorful-essential-oil-diffuser-home-large-fog-volume-flame-humidifier-3d-flame-fireplace-machine-p-2410050244571620700.html",
    description: "Firelight, reimagined. Emberly brings a fireplace-inspired flame effect and a delicate veil of mist into your evening ritual, creating a softer atmosphere for the spaces you call home.",
    images: [
      { src: "https://oss-cf.cjdropshipping.com/product/2024/10/05/02/25533908-2302-4325-bfa8-7e447d12a8d3_trans.jpeg", alt: "Black fireplace-style diffuser with illuminated ember bed and flame-like mist, photographed on a light stone table", type: "product" },
      { src: "https://oss-cf.cjdropshipping.com/product/2024/10/05/02/d7e6b9b4-bb74-4a16-ae62-9a00ac910c44_trans.jpeg", alt: "Black fireplace-style diffuser with flame-like mist in a softly lit interior", type: "product-detail" },
      { src: "https://oss-cf.cjdropshipping.com/product/2024/10/05/02/aac883f7-05a6-41ca-af43-dafd412f7fe5_trans.jpeg", alt: "Supplier image showing the diffuser mist illuminated in different colors", type: "product-detail" },
      { src: "https://oss-cf.cjdropshipping.com/product/2024/10/05/02/cc5a401c-669b-4a00-b5af-2b2cd1ce6026_trans.jpeg", alt: "Supplier lifestyle image showing the black flame-effect diffuser on a warm wooden surface", type: "product-lifestyle" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=82", alt: "Warm neutral living room with considered textures and soft lighting", type: "lifestyle" }
    ],
    /* Supplier listing describes these features; confirm they match the exact purchasable SKU before making a customer-facing promise. */
    pendingVerification: ["Exact selected SKU and color", "150 ml capacity", "Lighting modes", "Timer behavior", "Remote included in selected variant", "USB-C cable and power requirements", "Essential-oil compatibility", "Product image commercial-use permission"],
    variants: [],
    imageUsageNote: "Supplier-hosted images correspond to the listed product. Confirm commercial-use permission with CJdropshipping before launch."
  },
  shipping: {
    countries: [],
    cost: null,
    deliveryEstimate: null,
    returns: null,
    contactEmail: ""
  },
  checkout: {
    provider: "",
    enabled: false,
    note: "Checkout is not configured. No payments or orders can be processed."
  }
};