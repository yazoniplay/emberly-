(() => {
  "use strict";
  const cfg = window.EMBERLY;
  if (!cfg) return;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const money = n => new Intl.NumberFormat("sv-SE", { style: "currency", currency: cfg.product.currency, maximumFractionDigits: 0 }).format(n);
  const safeQty = n => Number.isFinite(Number(n)) ? Math.min(99, Math.max(1, Math.floor(Number(n)))) : 1;
  const getCart = () => {
    try {
      const raw = JSON.parse(localStorage.getItem("emberly-cart") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw.filter(x => x && x.id === cfg.product.id).map(x => ({ id: cfg.product.id, qty: safeQty(x.qty) }));
    } catch { return []; }
  };
  const saveCart = cart => { try { localStorage.setItem("emberly-cart", JSON.stringify(cart)); } catch {} updateCount(); renderCart(); renderDrawer(); };
  const updateCount = () => $$(".bag-count").forEach(el => { el.textContent = getCart().reduce((n, x) => n + x.qty, 0); });
  const announce = message => {
    let node = $("#toast");
    if (!node) { node = document.createElement("div"); node.id = "toast"; node.className = "toast"; node.setAttribute("role", "status"); node.setAttribute("aria-live", "polite"); document.body.append(node); }
    node.textContent = message; node.hidden = false;
  };
  const addToBag = qty => {
    const amount = safeQty(qty);
    const cart = getCart();
    const item = cart.find(x => x.id === cfg.product.id);
    if (item) item.qty = Math.min(99, item.qty + amount); else cart.push({ id: cfg.product.id, qty: amount });
    saveCart(cart); announce("Added to your bag."); openDrawer();
  };
  let drawerRoot = null;
  const initCartDrawer = () => {
    if ($("#cart-drawer")) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = '<div class="drawer-backdrop" data-drawer-close hidden></div><aside class="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-hidden="true"><div class="drawer-header"><div><p class="eyebrow">EMBERLY</p><h2 id="drawer-title">Your bag <span id="drawer-count">(0)</span></h2></div><button class="drawer-close" type="button" aria-label="Close shopping bag" data-drawer-close>×</button></div><div class="drawer-items" id="drawer-items" aria-live="polite"></div><div class="drawer-footer" id="drawer-footer"><div class="drawer-subtotal"><span>Subtotal</span><strong id="drawer-subtotal"></strong></div><p>Shipping and taxes are not included.</p><a class="button button-cream button-wide drawer-view-bag" href="cart.html">View bag &amp; checkout status ↗</a><p class="checkout-note">Checkout is not configured. No payment will be taken.</p><a class="drawer-continue" href="shop.html">Continue shopping</a></div></aside>';
    while (wrap.firstChild) document.body.append(wrap.firstChild);
    drawerRoot = $("#cart-drawer");
    $("[data-drawer-close]").forEach(el => el.addEventListener("click", closeDrawer));
    $(".bag-link").forEach(link => link.addEventListener("click", event => {
      event.preventDefault();
      if ($(".nav.is-open")) { $(".nav").classList.remove("is-open"); $(".menu-toggle")?.setAttribute("aria-expanded","false"); }
      openDrawer();
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && drawerRoot?.classList.contains("is-open")) closeDrawer();
      if (event.key === "Tab" && drawerRoot?.classList.contains("is-open")) {
        const focusable = $('button:not([disabled]),a[href]', drawerRoot);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    renderDrawer();
  };
  const openDrawer = () => {
    if (!drawerRoot) return;
    drawerRoot.classList.add("is-open");
    drawerRoot.setAttribute("aria-hidden","false");
    const backdrop = $("[data-drawer-close].drawer-backdrop");
    if (backdrop) { backdrop.hidden = false; requestAnimationFrame(() => backdrop.classList.add("is-visible")); }
    document.body.classList.add("drawer-open");
    $(".drawer-close", drawerRoot)?.focus();
  };
  const closeDrawer = () => {
    if (!drawerRoot) return;
    drawerRoot.classList.remove("is-open");
    drawerRoot.setAttribute("aria-hidden","true");
    const backdrop = $("[data-drawer-close].drawer-backdrop");
    if (backdrop) { backdrop.classList.remove("is-visible"); window.setTimeout(() => { if (!drawerRoot?.classList.contains("is-open")) backdrop.hidden = true; }, 280); }
    document.body.classList.remove("drawer-open");
  };
  const renderDrawer = () => {
    const root = $("#drawer-items");
    if (!root) return;
    const cart = getCart();
    root.replaceChildren();
    const count = cart.reduce((sum,item)=>sum+item.qty,0);
    const countNode = $("#drawer-count"); if (countNode) countNode.textContent = "(" + count + ")";
    const footer = $("#drawer-footer");
    if (!cart.length) {
      const empty = document.createElement("div"); empty.className = "drawer-empty";
      empty.innerHTML = '<p class="eyebrow">NOTHING IN YOUR BAG YET</p><h3>Your next favourite<br>home detail starts here.</h3><a class="button button-cream" href="shop.html">Shop the diffuser ↗</a>';
      root.append(empty); if (footer) footer.hidden = true; return;
    }
    if (footer) footer.hidden = false;
    cart.forEach(item => {
      const row = document.createElement("article"); row.className = "drawer-item";
      const image = document.createElement("img"); image.src = cfg.product.images[0].src; image.alt = cfg.product.images[0].alt; image.loading = "lazy";
      const details = document.createElement("div"); details.className = "drawer-item-details";
      const name = document.createElement("h3"); name.textContent = cfg.product.name;
      const price = document.createElement("p"); price.className = "drawer-item-price"; price.textContent = money(cfg.product.price);
      const controls = document.createElement("div"); controls.className = "drawer-item-controls";
      const qty = document.createElement("div"); qty.className = "quantity-control";
      const minus = document.createElement("button"); minus.type="button"; minus.textContent="−"; minus.setAttribute("aria-label","Decrease quantity");
      const number = document.createElement("output"); number.textContent=String(item.qty);
      const plus = document.createElement("button"); plus.type="button"; plus.textContent="+";
      plus.setAttribute("aria-label","Increase quantity");
      minus.addEventListener("click",()=>{const next=getCart();if(item.qty<=1)saveCart(next.filter(x=>x.id!==item.id));else{next.forEach(x=>{if(x.id===item.id)x.qty=item.qty-1;});saveCart(next);}});
      plus.addEventListener("click",()=>{const next=getCart();next.forEach(x=>{if(x.id===item.id)x.qty=Math.min(99,item.qty+1);});saveCart(next);});
      qty.append(minus,number,plus);
      const remove=document.createElement("button");remove.type="button";remove.className="text-button";remove.textContent="Remove";
      remove.addEventListener("click",()=>{saveCart(getCart().filter(x=>x.id!==item.id));announce("Removed from your bag.");});
      controls.append(qty,remove);details.append(name,price,controls);
      const total=document.createElement("strong");total.textContent=money(cfg.product.price*item.qty);
      row.append(image,details,total);root.append(row);
    });
    const subtotal=$("#drawer-subtotal");if(subtotal)subtotal.textContent=money(cart.reduce((sum,item)=>sum+cfg.product.price*item.qty,0));
  };
  const renderProduct = () => {
    $$("[data-product-name]").forEach(el => el.textContent = cfg.product.name);
    $$("[data-product-description]").forEach(el => el.textContent = cfg.product.description);
    $$("[data-price]").forEach(el => el.textContent = money(cfg.product.price));
    $$("[data-product-image]").forEach(el => { el.src = cfg.product.images[0].src; el.alt = cfg.product.images[0].alt; });
    $$("[data-product-price]").forEach(el => el.textContent = money(cfg.product.price));
    $$("[data-price-cta]").forEach(el => el.textContent = "Discover · " + money(cfg.product.price));
  };
  const initGallery = () => {
    const main = $("#gallery-main"), thumbs = $("#gallery-thumbs");
    if (!main || !thumbs) return;
    main.src = cfg.product.images[0].src; main.alt = cfg.product.images[0].alt;
    thumbs.replaceChildren();
    cfg.product.images.forEach((item, i) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "gallery-thumb"; button.setAttribute("aria-label", "Show product image " + (i + 1)); button.setAttribute("aria-pressed", String(i === 0));
      const image = document.createElement("img"); image.src = item.src; image.alt = ""; image.loading = "lazy"; image.decoding = "async";
      button.append(image);
      button.addEventListener("click", () => {
        main.src = item.src; main.alt = item.alt;
        $$(".gallery-thumb", thumbs).forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
      });
      thumbs.append(button);
    });
    main.tabIndex = 0;
    main.addEventListener("keydown", e => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      const current = $$(".gallery-thumb", thumbs).findIndex(b => b.getAttribute("aria-pressed") === "true");
      const next = (current + (e.key === "ArrowRight" ? 1 : -1) + cfg.product.images.length) % cfg.product.images.length;
      $$(".gallery-thumb", thumbs)[next]?.click();
    });
  };
  const renderCart = () => {
    const root = $("#cart-items");
    if (!root) return;
    const cart = getCart();
    root.replaceChildren();
    const summary = $("#cart-summary");
    if (!cart.length) {
      const empty = document.createElement("div"); empty.className = "empty-bag";
      empty.innerHTML = '<p class="eyebrow">A little room for atmosphere</p><h2>Your bag is waiting.</h2><p>When something feels right, you’ll find it here.</p><a class="button button-dark" href="index.html#the-object">Discover the object</a>';
      root.append(empty); if (summary) summary.hidden = true; return;
    }
    if (summary) summary.hidden = false;
    cart.forEach(item => {
      const row = document.createElement("article"); row.className = "cart-row";
      const image = document.createElement("img"); image.src = cfg.product.images[0].src; image.alt = cfg.product.images[0].alt; image.loading = "lazy";
      const details = document.createElement("div"); details.className = "cart-item-details";
      const name = document.createElement("h3"); name.textContent = cfg.product.name;
      const unit = document.createElement("p"); unit.textContent = money(cfg.product.price) + " each"; unit.className = "muted";
      const quantity = document.createElement("div"); quantity.className = "quantity-control";
      const minus = document.createElement("button"); minus.type = "button"; minus.textContent = "−"; minus.setAttribute("aria-label", "Decrease quantity");
      const output = document.createElement("output"); output.textContent = String(item.qty);
      const plus = document.createElement("button"); plus.type = "button"; plus.textContent = "+"; plus.setAttribute("aria-label", "Increase quantity");
      const update = qty => { const next = getCart(); if (qty < 1) saveCart(next.filter(x => x.id !== item.id)); else { next.forEach(x => { if (x.id === item.id) x.qty = safeQty(qty); }); saveCart(next); } };
      minus.addEventListener("click", () => update(item.qty - 1));
      plus.addEventListener("click", () => update(Math.min(99, item.qty + 1)));
      quantity.append(minus, output, plus);
      const remove = document.createElement("button"); remove.type = "button"; remove.className = "text-button"; remove.textContent = "Remove"; remove.addEventListener("click", () => { saveCart(getCart().filter(x => x.id !== item.id)); announce("Removed from your bag."); });
      details.append(name, unit, quantity, remove);
      const total = document.createElement("strong"); total.textContent = money(cfg.product.price * item.qty);
      row.append(image, details, total); root.append(row);
    });
    const subtotal = cart.reduce((sum, item) => sum + cfg.product.price * item.qty, 0);
    const totalNode = $("#cart-subtotal"); if (totalNode) totalNode.textContent = money(subtotal);
  };
  const initMenu = () => {
    const toggle = $(".menu-toggle"), nav = $(".nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); });
    $$("a", nav).forEach(link => link.addEventListener("click", () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); }));
  };
  const initReveal = () => {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = $$(".reveal"); items.forEach(el => el.classList.add("will-reveal"));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    items.forEach(el => observer.observe(el));
  };
  document.addEventListener("click", event => {
    const add = event.target.closest("[data-add-to-cart]");
    if (add) { event.preventDefault(); const input = $("#product-quantity"); addToBag(input ? input.value : 1); }
    const buy = event.target.closest("[data-buy-now]");
    if (buy) { event.preventDefault(); const input = $("#product-quantity"); addToBag(input ? input.value : 1); location.href = "cart.html"; }
    const video = event.target.closest("[data-experience-flame]");
    if (video) { const target = $("#the-object"); if (target) { target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); $("#gallery-main")?.focus({ preventScroll: true }); } }
  });
  const checkout = $("#checkout-button");
  if (checkout) checkout.addEventListener("click", () => announce("Checkout is not configured. No payment has been taken."));
  const minus = $("#qty-minus"), plus = $("#qty-plus"), input = $("#product-quantity"), output = $("#qty-display");
  const updateQuantity = n => { if (!input) return; input.value = safeQty(n); if (output) output.textContent = input.value; };
  minus?.addEventListener("click", () => updateQuantity(Number(input?.value || 1) - 1));
  plus?.addEventListener("click", () => updateQuantity(Number(input?.value || 1) + 1));
  input?.addEventListener("change", () => updateQuantity(input.value));
  renderProduct(); updateCount(); initGallery(); renderCart(); initCartDrawer(); initMenu(); initReveal();
})();