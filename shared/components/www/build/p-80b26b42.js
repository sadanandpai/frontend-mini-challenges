const t = 'fmc-ce';
let n;
let e;
let s = false;
let o = false;
const l = (t, n = '') => {
  {
    return () => {};
  }
};
const c = (t, n) => {
  {
    return () => {};
  }
};
const i = '{visibility:hidden}.hydrated{visibility:inherit}';
const f = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
const r = {};
const u = 'http://www.w3.org/2000/svg';
const a = 'http://www.w3.org/1999/xhtml';
const d = (t) => t != null;
const h = (t) => {
  t = typeof t;
  return t === 'object' || t === 'function';
};
function y(t) {
  var n, e, s;
  return (s =
    (e =
      (n = t.head) === null || n === void 0
        ? void 0
        : n.querySelector('meta[name="csp-nonce"]')) === null || e === void 0
      ? void 0
      : e.getAttribute('content')) !== null && s !== void 0
    ? s
    : undefined;
}
const p = (t, n, ...e) => {
  let s = null;
  let o = false;
  let l = false;
  const c = [];
  const i = (n) => {
    for (let e = 0; e < n.length; e++) {
      s = n[e];
      if (Array.isArray(s)) {
        i(s);
      } else if (s != null && typeof s !== 'boolean') {
        if ((o = typeof t !== 'function' && !h(s))) {
          s = String(s);
        }
        if (o && l) {
          c[c.length - 1].t += s;
        } else {
          c.push(o ? v(null, s) : s);
        }
        l = o;
      }
    }
  };
  i(e);
  if (n) {
    {
      const t = n.className || n.class;
      if (t) {
        n.class =
          typeof t !== 'object'
            ? t
            : Object.keys(t)
                .filter((n) => t[n])
                .join(' ');
      }
    }
  }
  const f = v(t, null);
  f.o = n;
  if (c.length > 0) {
    f.l = c;
  }
  return f;
};
const v = (t, n) => {
  const e = { i: 0, u: t, t: n, h: null, l: null };
  {
    e.o = null;
  }
  return e;
};
const m = {};
const $ = (t) => t && t.u === m;
const w = (t, n) => {
  if (t != null && !h(t)) {
    if (n & 1) {
      return String(t);
    }
    return t;
  }
  return t;
};
const b = (t) => ct(t).$hostElement$;
const g = (t, n, e) => {
  const s = vt.ce(n, e);
  t.dispatchEvent(s);
  return s;
};
const S = new WeakMap();
const j = (t, n, e) => {
  let s = ht.get(t);
  if ($t && e) {
    s = s || new CSSStyleSheet();
    if (typeof s === 'string') {
      s = n;
    } else {
      s.replaceSync(n);
    }
  } else {
    s = n;
  }
  ht.set(t, s);
};
const O = (t, n, e) => {
  var s;
  const o = M(n);
  const l = ht.get(o);
  t = t.nodeType === 11 ? t : pt;
  if (l) {
    if (typeof l === 'string') {
      t = t.head || t;
      let e = S.get(t);
      let c;
      if (!e) {
        S.set(t, (e = new Set()));
      }
      if (!e.has(o)) {
        {
          c = pt.createElement('style');
          c.innerHTML = l;
          const n = (s = vt.p) !== null && s !== void 0 ? s : y(pt);
          if (n != null) {
            c.setAttribute('nonce', n);
          }
          t.insertBefore(c, t.querySelector('link'));
        }
        if (n.i & 4) {
          c.innerHTML += f;
        }
        if (e) {
          e.add(o);
        }
      }
    } else if (!t.adoptedStyleSheets.includes(l)) {
      t.adoptedStyleSheets = [...t.adoptedStyleSheets, l];
    }
  }
  return o;
};
const k = (t) => {
  const n = t.v;
  const e = t.$hostElement$;
  const s = n.i;
  const o = l('attachStyles', n.m);
  const c = O(e.shadowRoot ? e.shadowRoot : e.getRootNode(), n);
  if (s & 10) {
    e['s-sc'] = c;
    e.classList.add(c + '-h');
  }
  o();
};
const M = (t, n) => 'sc-' + t.m;
const C = (t, n, e, s, o, l) => {
  if (e !== s) {
    let c = rt(t, n);
    n.toLowerCase();
    if (n === 'class') {
      const n = t.classList;
      const o = x(e);
      const l = x(s);
      n.remove(...o.filter((t) => t && !l.includes(t)));
      n.add(...l.filter((t) => t && !o.includes(t)));
    } else {
      const i = h(s);
      if ((c || (i && s !== null)) && !o) {
        try {
          if (!t.tagName.includes('-')) {
            const o = s == null ? '' : s;
            if (n === 'list') {
              c = false;
            } else if (e == null || t[n] != o) {
              t[n] = o;
            }
          } else {
            t[n] = s;
          }
        } catch (t) {}
      }
      if (s == null || s === false) {
        if (s !== false || t.getAttribute(n) === '') {
          {
            t.removeAttribute(n);
          }
        }
      } else if ((!c || l & 4 || o) && !i) {
        s = s === true ? '' : s;
        {
          t.setAttribute(n, s);
        }
      }
    }
  }
};
const P = /\s/;
const x = (t) => (!t ? [] : t.split(P));
const U = (t, n, e, s) => {
  const o = n.h.nodeType === 11 && n.h.host ? n.h.host : n.h;
  const l = (t && t.o) || r;
  const c = n.o || r;
  {
    for (s in l) {
      if (!(s in c)) {
        C(o, s, l[s], undefined, e, n.i);
      }
    }
  }
  for (s in c) {
    C(o, s, l[s], c[s], e, n.i);
  }
};
const A = (t, o, l, c) => {
  const i = o.l[l];
  let f = 0;
  let r;
  let h;
  if (i.t !== null) {
    r = i.h = pt.createTextNode(i.t);
  } else {
    if (!s) {
      s = i.u === 'svg';
    }
    r = i.h = pt.createElementNS(s ? u : a, i.u);
    if (s && i.u === 'foreignObject') {
      s = false;
    }
    {
      U(null, i, s);
    }
    if (d(n) && r['s-si'] !== n) {
      r.classList.add((r['s-si'] = n));
    }
    if (i.l) {
      for (f = 0; f < i.l.length; ++f) {
        h = A(t, i, f);
        if (h) {
          r.appendChild(h);
        }
      }
    }
    {
      if (i.u === 'svg') {
        s = false;
      } else if (r.tagName === 'foreignObject') {
        s = true;
      }
    }
  }
  r['s-hn'] = e;
  return r;
};
const E = (t, n, s, o, l, c) => {
  let i = t;
  let f;
  if (i.shadowRoot && i.tagName === e) {
    i = i.shadowRoot;
  }
  for (; l <= c; ++l) {
    if (o[l]) {
      f = A(null, s, l);
      if (f) {
        o[l].h = f;
        i.insertBefore(f, n);
      }
    }
  }
};
const L = (t, n, e) => {
  for (let s = n; s <= e; ++s) {
    const n = t[s];
    if (n) {
      const t = n.h;
      if (t) {
        t.remove();
      }
    }
  }
};
const N = (t, n, e, s, o = false) => {
  let l = 0;
  let c = 0;
  let i = n.length - 1;
  let f = n[0];
  let r = n[i];
  let u = s.length - 1;
  let a = s[0];
  let d = s[u];
  let h;
  while (l <= i && c <= u) {
    if (f == null) {
      f = n[++l];
    } else if (r == null) {
      r = n[--i];
    } else if (a == null) {
      a = s[++c];
    } else if (d == null) {
      d = s[--u];
    } else if (T(f, a, o)) {
      W(f, a, o);
      f = n[++l];
      a = s[++c];
    } else if (T(r, d, o)) {
      W(r, d, o);
      r = n[--i];
      d = s[--u];
    } else if (T(f, d, o)) {
      W(f, d, o);
      t.insertBefore(f.h, r.h.nextSibling);
      f = n[++l];
      d = s[--u];
    } else if (T(r, a, o)) {
      W(r, a, o);
      t.insertBefore(r.h, f.h);
      r = n[--i];
      a = s[++c];
    } else {
      {
        h = A(n && n[c], e, c);
        a = s[++c];
      }
      if (h) {
        {
          f.h.parentNode.insertBefore(h, f.h);
        }
      }
    }
  }
  if (l > i) {
    E(t, s[u + 1] == null ? null : s[u + 1].h, e, s, c, u);
  } else if (c > u) {
    L(n, l, i);
  }
};
const T = (t, n, e = false) => {
  if (t.u === n.u) {
    return true;
  }
  return false;
};
const W = (t, n, e = false) => {
  const o = (n.h = t.h);
  const l = t.l;
  const c = n.l;
  const i = n.u;
  const f = n.t;
  if (f === null) {
    {
      s = i === 'svg' ? true : i === 'foreignObject' ? false : s;
    }
    {
      if (i === 'slot');
      else {
        U(t, n, s);
      }
    }
    if (l !== null && c !== null) {
      N(o, l, n, c, e);
    } else if (c !== null) {
      if (t.t !== null) {
        o.textContent = '';
      }
      E(o, null, n, c, 0, c.length - 1);
    } else if (l !== null) {
      L(l, 0, l.length - 1);
    }
    if (s && i === 'svg') {
      s = false;
    }
  } else if (t.t !== f) {
    o.data = f;
  }
};
const R = (t, s, o = false) => {
  const l = t.$hostElement$;
  const c = t.$ || v(null, null);
  const i = $(s) ? s : p(null, null, s);
  e = l.tagName;
  if (o && i.o) {
    for (const t of Object.keys(i.o)) {
      if (l.hasAttribute(t) && !['key', 'ref', 'style', 'class'].includes(t)) {
        i.o[t] = l[t];
      }
    }
  }
  i.u = null;
  i.i |= 4;
  t.$ = i;
  i.h = c.h = l.shadowRoot || l;
  {
    n = l['s-sc'];
  }
  W(c, i, o);
};
const q = (t, n) => {
  if (n && !t.S && n['s-p']) {
    n['s-p'].push(new Promise((n) => (t.S = n)));
  }
};
const F = (t, n) => {
  {
    t.i |= 16;
  }
  if (t.i & 4) {
    t.i |= 512;
    return;
  }
  q(t, t.j);
  const e = () => H(t, n);
  return kt(e);
};
const H = (t, n) => {
  const e = l('scheduleUpdate', t.v.m);
  const s = t.O;
  let o;
  if (n) {
    {
      o = G(s, 'componentWillLoad');
    }
  }
  e();
  return I(o, () => _(t, s, n));
};
const I = (t, n) => (V(t) ? t.then(n) : n());
const V = (t) => t instanceof Promise || (t && t.then && typeof t.then === 'function');
const _ = async (t, n, e) => {
  var s;
  const o = t.$hostElement$;
  const c = l('update', t.v.m);
  const i = o['s-rc'];
  if (e) {
    k(t);
  }
  const f = l('render', t.v.m);
  {
    z(t, n, o, e);
  }
  if (i) {
    i.map((t) => t());
    o['s-rc'] = undefined;
  }
  f();
  c();
  {
    const n = (s = o['s-p']) !== null && s !== void 0 ? s : [];
    const e = () => B(t);
    if (n.length === 0) {
      e();
    } else {
      Promise.all(n).then(e);
      t.i |= 4;
      n.length = 0;
    }
  }
};
const z = (t, n, e, s) => {
  try {
    n = n.render();
    {
      t.i &= ~16;
    }
    {
      t.i |= 2;
    }
    {
      {
        {
          R(t, n, s);
        }
      }
    }
  } catch (n) {
    ut(n, t.$hostElement$);
  }
  return null;
};
const B = (t) => {
  const n = t.v.m;
  const e = t.$hostElement$;
  const s = l('postUpdate', n);
  const o = t.j;
  if (!(t.i & 64)) {
    t.i |= 64;
    {
      J(e);
    }
    s();
    {
      t.k(e);
      if (!o) {
        D();
      }
    }
  } else {
    s();
  }
  {
    if (t.S) {
      t.S();
      t.S = undefined;
    }
    if (t.i & 512) {
      Ot(() => F(t, false));
    }
    t.i &= ~(4 | 512);
  }
};
const D = (n) => {
  {
    J(pt.documentElement);
  }
  Ot(() => g(yt, 'appload', { detail: { namespace: t } }));
};
const G = (t, n, e) => {
  if (t && t[n]) {
    try {
      return t[n](e);
    } catch (t) {
      ut(t);
    }
  }
  return undefined;
};
const J = (t) => t.classList.add('hydrated');
const K = (t, n) => ct(t).M.get(n);
const Q = (t, n, e, s) => {
  const o = ct(t);
  const l = o.M.get(n);
  const c = o.i;
  const i = o.O;
  e = w(e, s.C[n][0]);
  const f = Number.isNaN(l) && Number.isNaN(e);
  const r = e !== l && !f;
  if ((!(c & 8) || l === undefined) && r) {
    o.M.set(n, e);
    if (i) {
      if ((c & (2 | 16)) === 2) {
        F(o, false);
      }
    }
  }
};
const X = (t, n, e) => {
  var s;
  const o = t.prototype;
  if (n.C) {
    const l = Object.entries(n.C);
    l.map(([t, [s]]) => {
      if (s & 31 || (e & 2 && s & 32)) {
        Object.defineProperty(o, t, {
          get() {
            return K(this, t);
          },
          set(e) {
            Q(this, t, e, n);
          },
          configurable: true,
          enumerable: true,
        });
      }
    });
    if (e & 1) {
      const e = new Map();
      o.attributeChangedCallback = function (t, s, l) {
        vt.jmp(() => {
          var c;
          const i = e.get(t);
          if (this.hasOwnProperty(i)) {
            l = this[i];
            delete this[i];
          } else if (o.hasOwnProperty(i) && typeof this[i] === 'number' && this[i] == l) {
            return;
          } else if (i == null) {
            const e = ct(this);
            const o = e === null || e === void 0 ? void 0 : e.i;
            if (o && !(o & 8) && o & 128 && l !== s) {
              const o = e.O;
              const i = (c = n.P) === null || c === void 0 ? void 0 : c[t];
              i === null || i === void 0
                ? void 0
                : i.forEach((n) => {
                    if (o[n] != null) {
                      o[n].call(o, l, s, t);
                    }
                  });
            }
            return;
          }
          this[i] = l === null && typeof this[i] === 'boolean' ? false : l;
        });
      };
      t.observedAttributes = Array.from(
        new Set([
          ...Object.keys((s = n.P) !== null && s !== void 0 ? s : {}),
          ...l
            .filter(([t, n]) => n[0] & 15)
            .map(([t, n]) => {
              const s = n[1] || t;
              e.set(s, t);
              return s;
            }),
        ])
      );
    }
  }
  return t;
};
const Y = async (t, n, e, s) => {
  let o;
  if ((n.i & 32) === 0) {
    n.i |= 32;
    {
      o = dt(e);
      if (o.then) {
        const t = c();
        o = await o;
        t();
      }
      if (!o.isProxied) {
        X(o, e, 2);
        o.isProxied = true;
      }
      const t = l('createInstance', e.m);
      {
        n.i |= 8;
      }
      try {
        new o(n);
      } catch (t) {
        ut(t);
      }
      {
        n.i &= ~8;
      }
      t();
    }
    if (o.style) {
      let t = o.style;
      const n = M(e);
      if (!ht.has(n)) {
        const s = l('registerStyles', e.m);
        j(n, t, !!(e.i & 1));
        s();
      }
    }
  }
  const i = n.j;
  const f = () => F(n, true);
  if (i && i['s-rc']) {
    i['s-rc'].push(f);
  } else {
    f();
  }
};
const Z = (t) => {};
const tt = (t) => {
  if ((vt.i & 1) === 0) {
    const n = ct(t);
    const e = n.v;
    const s = l('connectedCallback', e.m);
    if (!(n.i & 1)) {
      n.i |= 1;
      {
        let e = t;
        while ((e = e.parentNode || e.host)) {
          if (e['s-p']) {
            q(n, (n.j = e));
            break;
          }
        }
      }
      if (e.C) {
        Object.entries(e.C).map(([n, [e]]) => {
          if (e & 31 && t.hasOwnProperty(n)) {
            const e = t[n];
            delete t[n];
            t[n] = e;
          }
        });
      }
      {
        Y(t, n, e);
      }
    } else {
      if (n === null || n === void 0 ? void 0 : n.O);
      else if (n === null || n === void 0 ? void 0 : n.U) {
        n.U.then(() => Z());
      }
    }
    s();
  }
};
const nt = (t) => {};
const et = async (t) => {
  if ((vt.i & 1) === 0) {
    const n = ct(t);
    if (n === null || n === void 0 ? void 0 : n.O);
    else if (n === null || n === void 0 ? void 0 : n.U) {
      n.U.then(() => nt());
    }
  }
};
const st = (t, n = {}) => {
  var e;
  const s = l();
  const o = [];
  const c = n.exclude || [];
  const r = yt.customElements;
  const u = pt.head;
  const a = u.querySelector('meta[charset]');
  const d = pt.createElement('style');
  const h = [];
  let p;
  let v = true;
  Object.assign(vt, n);
  vt.A = new URL(n.resourcesUrl || './', pt.baseURI).href;
  let m = false;
  t.map((t) => {
    t[1].map((n) => {
      const e = { i: n[0], m: n[1], C: n[2], L: n[3] };
      if (e.i & 4) {
        m = true;
      }
      {
        e.C = n[2];
      }
      const s = e.m;
      const l = class extends HTMLElement {
        constructor(t) {
          super(t);
          t = this;
          ft(t, e);
          if (e.i & 1) {
            {
              {
                t.attachShadow({ mode: 'open' });
              }
            }
          }
        }
        connectedCallback() {
          if (p) {
            clearTimeout(p);
            p = null;
          }
          if (v) {
            h.push(this);
          } else {
            vt.jmp(() => tt(this));
          }
        }
        disconnectedCallback() {
          vt.jmp(() => et(this));
        }
        componentOnReady() {
          return ct(this).U;
        }
      };
      e.N = t[0];
      if (!c.includes(s) && !r.get(s)) {
        o.push(s);
        r.define(s, X(l, e, 1));
      }
    });
  });
  if (m) {
    d.innerHTML += f;
  }
  {
    d.innerHTML += o + i;
  }
  if (d.innerHTML.length) {
    d.setAttribute('data-styles', '');
    const t = (e = vt.p) !== null && e !== void 0 ? e : y(pt);
    if (t != null) {
      d.setAttribute('nonce', t);
    }
    u.insertBefore(d, a ? a.nextSibling : u.firstChild);
  }
  v = false;
  if (h.length) {
    h.map((t) => t.connectedCallback());
  } else {
    {
      vt.jmp(() => (p = setTimeout(D, 30)));
    }
  }
  s();
};
const ot = (t) => (vt.p = t);
const lt = new WeakMap();
const ct = (t) => lt.get(t);
const it = (t, n) => lt.set((n.O = t), n);
const ft = (t, n) => {
  const e = { i: 0, $hostElement$: t, v: n, M: new Map() };
  {
    e.U = new Promise((t) => (e.k = t));
    t['s-p'] = [];
    t['s-rc'] = [];
  }
  return lt.set(t, e);
};
const rt = (t, n) => n in t;
const ut = (t, n) => (0, console.error)(t, n);
const at = new Map();
const dt = (t, n, e) => {
  const s = t.m.replace(/-/g, '_');
  const o = t.N;
  const l = at.get(o);
  if (l) {
    return l[s];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import(`./${o}.entry.js${''}`).then((t) => {
    {
      at.set(o, t);
    }
    return t[s];
  }, ut);
};
const ht = new Map();
const yt = typeof window !== 'undefined' ? window : {};
const pt = yt.document || { head: {} };
const vt = {
  i: 0,
  A: '',
  jmp: (t) => t(),
  raf: (t) => requestAnimationFrame(t),
  ael: (t, n, e, s) => t.addEventListener(n, e, s),
  rel: (t, n, e, s) => t.removeEventListener(n, e, s),
  ce: (t, n) => new CustomEvent(t, n),
};
const mt = (t) => Promise.resolve(t);
const $t = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === 'function';
  } catch (t) {}
  return false;
})();
const wt = [];
const bt = [];
const gt = (t, n) => (e) => {
  t.push(e);
  if (!o) {
    o = true;
    if (n && vt.i & 4) {
      Ot(jt);
    } else {
      vt.raf(jt);
    }
  }
};
const St = (t) => {
  for (let n = 0; n < t.length; n++) {
    try {
      t[n](performance.now());
    } catch (t) {
      ut(t);
    }
  }
  t.length = 0;
};
const jt = () => {
  St(wt);
  {
    St(bt);
    if ((o = wt.length > 0)) {
      vt.raf(jt);
    }
  }
};
const Ot = (t) => mt().then(t);
const kt = gt(bt, true);
export { st as b, b as g, p as h, mt as p, it as r, ot as s };
//# sourceMappingURL=p-80b26b42.js.map
