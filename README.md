# Emberly storefront

Static multi-page storefront for the Emberly flame-effect diffuser concept. Built for GitHub Pages without a build step.

## Pages
- `index.html` — home
- `shop.html` — product gallery and purchase controls
- `why.html` — brand story
- `faq.html` — product and policy FAQ
- `cart.html` — persistent shopping bag
- `supplier.html` — supplier/product verification notes

## Product configuration
Edit `product-config.js` to change the proposed SEK price, product title, copy, gallery images, verified specifications, shipping, contact, and checkout configuration. The current 899 SEK price is a test assumption. Current gallery images are lifestyle imagery, clearly labelled as illustrative; they are not verified product photos. Replace them with supplier-approved images of the exact variant before launch.

## Current functionality
- Cart persists between pages with localStorage.
- Add, remove, and quantity controls; subtotal and bag count update.
- Responsive layouts, keyboard-operable controls, semantic page structure, reduced-motion support.
- Checkout is deliberately disabled and does not simulate payment success.

## Before accepting orders
1. Verify the selected supplier variant, images, included accessories, capacity, lighting, timer, remote, and power requirements directly with CJdropshipping.
2. Confirm fulfilment countries, costs, delivery estimates, return/damage process, and a monitored customer-support email.
3. Configure a legitimate payment provider with an adult parent/legal guardian handling account ownership, business obligations, and provider verification. Keep secret keys server-side. Add server-side price/cart validation and payment webhook verification; never collect card details in this static site.
4. Review consumer, tax, privacy, product-safety, and import requirements for every market served.
5. Test all pages on mobile and desktop. External Google Fonts and Unsplash lifestyle images require network access.

## Deploy
The repository can be served directly by GitHub Pages: repository Settings → Pages → deploy from the main branch and root directory. No build command is needed. The sitemap URL assumes the repository's GitHub Pages project URL; update it if the deployment URL changes.
