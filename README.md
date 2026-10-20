# emberly. — Bring the Glow Home

Static, GitHub Pages-compatible storefront concept for a fireplace-inspired flame-effect diffuser. No build tools or server runtime are required.

## Main experience
- `index.html` — cinematic single-product homepage, gallery, editorial feature sections, brand manifesto, honest pre-launch social proof and final CTA.
- `shop.html` — dedicated product page.
- `why.html` — brand story.
- `faq.html` — product and pre-launch FAQs.
- `cart.html` — persistent shopping bag, quantity controls and subtotal.
- `supplier.html` — product verification checklist.
- `shipping.html`, `returns.html`, `privacy.html`, `terms.html` — editable policy templates; these require completion and review before launch.
- `product-config.js` — central product name, price, currency, gallery, supplier URL, shipping and checkout state.
- `store.js` — shared gallery, bag persistence, quantity controls, navigation, subtotal and disabled-checkout message.
- `styles.css` — responsive editorial design system, focus states and reduced-motion support.

## Product imagery and accuracy
The supplier listing is [CJdropshipping's 3D flame-effect diffuser](https://cjdropshipping.com/product/new-flame-aromatherapy-machine-colorful-essential-oil-diffuser-home-large-fog-volume-flame-humidifier-3d-flame-fireplace-machine-p-2410050244571620700.html). The main product gallery now uses supplier-hosted images depicting the actual product style, rather than unrelated lifestyle photos. Confirm commercial-use permission for those images before launch. Supporting interior photography is illustrative and sourced from Unsplash.

The configured price is **899 SEK**, a test assumption—not a verified retail price. The supplier listing mentions capacity, lighting and timer features, but details vary and may conflict between variant/product attribute fields. Verify the exact SKU, sample, manual, safety requirements, included accessories, power input and every customer-facing claim before launch. No customer reviews are fabricated. No variants are offered in the interface until a purchasable option is confirmed.

## Cart and checkout
- Cart persists in `localStorage` in the visitor's browser.
- Quantity controls are bounded from 1 to 99; items can be removed and the empty state is handled.
- Subtotal is calculated from the central configured price and quantity. Shipping, tax and final checkout totals are not calculated.
- Checkout is disabled. The button does not simulate payment or create an order.
- Never collect card details directly in this static frontend. A real launch needs a legitimate provider, server-side price/order validation, and verified payment webhooks.

## Before accepting orders
1. Confirm supplier variant, product imagery and image rights, product manual, safety compliance, accessories, specs, stock and fulfilment.
2. Confirm destination coverage, shipping costs/timing, customs/tax wording, tracking, returns, damaged-item handling and a monitored support email.
3. Complete all policy templates with accurate seller details and get appropriate legal review. Do not publish bracketed placeholders as finished policies.
4. Have an adult parent/legal guardian handle payment-provider account ownership, verification, business obligations and any required registrations.
5. Configure secure checkout and test provider sandbox flows, order confirmation, cancellation and refunds before enabling live payments.
6. Verify the GitHub Pages deployment in a browser on phone and desktop, including cart persistence, keyboard operation, images, links and browser console.

## Deployment
The files can be served from the repository root with GitHub Pages. In repository **Settings → Pages**, select the intended branch and root directory. No build command is required. Deployment and the live site must still be verified in GitHub Pages settings and in a browser after the latest commits finish.
