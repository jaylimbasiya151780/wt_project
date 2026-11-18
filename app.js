const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const S = {
  get(k, d) {
    try {
      const v = JSON.parse(localStorage.getItem(k));
      return v == null ? d : v;
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
};

const money = n => '$' + Number(n).toFixed(2);
const Q = k => new URLSearchParams(location.search).get(k);

const ICONS = {
  coffee: `<svg class="svg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  bag: `<svg class="svg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  star: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  lock: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  check: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  calendar: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  edit: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  download: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  truck: `<svg class="svg-ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  alert: `<svg class="svg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  printer: `<svg class="svg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  card: `<svg class="svg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  plusCircle: `<svg class="svg-ico lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  image: `<svg class="svg-ico lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
};

const PHOTO_OPTIONS = [
  ['Artisan Latte Photo', 'assets/artisan-latte.jpg'],
  ['Double Espresso Photo', 'assets/double-espresso.jpg'],
  ['Cappuccino Photo', 'assets/cappuccino.jpg'],
  ['Cold Brew Photo', 'assets/cold-brew.jpg'],
  ['Vanilla Latte Photo', 'assets/vanilla-latte.jpg'],
  ['Pour Over Photo', 'assets/pour-over.jpg'],
  ['Iced Matcha / Latte Photo', 'assets/iced-latte.jpg'],
  ['Almond Croissant Photo', 'assets/almond-croissant.jpg'],
  ['Butter Croissant Photo', 'assets/butter-croissant.jpg']
];

const DEF = [
  { id: 1, cat: 'Coffee', name: 'Artisan Latte', price: 4.50, img: 'assets/artisan-latte.jpg', d: 'Espresso with steamed milk and a light layer of foam.', stock: true },
  { id: 2, cat: 'Coffee', name: 'Double Espresso', price: 3.00, img: 'assets/double-espresso.jpg', d: 'Two shots of our signature house blend espresso.', stock: true },
  { id: 3, cat: 'Coffee', name: 'Cappuccino', price: 4.25, img: 'assets/cappuccino.jpg', d: 'Equal parts espresso, steamed milk, and thick foam.', stock: true },
  { id: 4, cat: 'Coffee', name: 'Cold Brew', price: 4.75, img: 'assets/cold-brew.jpg', d: 'Slow-steeped for 20 hours for a smooth, rich flavor.', stock: true },
  { id: 5, cat: 'Coffee', name: 'Vanilla Latte', price: 5.50, img: 'assets/vanilla-latte.jpg', d: 'Our signature espresso blend combined with velvety steamed milk and house-made Madagascar vanilla syrup. A balanced, slightly sweet classic.', stock: true },
  { id: 6, cat: 'Coffee', name: 'Ethiopia Yirgacheffe Pour Over', price: 6.50, img: 'assets/pour-over.jpg', d: 'Light Roast, Floral Notes, 12oz', stock: true },
  { id: 7, cat: 'Tea', name: 'Iced Matcha Latte', price: 5.00, img: 'assets/iced-latte.jpg', d: 'Ceremonial matcha layered over cold milk and ice.', stock: true },
  { id: 8, cat: 'Tea', name: 'Chai Tea Latte', price: 4.50, img: 'assets/cafe-latte.jpg', d: 'Spiced black tea simmered with steamed milk.', stock: true },
  { id: 9, cat: 'Bakery', name: 'Almond Croissant', price: 4.50, img: 'assets/almond-croissant.jpg', d: 'Freshly baked, Twice-baked', stock: true },
  { id: 10, cat: 'Bakery', name: 'Butter Croissant', price: 3.75, img: 'assets/butter-croissant.jpg', d: 'Classic French pastry, flaky and golden.', stock: false },
  { id: 11, cat: 'Snacks', name: 'Roasted Almond Pack', price: 3.50, img: 'assets/almond-croissant.jpg', d: 'Lightly salted small-batch roasted almonds.', stock: true }
];

const DEF_CART = [
  { key: '6d', name: 'Ethiopia Yirgacheffe Pour Over', desc: 'Light Roast, Floral Notes, 12oz', price: 6.50, qty: 1, img: 'assets/pour-over.jpg' },
  { key: '9d', name: 'Almond Croissant', desc: 'Freshly baked, Twice-baked', price: 4.50, qty: 2, img: 'assets/almond-croissant.jpg' }
];

const menu = () => S.get('menu_v3', DEF);
const cart = () => S.get('cart_v3', DEF_CART);

function toast(m) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = m;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

function badge() {
  const n = cart().reduce((a, i) => a + i.qty, 0);
  const c = $('#cnt');
  if (c) c.textContent = n || '';
}

function add(it) {
  const c = cart();
  const f = c.find(x => x.key == it.key);
  if (f) {
    f.qty++;
  } else {
    c.push({ ...it, qty: 1 });
  }
  S.set('cart_v3', c);
  badge();
  toast(it.name + ' added to order');
}

function csv(name, rows) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([rows.map(r => r.join(',')).join('\n')], { type: 'text/csv' }));
  a.download = name;
  a.click();
}

// Initialize Static Header & Manager Toolbar Events (Headers/Footers remain untouched in DOM)
function initStaticChrome() {
  badge();
  const loc = $('#locLink');
  if (loc) {
    loc.onclick = e => {
      e.preventDefault();
      toast('Main St. Roastery (420 Main St) · Downtown Cafe (118 Market Ave)');
    };
  }
  const bell = $('#bellBtn');
  if (bell) bell.onclick = () => toast('2 low-stock alerts in Inventory');
  const help = $('#helpBtn');
  const sup = $('#supBtn');
  if (help) help.onclick = () => toast('Support: help@artisancoffee.co');
  if (sup) sup.onclick = () => toast('Support: help@artisancoffee.co');
  const acc = $('#accBtn');
  if (acc) acc.onclick = () => toast('Signed in as Floor Manager');
}

const pages = {};

// PAGE 1: MENU
pages.menu = () => {
  const cats = S.get('cats_v3', ['Coffee', 'Tea', 'Bakery', 'Snacks']);
  let cat = Q('cat') || cats[0] || 'Coffee';

  $('#app').innerHTML = `
    <div class="split">
      <aside class="card cats" id="cats"></aside>
      <section>
        <h1 id="ct" style="margin-bottom:18px"></h1>
        <div class="grid" id="g"></div>
      </section>
    </div>
  `;

  const draw = () => {
    $('#ct').textContent = cat;
    $('#cats').innerHTML = '<h2>Categories</h2>' + cats.map(c =>
      `<a href="#" data-c="${c}" class="${c == cat ? 'on' : ''}"><span>${c}</span></a>`
    ).join('');

    $('#g').innerHTML = menu().filter(p => p.cat == cat).map(p => `
      <div class="card item">
        <a class="im-wrap" href="product.html?id=${p.id}">
          <img src="${p.img}" alt="${p.name}" />
        </a>
        <div class="item-body">
          <div class="row">
            <a href="product.html?id=${p.id}">${p.name}</a>
            <span>${money(p.price)}</span>
          </div>
          <p class="mut">${p.d}</p>
          <button class="btn" data-a="${p.id}" ${p.stock ? '' : 'disabled'}>
            ${p.stock ? '+ Add to order' : 'Out of Stock'}
          </button>
        </div>
      </div>
    `).join('');
  };

  draw();
  $('#app').onclick = e => {
    const c = e.target.closest('[data-c]')?.dataset.c;
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (c) {
      e.preventDefault();
      cat = c;
      draw();
    }
    if (a) {
      const p = menu().find(x => x.id == a);
      add({ key: p.id + 'd', name: p.name, desc: p.d, price: p.price, img: p.img });
    }
  };
};

// PAGE 2: PRODUCT DETAIL & CUSTOMIZE
pages.product = () => {
  const p = menu().find(x => x.id == (+Q('id') || 5)) || menu()[0];
  const cof = p.cat == 'Coffee';
  const dr = cof || p.cat == 'Tea';
  const st = { size: 16, milk: 'Whole Milk', pumps: 3, shots: 2 };

  const price = () => p.price +
    (dr ? (st.size == 20 ? 0.75 : st.size == 12 ? -0.50 : 0) + (st.milk != 'Whole Milk' ? 0.75 : 0) : 0) +
    (cof ? Math.max(0, st.pumps - 3) * 0.50 + Math.max(0, st.shots - 2) * 0.75 : 0);

  $('#app').innerHTML = `
    <p class="crumb">
      <a href="menu.html">Menu</a> &rsaquo;
      <a href="menu.html?cat=${p.cat}">${p.cat == 'Coffee' ? 'Espresso Beverages' : p.cat}</a> &rsaquo;
      <b>${p.name}</b>
    </p>
    <div class="two">
      <div>
        <div class="pimg-wrap">
          <img src="${p.img}" alt="${p.name}" />
        </div>
        <h1 style="margin-top:20px">${p.name}</h1>
        <p class="mut" style="margin-top:8px">${p.d}</p>
        <div style="margin-top:14px;display:flex;align-items:baseline;gap:12px">
          <h2>${money(p.price)} <small class="mut" style="font-weight:500">BASE PRICE</small></h2>
          <span class="mut">• 220 Cal • ${st.size} oz</span>
        </div>
      </div>
      <div class="card" id="cu"></div>
    </div>
  `;

  const draw = () => {
    $('#cu').innerHTML = `
      <h2>Customize</h2>
      <hr style="margin:12px 0;border:0;border-top:1px solid #e5e7eb">
      ${dr ? `
        <div class="lbl">SIZE</div>
        <div class="opt">
          ${[12, 16, 20].map(s => `<button data-s="${s}" class="${st.size == s ? 'on' : ''}">${s} oz</button>`).join('')}
        </div>
        <div class="lbl">MILK TYPE</div>
        <div class="opt">
          ${[['Whole Milk', 'Included'], ['Oat Milk', '+$0.75'], ['Almond Milk', '+$0.75']].map(m => `
            <label class="radio-row ${st.milk == m[0] ? 'on' : ''}">
              <span><input type="radio" name="m" value="${m[0]}" ${st.milk == m[0] ? 'checked' : ''}> ${m[0]}</span>
              <span class="mut">${m[1]}</span>
            </label>
          `).join('')}
        </div>
      ` : ''}
      ${cof ? ['pumps', 'shots'].map(k => `
        <div class="lbl">${k == 'pumps' ? 'VANILLA SYRUP PUMPS' : 'ESPRESSO SHOTS'}</div>
        <div class="stepper-card">
          <button class="btn sm o" data-k="${k}" data-v="-1">−</button>
          <div style="text-align:center">
            <b style="display:block;font-size:1.05rem">${st[k]}</b>
            <small class="mut">${k == 'pumps' ? 'Pumps' : 'Shots'}</small>
          </div>
          <button class="btn sm o" data-k="${k}" data-v="1">+</button>
        </div>
      `).join('') : ''}
      <hr style="margin:20px 0;border:0;border-top:1px solid #e5e7eb">
      <div class="row" style="margin-bottom:14px">
        <h2>Total</h2>
        <h2>${money(price())}</h2>
      </div>
      <button class="btn" id="ad" ${p.stock ? '' : 'disabled'}>
        ${p.stock ? `Add to Order ${ICONS.bag}` : 'Out of Stock'}
      </button>
    `;

    $$('[data-s]').forEach(b => b.onclick = () => { st.size = +b.dataset.s; draw(); });
    $$('[name=m]').forEach(r => r.onchange = () => { st.milk = r.value; draw(); });
    $$('[data-k]').forEach(b => b.onclick = () => { st[b.dataset.k] = Math.max(0, st[b.dataset.k] + +b.dataset.v); draw(); });
    $('#ad').onclick = () => {
      add({
        key: p.id + JSON.stringify(st),
        name: p.name,
        desc: dr ? `${st.size}oz, ${st.milk}` + (cof ? `, ${st.pumps} Pumps, ${st.shots} Shots` : '') : p.d,
        price: price(),
        img: p.img
      });
    };
  };
  draw();
};

// PAGE 4: CHECKOUT
pages.checkout = () => {
  let tip = 0.20;

  $('#app').innerHTML = `
    <h1>Checkout</h1>
    <p class="mut">Complete your order for pickup.</p>
    <div class="two">
      <div>
        <div class="card" id="it"></div>
        <div class="card" style="margin-top:20px">
          <h2>Add a Tip</h2>
          <p class="mut">Support our baristas.</p>
          <div class="opt" id="tp" style="margin-top:14px"></div>
        </div>
      </div>
      <div class="card sum" id="sm"></div>
    </div>
  `;

  const draw = () => {
    const c = cart();
    const sub = c.reduce((a, i) => a + i.price * i.qty, 0);
    const rate = S.get('tax', 8.875);
    const tax = sub * rate / 100;
    const tp = sub * tip;
    const tot = sub + tax + tp;
    const pts = Math.floor(sub);

    $('#it').innerHTML = '<h2>Your Order</h2>' + (c.length ? c.map((i, n) => `
      <div class="line">
        <img class="line-thumb" src="${i.img || 'assets/artisan-latte.jpg'}" alt="${i.name}" />
        <div class="grow">
          <b>${i.name}</b>
          <div class="mut">${i.desc || ''}</div>
          <div class="qty">
            <button data-n="${n}" data-d="-1">−</button>
            <span>${i.qty}</span>
            <button data-n="${n}" data-d="1">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <b>${money(i.price * i.qty)}</b>
          ${i.qty > 1 ? `<div class="mut" style="font-size:0.78rem">${money(i.price)} ea</div>` : ''}
        </div>
      </div>
    `).join('') : '<p class="mut">Your order is empty. <a href="menu.html"><u>Browse the menu</u></a></p>');

    $('#tp').innerHTML = [0.15, 0.20, 0.25].map(t =>
      `<button data-t="${t}" class="${tip == t ? 'on' : ''}">${Math.round(t * 100)}%</button>`
    ).join('') + `<button data-t="c" class="${[0.15, 0.20, 0.25].includes(tip) ? '' : 'on'}">Custom</button>`;

    $('#sm').innerHTML = `
      <h2>Order Summary</h2>
      <div class="row"><span>Subtotal</span><span>${money(sub)}</span></div>
      <div class="row"><span>Tax (${rate}%)</span><span>${money(tax)}</span></div>
      <div class="row"><span>Tip (${Math.round(tip * 100)}%)</span><span>${money(tp)}</span></div>
      <hr style="margin:14px 0;border:0;border-top:1px solid #e5e7eb">
      <div class="row" style="margin-bottom:16px"><b>Total</b><span class="big">${money(tot)}</span></div>
      <button class="btn" id="pay" ${c.length ? '' : 'disabled'}>${ICONS.lock} Pay Now</button>
      <div class="card mut" style="margin-top:14px;padding:12px;background:#f9fafb">
        <b style="color:#111827;display:inline-flex;align-items:center;gap:5px">${ICONS.star} Loyalty Rewards</b>
        <p style="margin-top:4px">You will earn <b>${pts} points</b> with this order.</p>
      </div>
    `;

    $$('[data-d]').forEach(b => b.onclick = () => {
      const c = cart();
      const i = c[b.dataset.n];
      i.qty += +b.dataset.d;
      if (i.qty < 1) c.splice(b.dataset.n, 1);
      S.set('cart_v3', c);
      badge();
      draw();
    });

    $$('[data-t]').forEach(b => b.onclick = () => {
      if (b.dataset.t == 'c') {
        const v = parseFloat(prompt('Enter custom tip %', 18));
        if (!isNaN(v) && v >= 0) tip = v / 100;
      } else {
        tip = +b.dataset.t;
      }
      draw();
    });

    const pay = $('#pay');
    if (pay) {
      pay.onclick = () => {
        const o = {
          id: 'AC-8492',
          items: c,
          total: +tot.toFixed(2),
          pts,
          date: 'Nov 17, 2026 • Main St. Roastery',
          t: Date.now()
        };
        S.set('orders', [o, ...S.get('orders', [])]);
        S.set('last', o);
        S.set('pts', S.get('pts', 1450) + pts);
        S.set('cart_v3', []);
        location.href = 'tracking.html';
      };
    }
  };
  draw();
};

// PAGE 3: ORDER TRACKING
pages.tracking = () => {
  const o = S.get('last', {
    id: 'AC-8492',
    items: [
      { name: 'Iced Pour Over', desc: 'Ethiopia Yirgacheffe, Light Roast', qty: 1 },
      { name: 'Almond Croissant', desc: 'Freshly baked', qty: 2 }
    ],
    t: Date.now() - 10000
  });

  $('#app').innerHTML = `
    <div class="card" style="max-width:520px;margin:auto;text-align:center">
      <div class="mut" style="font-size:0.75rem;font-weight:700;letter-spacing:0.06em">ESTIMATED WAIT TIME</div>
      <div class="big" id="w" style="margin:4px 0">4 min</div>
      <div class="mut" style="font-weight:600">Order #${o.id}</div>
      <div class="steps" id="st"></div>
      <p class="mut">Show this code to the barista when your order is ready for pickup.</p>
      <div class="qr-img-box">
        <img src="assets/qr-track-order.png" alt="Scan to Track Order #1234567890" />
      </div>
      <div style="text-align:left;margin-top:20px">
        <h2>Your Order</h2>
        ${o.items.map(i => `
          <div class="line">
            <div class="grow">
              <b>${i.name}</b>
              <div class="mut">${i.desc || ''}</div>
              <small class="mut">Qty: ${i.qty}</small>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="btn o" id="rdy" style="margin-top:16px">Mark as Ready (Demo)</button>
      <a class="btn" href="menu.html" style="margin-top:8px">Order More</a>
    </div>
  `;

  const draw = () => {
    const rd = !!o.ready;
    const s = rd ? 2 : 1;
    $('#w').textContent = rd ? 'Ready!' : '4 min';
    $('#st').innerHTML = ['Received', 'Brewing', 'Ready'].map((n, i) => `
      <div class="${i < s || rd ? 'done' : i == s ? 'now' : ''}">
        <i>${i < s || rd ? ICONS.check : (i + 1)}</i>${n}
      </div>
    `).join('');
  };
  draw();
  $('#rdy').onclick = () => {
    o.ready = 1;
    S.set('last', o);
    draw();
    toast('Your order is ready for pickup!');
  };
};

// PAGE 5: REWARDS
pages.rewards = () => {
  const pts = S.get('pts', 1450);
  const pct = Math.min(100, Math.round(pts / 20));
  const rec = [
    ...S.get('orders', []).slice(0, 2).map(o => ({
      n: o.items.map(i => i.name).join(' & '),
      d: o.date,
      p: o.total,
      x: o.pts
    })),
    { n: 'Pour Over & Croissant', d: 'Nov 14, 2026 • Main St. Roastery', p: 9.50, x: 95 },
    { n: 'Iced Oat Latte', d: 'Nov 10, 2026 • Downtown Cafe', p: 6.00, x: 60 },
    { n: 'Cold Brew (Large)', d: 'Nov 04, 2026 • Main St. Roastery', p: 5.50, x: 55 }
  ].slice(0, 3);

  $('#app').innerHTML = `
    <h1>Welcome Back, Alex.</h1>
    <p class="mut">Here is your current rewards status and recent activity.</p>
    <div class="two">
      <div>
        <div class="card row">
          <div>
            <div class="mut" style="font-size:0.75rem;font-weight:700">CURRENT BALANCE</div>
            <div class="big">${pts.toLocaleString()} <small style="font-size:1rem;font-weight:600">pts</small></div>
            <p class="mut">${pts >= 2000 ? 'You reached Gold Tier!' : `You are ${2000 - pts} points away from Gold Tier.`}</p>
          </div>
          <div class="ring" style="background:conic-gradient(#10b981 ${pct}%, #e5e7eb 0)">
            <div class="ring-inner">
              <span style="color:#111827">${ICONS.star}</span>
              <span>${pct}%</span>
            </div>
          </div>
        </div>
        <h2 style="margin:24px 0 12px">Available Rewards</h2>
        <div class="grid">
          ${[
            ['Free Pastry', 300, 'Redeem for any fresh pastry from our daily selection.'],
            ['50% Off Any Drink', 500, 'Half price on any handcrafted beverage, any size.']
          ].map(r => `
            <div class="card">
              <div class="row"><span class="tag">${r[1]} pts</span></div>
              <h2 style="margin-top:12px">${r[0]}</h2>
              <p class="mut" style="margin-bottom:14px">${r[2]}</p>
              <button class="btn" data-c="${r[1]}" data-n="${r[0]}">Redeem Now</button>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <div class="row"><h2>Recent Orders</h2><a href="#" id="va" class="mut">View All &rarr;</a></div>
        ${rec.map(r => `
          <div class="line">
            <div class="grow">
              <b>${r.n}</b>
              <div class="mut">${r.d}</div>
            </div>
            <div style="text-align:right">
              <b>${money(r.p)}</b>
              <div class="pts">+${r.x} pts</div>
            </div>
          </div>
        `).join('')}
        <a class="btn o" href="menu.html" style="margin-top:14px">Order Again</a>
      </div>
    </div>
  `;

  $$('[data-c]').forEach(b => b.onclick = () => {
    const c = +b.dataset.c;
    const p = S.get('pts', 1450);
    if (p < c) return toast('Not enough points');
    S.set('pts', p - c);
    toast('Redeemed ' + b.dataset.n + '! Applied to account.');
    pages.rewards();
  });
  $('#va').onclick = e => { e.preventDefault(); toast('Showing all recent orders'); };
};

// FOOTER PAGES: PRIVACY POLICY, TERMS OF SERVICE, CONTACT US
pages.privacy = () => {
  $('#app').innerHTML = `
    <div class="card doc-card">
      <h1>Privacy Policy</h1>
      <p class="mut">Last updated: November 2026 • Artisan Coffee Co.</p>

      <h3>1. Information We Collect</h3>
      <p>When you place pickup orders, customize beverages, or participate in the Artisan Coffee Co. Loyalty Rewards program, we collect your name, contact details, order history, and reward point balances to fulfill your orders accurately.</p>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>Process and prepare your mobile and in-store pickup orders.</li>
        <li>Track your loyalty points, tier progress, and reward redemptions.</li>
        <li>Send real-time order status updates and pickup notifications.</li>
      </ul>

      <h3>3. Payment &amp; Data Security</h3>
      <p>All card transactions processed through our Precision Brew POS terminals are encrypted end-to-end. We never store raw payment card numbers on local cafe devices or sell your personal data to third parties.</p>

      <h3>4. Your Privacy Rights</h3>
      <p>You may request a copy of your order history or deletion of your loyalty profile at any time by reaching out via our <a href="contact.html" style="text-decoration:underline;font-weight:600">Contact Us</a> page.</p>
    </div>
  `;
};

pages.terms = () => {
  $('#app').innerHTML = `
    <div class="card doc-card">
      <h1>Terms of Service</h1>
      <p class="mut">Effective Date: January 1, 2026 • Artisan Coffee Co.</p>

      <h3>1. Mobile Pickup Orders</h3>
      <p>Orders placed through the Artisan Coffee Co. storefront are prepared fresh upon confirmation. Estimated wait times (typically 4–6 minutes) are approximations and may vary during peak morning hours.</p>

      <h3>2. Pricing, Customizations &amp; Taxes</h3>
      <p>All menu prices are listed in USD and are subject to applicable local sales tax. Optional beverage customizations—such as alternative milks, extra espresso shots, or additional syrup pumps—are clearly itemized prior to checkout.</p>

      <h3>3. Loyalty Rewards Program</h3>
      <ul>
        <li>Members earn 10 points per $1.00 spent on qualifying food and beverage purchases before tax and tip.</li>
        <li>Points have no cash value and may be redeemed only for listed menu rewards.</li>
      </ul>

      <h3>4. Refunds &amp; Order Adjustments</h3>
      <p>If your drink or pastry does not meet your expectations, please show your pickup QR code to a barista at Main St. Roastery or Downtown Cafe and we will gladly remake it.</p>
    </div>
  `;
};

pages.contact = () => {
  $('#app').innerHTML = `
    <div class="two">
      <div class="card">
        <h1>Contact Us</h1>
        <p class="mut" style="margin-bottom:18px">Have a question about an order, catering, or wholesale beans? Send us a note.</p>

        <form id="contactForm">
          <div class="form-field">
            <label>Full Name</label>
            <input type="text" id="cName" required placeholder="Alex Morgan" />
          </div>
          <div class="form-field">
            <label>Email Address</label>
            <input type="email" id="cEmail" required placeholder="alex@example.com" />
          </div>
          <div class="form-field">
            <label>Topic</label>
            <select id="cTopic">
              <option>Pickup Order Inquiry</option>
              <option>Loyalty Rewards Support</option>
              <option>Catering &amp; Events</option>
              <option>Wholesale Coffee Beans</option>
            </select>
          </div>
          <div class="form-field">
            <label>Message</label>
            <textarea id="cMsg" rows="4" required placeholder="How can our team help you today?"></textarea>
          </div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>

      <div>
        <div class="card" style="margin-bottom:18px">
          <h2>Main St. Roastery (Flagship)</h2>
          <p class="mut">420 Main Street, Suite 100</p>
          <p class="mut" style="margin-top:6px">Mon–Fri: 6:30 AM – 8:00 PM</p>
          <p class="mut">Sat–Sun: 7:00 AM – 9:00 PM</p>
          <p style="margin-top:10px;font-weight:600;font-size:0.9rem">Phone: (555) 234-8910</p>
        </div>
        <div class="card">
          <h2>Downtown Cafe</h2>
          <p class="mut">118 Market Avenue</p>
          <p class="mut" style="margin-top:6px">Daily: 7:00 AM – 7:00 PM</p>
          <p style="margin-top:10px;font-weight:600;font-size:0.9rem">Email: hello@artisancoffee.co</p>
        </div>
      </div>
    </div>
  `;

  $('#contactForm').onsubmit = e => {
    e.preventDefault();
    toast('Message sent! Our cafe team will reply within 24 hours.');
    e.target.reset();
  };
};

// PAGE 6: STAFF MANAGEMENT
const ST = ['Clocked In', 'On Break', 'Clocked Out'];
const SC = ['g', 'y', 'r'];

pages.staff = () => {
  const D = S.get('staff_v3', [
    ['SJ', 'Sarah Jenkins', 'Lead Barista', '07:00 AM - 03:00 PM', 4.9, 0],
    ['MR', 'Michael Ross', 'Floor Manager', '09:00 AM - 06:00 PM', 4.7, 0],
    ['AL', 'Amanda Lee', 'Barista', '12:00 PM - 08:00 PM', 4.5, 1],
    ['DC', 'David Chen', 'Cashier', '03:00 PM - 10:00 PM', 4.2, 2],
    ['PP', 'Priya Patel', 'Barista', '06:00 AM - 02:00 PM', 4.6, 0],
    ['TB', 'Tom Becker', 'Barista', '02:00 PM - 10:00 PM', 4.3, 2]
  ]);
  let pg = 0;
  let q = '';

  $('#app').innerHTML = `
    <div class="head">
      <div>
        <h1>Staff Management</h1>
        <p class="mut">Manage schedules, roles, and performance.</p>
      </div>
      <div>
        <input id="q" placeholder="Search staff..." />
        <button class="btn sm o" id="vs">${ICONS.calendar} View Schedule</button>
      </div>
    </div>
    <div class="tw"><table id="t"></table></div>
    <div class="row" style="margin-top:14px">
      <small id="inf" class="mut"></small>
      <div>
        <button class="btn sm o" id="pv">Prev</button>
        <button class="btn sm o" id="nx">Next</button>
      </div>
    </div>
  `;

  const draw = () => {
    const f = D.map((d, i) => [...d, i]).filter(d => d[1].toLowerCase().includes(q) || d[2].toLowerCase().includes(q));
    const rows = f.slice(pg * 4, pg * 4 + 4);

    $('#t').innerHTML = `
      <tr>
        <th>EMPLOYEE</th>
        <th>ROLE</th>
        <th>SHIFT SCHEDULE</th>
        <th>RATING</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
    ` + rows.map(d => `
      <tr>
        <td><span class="emp-cell"><span class="av-badge">${d[0]}</span>${d[1]}</span></td>
        <td>${d[2]}</td>
        <td>${d[3]}</td>
        <td><span style="color:#f59e0b">${ICONS.star}</span> ${d[4]}</td>
        <td><span class="pill ${SC[d[5]]}">• ${ST[d[5]]}</span></td>
        <td><button class="btn sm o" data-i="${d[6]}" title="Toggle Status">${ICONS.edit}</button></td>
      </tr>
    `).join('');

    $('#inf').textContent = `Showing ${f.length ? pg * 4 + 1 : 0} to ${pg * 4 + rows.length} of ${f.length} entries`;
    $('#pv').disabled = pg == 0;
    $('#nx').disabled = (pg + 1) * 4 >= f.length;

    $$('[data-i]').forEach(b => b.onclick = () => {
      const d = D[b.dataset.i];
      d[5] = (d[5] + 1) % 3;
      S.set('staff_v3', D);
      toast(d[1] + ': ' + ST[d[5]]);
      draw();
    });
  };

  $('#q').oninput = e => { q = e.target.value.toLowerCase(); pg = 0; draw(); };
  $('#pv').onclick = () => { pg--; draw(); };
  $('#nx').onclick = () => { pg++; draw(); };
  $('#vs').onclick = () => alert(D.map(d => `${d[1]} (${d[2]}): ${d[3]}`).join('\n'));
  draw();
};

// PAGE 7: DETAILED ANALYTICS
pages.analytics = () => {
  const H = [35, 55, 88, 100, 74, 48, 38, 42, 60];
  const R = { 7: 0.25, 30: 1, 90: 3 };

  $('#app').innerHTML = `
    <div class="head">
      <div>
        <h1>Detailed Analytics</h1>
        <p class="mut">Monitor key performance indicators and visualize sales trends.</p>
      </div>
      <div>
        <select id="r">
          <option value="7">Last 7 Days</option>
          <option value="30" selected>Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
        <button class="btn sm o" id="ex">${ICONS.download} Export CSV</button>
      </div>
    </div>
    <div class="kpi" id="k"></div>
    <div class="two" style="margin-top:0">
      <div class="card">
        <h2>Hourly Sales Velocity</h2>
        <p class="mut">Volume distributed by hour of day</p>
        <div class="chart" id="ch"></div>
        <div class="axis"><span>6 AM</span><span>9 AM</span><span>12 PM</span><span>3 PM</span><span>6 PM</span><span>9 PM</span></div>
      </div>
      <div>
        <div class="card">
          <h2>Retention</h2>
          <div class="row"><span>Returning</span><b>65%</b></div>
          <div class="bar"><i style="width:65%"></i></div>
          <div class="row"><span>New</span><b>35%</b></div>
          <div class="bar"><i style="width:35%;background:#9ca3af"></i></div>
        </div>
        <div class="card" style="margin-top:16px">
          <h2>Margin by Category</h2>
          <div class="row"><span>Espresso Drinks</span><b>82%</b></div>
          <div class="bar"><i style="width:82%"></i></div>
          <div class="row"><span>Pastries</span><b>65%</b></div>
          <div class="bar"><i style="width:65%"></i></div>
          <div class="row"><span>Merchandise</span><b>45%</b></div>
          <div class="bar"><i style="width:45%"></i></div>
        </div>
      </div>
    </div>
  `;

  const draw = () => {
    const m = R[$('#r').value];
    $('#k').innerHTML = [
      ['TOTAL REVENUE', '$' + Math.round(24592 * m).toLocaleString(), '— No change', 'mut'],
      ['AVG ORDER VALUE', '$18.45', '+5.2% vs prior', 'up'],
      ['TOTAL ORDERS', Math.round(1332 * m).toLocaleString(), '-2.1% vs prior', 'dn'],
      ['NET PROFIT', '$' + Math.round(8210 * m).toLocaleString(), '+12.5% vs prior', 'up']
    ].map(k => `
      <div class="card">
        <div class="mut" style="font-size:0.75rem;font-weight:700">${k[0]}</div>
        <b>${k[1]}</b>
        <small class="${k[3]}">${k[2]}</small>
      </div>
    `).join('');
    $('#ch').innerHTML = H.map(h => `<div class="${h == 100 ? 'pk' : ''}" style="height:${h}%"></div>`).join('');
  };

  $('#r').onchange = draw;
  $('#ex').onclick = () => {
    const m = R[$('#r').value];
    csv('analytics.csv', [
      ['Metric', 'Value'],
      ['Revenue', Math.round(24592 * m)],
      ['Orders', Math.round(1332 * m)],
      ['Net Profit', Math.round(8210 * m)],
      ['Avg Order Value', 18.45]
    ]);
  };
  draw();
};

// PAGE 8: INVENTORY & SUPPLIERS
pages.inventory = () => {
  const D = S.get('inv_v3', {
    'Coffee Beans': [
      ['House Blend Espresso', 42, 50, 'kg'],
      ['Single Origin Ethiopia', 4, 30, 'kg'],
      ['Decaf Colombian', 15, 20, 'kg']
    ],
    'Milks & Dairy': [
      ['Whole Milk', 24, 40, 'Gal'],
      ['Oat Milk (Barista)', 2, 25, 'Gal'],
      ['Almond Milk', 12, 20, 'Gal'],
      ['Skim Milk', 18, 20, 'Gal']
    ],
    'Syrups': [
      ['Vanilla Syrup', 8, 12, 'Btl'],
      ['Caramel Sauce', 3, 10, 'Btl'],
      ['Hazelnut Syrup', 6, 8, 'Btl']
    ]
  });
  const low = i => i[1] / i[2] < 0.2;

  $('#app').innerHTML = `
    <div class="head">
      <div>
        <h1>Inventory &amp; Suppliers</h1>
        <p class="mut">Manage stock levels and track recent deliveries.</p>
      </div>
      <div>
        <button class="btn sm o" id="ex">${ICONS.download} Export</button>
        <button class="btn sm" id="ro">${ICONS.truck} Reorder Stock</button>
      </div>
    </div>
    <div id="al"></div>
    <div class="g3" id="g"></div>
    <div class="card">
      <h2>Recent Deliveries</h2>
      <div class="tw">
        <table>
          <tr><th>DATE / TIME</th><th>SUPPLIER</th><th>MANIFEST SUMMARY</th><th>STATUS</th></tr>
          <tr><td>Nov 16, 2026 08:30 AM</td><td>Apex Coffee Roasters</td><td>20kg House Blend, 5kg Decaf</td><td><span class="pill g">• Received</span></td></tr>
          <tr><td>Nov 14, 2026 06:15 AM</td><td>Valley Dairy Co.</td><td>10 Gal Whole, 5 Gal Almond</td><td><span class="pill g">• Received</span></td></tr>
          <tr><td>Nov 11, 2026 11:00 AM</td><td>Sweet Provisions Inc.</td><td>Restock: Vanilla, Caramel, Cups</td><td><span class="pill">• Reconciled</span></td></tr>
        </table>
      </div>
    </div>
  `;

  const draw = () => {
    const L = Object.values(D).flat().filter(low);
    $('#al').innerHTML = L.length ? `
      <div class="alert">
        <div class="row">
          <b style="display:inline-flex;align-items:center;gap:8px">${ICONS.alert} Low Stock Alerts</b>
          <a id="vd">View Details</a>
        </div>
        <p style="margin-top:4px;font-size:0.9rem">${L.length} items are critically low and require immediate reordering to prevent service disruption.</p>
      </div>
    ` : '';

    $('#g').innerHTML = Object.entries(D).map(([c, it]) => `
      <div class="card">
        <div class="row" style="margin-bottom:12px"><h2>${c}</h2><span class="tag">${it.length} Items</span></div>
        ${it.map(i => `
          <div class="row">
            <small style="font-weight:600">${i[0]}${low(i) ? ' •' : ''}</small>
            <small class="${low(i) ? 'dn' : 'mut'}">${i[1]} ${i[3]} / ${i[2]} ${i[3]}</small>
          </div>
          <div class="bar"><i class="${low(i) ? 'lo' : ''}" style="width:${(i[1] / i[2]) * 100}%"></i></div>
        `).join('')}
      </div>
    `).join('');

    const v = $('#vd');
    if (v) v.onclick = () => alert('Low Stock Items:\n' + L.map(i => `${i[0]}: ${i[1]} / ${i[2]} ${i[3]}`).join('\n'));
  };

  $('#ro').onclick = () => {
    const L = Object.values(D).flat().filter(low);
    if (!L.length) return toast('All stock levels are healthy');
    L.forEach(i => i[1] = i[2]);
    S.set('inv_v3', D);
    toast('Reorder placed — stock replenished');
    draw();
  };

  $('#ex').onclick = () => csv('inventory.csv', [
    ['Category', 'Item', 'Stock', 'Max', 'Unit'],
    ...Object.entries(D).flatMap(([c, it]) => it.map(i => [c, i[0], i[1], i[2], i[3]]))
  ]);
  draw();
};

// PAGE 9: MENU EDITOR (FULL WORKING CRUD: CREATE, READ, UPDATE, DELETE)
pages.editor = () => {
  let M = menu();
  let cats = S.get('cats_v3', ['Coffee', 'Tea', 'Bakery', 'Snacks']);
  let cat = cats[0] || 'Coffee';
  let q = '';

  $('#app').innerHTML = `
    <div class="head">
      <div>
        <h1>Menu Editor</h1>
        <p class="mut">Create, update, or remove menu items. Changes sync with the Customer Menu.</p>
      </div>
      <div>
        <input id="q" placeholder="Search menu items..." />
        <button class="btn sm" id="pb">Publish Changes</button>
      </div>
    </div>
    <div class="split">
      <div class="card cats" id="c"></div>
      <div class="grid" id="g"></div>
    </div>
    <div id="crudModalRoot"></div>
  `;

  const saveAll = () => {
    S.set('menu_v3', M);
    S.set('cats_v3', cats);
  };

  const openItemModal = (existing = null) => {
    const isEdit = !!existing;
    const item = existing || {
      id: Date.now(),
      cat: cat,
      name: '',
      price: 4.50,
      img: 'assets/artisan-latte.jpg',
      d: '',
      stock: true
    };

    $('#crudModalRoot').innerHTML = `
      <div class="modal-bg" id="modalBg">
        <div class="modal-card">
          <div class="row" style="margin-bottom:14px">
            <h2>${isEdit ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
            <button type="button" class="btn sm o" id="closeModalBtn">✕</button>
          </div>
          <form id="crudItemForm">
            <div class="form-field">
              <label>Item Name</label>
              <input type="text" id="mName" required value="${item.name.replace(/"/g, '&quot;')}" placeholder="e.g., Honey Cinnamon Latte" />
            </div>
            <div class="row" style="gap:12px">
              <div class="form-field" style="flex:1">
                <label>Category</label>
                <select id="mCat">
                  ${cats.map(c => `<option value="${c}" ${c == item.cat ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
              </div>
              <div class="form-field" style="flex:1">
                <label>Price ($)</label>
                <input type="number" id="mPrice" step="0.25" min="0.50" required value="${Number(item.price).toFixed(2)}" />
              </div>
            </div>
            <div class="form-field">
              <label>Item Photo</label>
              <select id="mImg">
                ${PHOTO_OPTIONS.map(opt => `<option value="${opt[1]}" ${opt[1] == item.img ? 'selected' : ''}>${opt[0]}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label>Description</label>
              <textarea id="mDesc" rows="2" required placeholder="Short tasting notes...">${item.d}</textarea>
            </div>
            <div class="form-field">
              <label style="display:inline-flex;align-items:center;gap:8px;cursor:pointer">
                <input type="checkbox" id="mStock" style="width:auto" ${item.stock ? 'checked' : ''} /> Available (In Stock)
              </label>
            </div>
            <div class="row" style="margin-top:16px">
              <button type="button" class="btn o" id="cancelModalBtn">Cancel</button>
              <button type="submit" class="btn">${isEdit ? 'Update Item' : 'Create Item'}</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const close = () => { $('#crudModalRoot').innerHTML = ''; };
    $('#closeModalBtn').onclick = close;
    $('#cancelModalBtn').onclick = close;
    $('#modalBg').onclick = e => { if (e.target.id === 'modalBg') close(); };

    $('#crudItemForm').onsubmit = e => {
      e.preventDefault();
      const updated = {
        id: item.id,
        name: $('#mName').value.trim(),
        cat: $('#mCat').value,
        price: parseFloat($('#mPrice').value) || 0,
        img: $('#mImg').value,
        d: $('#mDesc').value.trim(),
        stock: $('#mStock').checked
      };

      if (isEdit) {
        const idx = M.findIndex(x => x.id == item.id);
        if (idx !== -1) M[idx] = updated;
        toast(`Updated "${updated.name}"`);
      } else {
        M.unshift(updated);
        toast(`Created "${updated.name}"`);
      }
      cat = updated.cat;
      saveAll();
      close();
      draw();
    };
  };

  const draw = () => {
    $('#c').innerHTML = '<h2>CATEGORIES</h2>' + cats.map(c => `
      <a href="#" data-c="${c}" class="${c == cat ? 'on' : ''}">
        <span>${c}</span>
        <span class="tag">${M.filter(p => p.cat == c).length}</span>
      </a>
    `).join('') + '<a href="#" id="nc" style="margin-top:8px;font-weight:600">+ New Category</a>';

    $('#g').innerHTML = `
      <div class="dash" id="an">
        <div>
          <div style="margin-bottom:8px;color:#4b5563">${ICONS.image}</div>
          <b>+ Add New Item</b>
          <p class="mut">Select photo and set details</p>
        </div>
      </div>
    ` + M.filter(p => p.cat == cat && p.name.toLowerCase().includes(q)).map(p => `
      <div class="card item ed" style="${p.stock ? '' : 'opacity:0.75'}">
        <div class="im-wrap"><img src="${p.img}" alt="${p.name}" /></div>
        <div class="item-body">
          <div class="row" style="margin-bottom:8px">
            <span class="pill ${p.stock ? 'g' : 'r'}">• ${p.stock ? 'In Stock' : 'Out of Stock'}</span>
            <div style="display:inline-flex;gap:4px">
              <button class="btn sm o" data-edit="${p.id}" title="Edit Item">${ICONS.edit}</button>
              <button class="btn sm danger" data-del="${p.id}" title="Delete Item">${ICONS.trash}</button>
            </div>
          </div>
          <b>${p.name}</b>
          <small class="mut" style="margin:4px 0 12px;display:block">${p.d}</small>
          <div class="row">
            <div>$ <input class="ip" type="number" step="0.25" value="${Number(p.price).toFixed(2)}" data-p="${p.id}" /></div>
            <label style="font-size:0.8rem;display:inline-flex;align-items:center;gap:4px;cursor:pointer">
              <input type="checkbox" data-s="${p.id}" ${p.stock ? 'checked' : ''} /> Stock
            </label>
          </div>
        </div>
      </div>
    `).join('');

    $$('[data-c]').forEach(a => a.onclick = e => { e.preventDefault(); cat = a.dataset.c; draw(); });
    $$('[data-p]').forEach(i => i.onchange = () => {
      const target = M.find(p => p.id == i.dataset.p);
      if (target) {
        target.price = parseFloat(i.value) || 0;
        saveAll();
        toast(`Updated price for ${target.name}`);
      }
    });
    $$('[data-s]').forEach(i => i.onchange = () => {
      const target = M.find(p => p.id == i.dataset.s);
      if (target) {
        target.stock = i.checked;
        saveAll();
        toast(`${target.name} marked ${target.stock ? 'In Stock' : 'Out of Stock'}`);
        draw();
      }
    });
    $$('[data-edit]').forEach(b => b.onclick = () => {
      const target = M.find(p => p.id == b.dataset.edit);
      if (target) openItemModal(target);
    });
    $$('[data-del]').forEach(b => b.onclick = () => {
      const target = M.find(p => p.id == b.dataset.del);
      if (target && confirm(`Delete "${target.name}" from menu?`)) {
        M = M.filter(p => p.id != b.dataset.del);
        saveAll();
        toast(`Deleted "${target.name}"`);
        draw();
      }
    });
    $('#nc').onclick = e => {
      e.preventDefault();
      const n = prompt('New Category Name');
      if (n && n.trim() && !cats.includes(n.trim())) {
        cats.push(n.trim());
        cat = n.trim();
        saveAll();
        toast(`Category "${cat}" added`);
        draw();
      }
    };
    $('#an').onclick = () => openItemModal(null);
  };

  $('#q').oninput = e => { q = e.target.value.toLowerCase(); draw(); };
  $('#pb').onclick = () => {
    saveAll();
    toast('All changes published to Customer Menu!');
  };
  draw();
};

// PAGE 10: SETTINGS (SECURITY REMOVED — ONLY HARDWARE, TAX RATES & FEES, BRANDING)
pages.settings = () => {
  let tab = 'Hardware Integration';
  const T = ['Hardware Integration', 'Tax Rates & Fees', 'Branding'];
  const dev = S.get('dev_v3', [
    { n: 'Receipt Printer', m: 'Epson TM-m30II', on: true, ico: ICONS.printer },
    { n: 'Card Terminal', m: 'Square Terminal 1', on: false, ico: ICONS.card }
  ]);

  $('#app').innerHTML = `
    <h1>Settings</h1>
    <div class="split" style="margin-top:16px">
      <div class="tabs" id="tb"></div>
      <div class="card" id="pn"></div>
    </div>
  `;

  const draw = () => {
    $('#tb').innerHTML = T.map(t => `<a data-t="${t}" class="${t == tab ? 'on' : ''}">${t}</a>`).join('');
    let h = `<h2>${tab}</h2><hr style="margin-bottom:16px;border:0;border-top:1px solid #e5e7eb">`;

    if (tab == T[0]) {
      h += `
        <p class="mut" style="margin-bottom:16px">Manage connected peripherals, printers, and payment terminals.</p>
        <div class="grid">
          ${dev.map((d, i) => `
            <div class="card">
              <div class="row">
                <b style="display:inline-flex;align-items:center;gap:8px">${d.ico || ICONS.printer} ${d.n}</b>
                <span class="pill ${d.on ? 'g' : 'r'}">• ${d.on ? 'Online' : 'Offline'}</span>
              </div>
              <small class="mut" style="display:block;margin-top:4px">${d.m}</small>
              <div class="opt" style="margin:14px 0 0">
                ${d.on
                  ? `<button class="btn o" data-tp="${i}">Test Print</button><button class="btn o" data-cf="${i}">Configure</button>`
                  : `<button class="btn" data-rc="${i}">Reconnect</button>`
                }
              </div>
            </div>
          `).join('')}
        </div>
        <div class="dash" id="ad" style="margin-top:18px;min-height:110px">
          <div>
            ${ICONS.plusCircle}
            <b style="display:block;margin-top:4px">Add New Device</b>
          </div>
        </div>
      `;
    }
    if (tab == T[1]) {
      h += `<div class="lbl">SALES TAX RATE (%)</div><input class="ip" id="tx" type="number" step="0.001" value="${S.get('tax', 8.875)}" /><br><br><button class="btn sm" id="sv">Save</button>`;
    }
    if (tab == T[2]) {
      h += `<div class="lbl">BUSINESS NAME</div><input class="ip" id="bn" value="${S.get('bn', 'Artisan Coffee Co.')}" /><br><br><button class="btn sm" id="sv">Save</button>`;
    }

    $('#pn').innerHTML = h;
    $$('[data-t]').forEach(a => a.onclick = () => { tab = a.dataset.t; draw(); });
    $$('[data-tp]').forEach(b => b.onclick = () => toast('Test receipt sent to Epson TM-m30II'));
    $$('[data-cf]').forEach(b => b.onclick = () => {
      const m = prompt('Device model', dev[b.dataset.cf].m);
      if (m) { dev[b.dataset.cf].m = m; S.set('dev_v3', dev); draw(); }
    });
    $$('[data-rc]').forEach(b => b.onclick = () => {
      dev[b.dataset.rc].on = true;
      S.set('dev_v3', dev);
      toast('Square Terminal 1 reconnected and Online');
      draw();
    });
    const ad = $('#ad');
    if (ad) ad.onclick = () => {
      const n = prompt('Device name', 'Kitchen Display');
      if (n) { dev.push({ n, m: 'iPad Station 2', on: true, ico: ICONS.card }); S.set('dev_v3', dev); draw(); }
    };
    const sv = $('#sv');
    if (sv) sv.onclick = () => {
      if (tab == T[1]) S.set('tax', +$('#tx').value || 0);
      if (tab == T[2]) S.set('bn', $('#bn').value);
      toast('Settings saved');
    };
  };
  draw();
};

initStaticChrome();
pages[document.body.dataset.page]();
