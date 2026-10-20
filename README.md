# emberly. — Bring the Glow Home

A static, GitHub Pages-compatible luxury storefront. Each major experience has its own HTML page; no build tools or server runtime are required.

## Separate pages
- `index.html` — focused cinematic homepage and brand introduction.
- `shop.html` — dedicated product gallery, product information, quantity selection and Add to Bag.
- `ritual.html` — the three editorial pillars: flame-inspired light, atmosphere, and the evening ritual.
- `why.html` — separate brand story and manifesto.
- `reviews.html` — honest review page; remains clear that there are no genuine customer reviews yet.
- `faq.html` — product and pre-launch FAQs.
- `cart.html` — persistent shopping bag, quantity controls and subtotal.
- `supplier.html` — product verification checklist.
- `shipping.html`, `returns.html`, `privacy.html`, `terms.html` — editable policy templates that require completion and review before launch.

## Shared implementation
- `product-config.js` — central product name, price, currency, gallery, supplier URL and checkout state.
- `store.js` — shared navigation, gallery, cart persistence, quantity controls, subtotal and disabled-checkout message.
- `styles.css` — responsive editorial design system, focus states and reduced-motion support.
- `sitemap.xml` — all separate storefront and policy pages.

## Product imagery and accuracy
The supplier listing is [CJdropshipping's 3D flame-effect diffuser](https://cjdropshipping.com/product/new-flame-aromatherapy-machine-colorful-essential-oil-diffuser-home-large-fog-volume-flame-humidifier-3d-flame-fireplace-machine-p-2410050244571620700.html). The main product gallery uses supplier-hosted images. Confirm commercial-use permission before launch. Supporting interior photography is illustrative and sourced from Unsplash.

The configured price is **899 SEK**, a test assumption—not a verified retail price. Verify the exact SKU, sample, manual, safety requirements, included accessories, power input and every customer-facing claim before launch. No customer reviews are fabricated and no variants are offered until a purchasable option is confirmed.

## Cart and checkout
- Cart persists in `localStorage` in the visitor's browser.
- Quantity controls are bounded from 1 to 99; items can be removed and the empty state is handled.
- Subtotal is calculated from the central configured price and quantity. Shipping, tax and final checkout totals are not calculated.
- Checkout is disabled. The button does not simulate payment or create an order.
- Never collect card details directly in this static frontend. A real launch needs a legitimate provider, server-side price/order validation, and verified payment webhooks.

## Before accepting orders
1. Confirm supplier variant, product imagery and image rights, manual, safety compliance, accessories, stock and fulfilment.
2. Confirm destination coverage, shipping costs/timing, customs/tax wording, tracking, returns, damaged-item handling and a monitored support email.
3. Complete all policy templates with accurate seller details and get appropriate legal review.
4. Have an adult parent/legal guardian handle payment-provider account ownership, verification, business obligations and any required registrations.
5. Configure secure checkout and test provider sandbox flows, order confirmation, cancellation and refunds before enabling live payments.
6. Verify the live GitHub Pages deployment in a browser on phone and desktop, including cart persistence, keyboard operation, images, links and browser console.

## Deployment
GitHub Pages can serve the static files from the repository root. In repository **Settings → Pages**, select the intended branch and root directory. No build command is required. Verify deployment and test the actual live URL after commits finish.
