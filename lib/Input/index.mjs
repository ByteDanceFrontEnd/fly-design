import { defineComponent as z, ref as h, onMounted as M, computed as $, openBlock as o, createElementBlock as c, Fragment as y, createElementVNode as l, normalizeClass as D, unref as u, createCommentVNode as d, withDirectives as L, withKeys as j, vModelText as q, renderList as S, toDisplayString as _, createTextVNode as O, pushScopeId as P, popScopeId as U } from "vue";
function E() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-blur");
}
function b() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-focus");
}
function W(e, p) {
  let a = null;
  return function() {
    a && clearTimeout(a), a = setTimeout(() => {
      e.apply(this, arguments);
    }, p);
  };
}
const I = (e) => (P("data-v-a852ae44"), e = e(), U(), e), A = { key: 0 }, G = ["placeholder"], J = { key: 1 }, Q = ["placeholder", "rows", "cols"], R = {
  key: 2,
  class: "search"
}, X = ["placeholder"], Y = {
  key: 3,
  class: "password"
}, Z = ["placeholder"], ee = {
  id: "password-span",
  class: "password-span-blur"
}, te = ["src"], ne = {
  key: 4,
  class: "cache-search"
}, se = ["placeholder", "onKeyup"], le = /* @__PURE__ */ I(() => /* @__PURE__ */ l("img", { src: "https://img1.imgtp.com/2023/02/12/mKWB4ns6.png" }, null, -1)), oe = [
  le
], ce = /* @__PURE__ */ I(() => /* @__PURE__ */ l("br", null, null, -1)), ae = {
  key: 0,
  class: "cache-search-title"
}, ue = /* @__PURE__ */ I(() => /* @__PURE__ */ l("div", { class: "cache-search-title-history" }, "搜索历史", -1)), ie = {
  key: 1,
  class: "cache-search-list"
}, re = ["onClick"], de = {
  key: 2,
  class: "cache-search-list"
}, he = ["onClick"], pe = { name: "Input" }, fe = /* @__PURE__ */ z({
  ...pe,
  props: {
    placeholder: { default: "" },
    size: { default: "default" },
    showPassword: { type: Boolean, default: !1 },
    prefixIcon: { default: "" },
    suffixIcon: { default: "" },
    type: { default: "" },
    rows: { default: 5 },
    cols: { default: 33 },
    fn: null
  },
  setup(e) {
    const p = e, a = h(!0), i = h("");
    let r = h([]), f = h([]), v = "https://img1.imgtp.com/2023/02/12/86q3pyMC.png", x = "https://img1.imgtp.com/2023/02/12/5lVT5sTv.png";
    const m = h(v), k = h(null);
    M(() => {
      const t = k.value;
      t && t.addEventListener("input", W(T, 500));
    });
    const B = $(() => [`f-input-${p.size}`]);
    function T() {
      f.value = [];
      const t = i.value, s = t.length;
      if (s !== 0)
        for (const n of r.value)
          n.length >= s && n.substring(0, s) === t && f.value.push([t, n.substring(s)]);
    }
    function H() {
      setTimeout(() => {
        const t = document.getElementById("cache-search-input");
        a.value = !1, t && setTimeout(() => {
          t.className = "cache-search-input-blur";
        }, 10);
      }, 200);
    }
    function N() {
      const t = document.getElementById("cache-search-input");
      a.value = !0, t && (t.className = "cache-search-input-focus");
    }
    function V() {
      localStorage.removeItem("SearchHistory"), r.value = [];
    }
    function w() {
      let t;
      const s = localStorage.getItem("SearchHistory") ? localStorage.getItem("SearchHistory") : null;
      t = s ? s.split(",") : [];
      const n = i.value;
      n.length > 0 && !t.includes(n) && t.push(n), t.length > 0 && localStorage.setItem("SearchHistory", t.join(",")), r.value = t;
    }
    function C(t) {
      i.value = t;
    }
    function F() {
      const t = document.getElementById(
        "password-input"
      );
      m.value === v ? (m.value = x, t && (t.type = "password")) : (m.value = v, t && (t.type = "text"));
    }
    return (t, s) => (o(), c(y, null, [
      e.type ? d("", !0) : (o(), c("div", A, [
        l("input", {
          placeholder: e.placeholder,
          class: D(u(B))
        }, null, 10, G)
      ])),
      e.type === "textarea" ? (o(), c("div", J, [
        l("textarea", {
          placeholder: e.placeholder,
          rows: e.rows,
          cols: e.cols
        }, null, 8, Q)
      ])) : d("", !0),
      e.type == "search" ? (o(), c("div", R, [
        l("input", {
          placeholder: e.placeholder,
          class: "search-input"
        }, null, 8, X),
        l("button", {
          onClick: s[0] || (s[0] = //@ts-ignore
          (...n) => e.fn && e.fn(...n))
        }, "Search")
      ])) : d("", !0),
      e.type === "password" ? (o(), c("div", Y, [
        l("input", {
          class: "password-input",
          placeholder: e.placeholder,
          onBlur: s[1] || (s[1] = //@ts-ignore
          (...n) => u(E) && u(E)(...n)),
          onFocus: s[2] || (s[2] = //@ts-ignore
          (...n) => u(b) && u(b)(...n)),
          id: "password-input"
        }, null, 40, Z),
        l("span", ee, [
          l("img", {
            onClick: F,
            src: m.value
          }, null, 8, te)
        ])
      ])) : d("", !0),
      e.type === "cache-search" ? (o(), c("div", ne, [
        L(l("input", {
          placeholder: e.placeholder,
          onBlur: H,
          onFocus: N,
          onKeyup: j(w, ["enter"]),
          class: "cache-search-input-blur",
          id: "cache-search-input",
          "onUpdate:modelValue": s[3] || (s[3] = (n) => i.value = n),
          ref_key: "searchInput",
          ref: k
        }, null, 40, se), [
          [q, i.value]
        ]),
        l("button", { onClick: w }, oe),
        ce,
        a.value && u(r).length > 0 ? (o(), c("div", ae, [
          ue,
          l("button", {
            class: "cache-search-title-clear",
            onClick: V
          }, " 清空 ")
        ])) : d("", !0),
        a.value && u(r).length > 0 && !i.value ? (o(), c("div", ie, [
          (o(!0), c(y, null, S(u(r), (n, g) => (o(), c("div", {
            key: g,
            onClick: (K) => C(n)
          }, _(n), 9, re))), 128))
        ])) : d("", !0),
        a.value && u(f).length > 0 && i.value ? (o(), c("div", de, [
          (o(!0), c(y, null, S(u(f), (n, g) => (o(), c("div", {
            key: g,
            onClick: (K) => C(n[0] + n[1])
          }, [
            l("p", null, _(n[0]), 1),
            O(_(n[1]), 1)
          ], 8, he))), 128))
        ])) : d("", !0)
      ])) : d("", !0)
    ], 64));
  }
});
const me = (e, p) => {
  const a = e.__vccOpts || e;
  for (const [i, r] of p)
    a[i] = r;
  return a;
}, ve = /* @__PURE__ */ me(fe, [["__scopeId", "data-v-a852ae44"]]), ye = {
  install(e) {
    e.component("Input", ve);
  }
};
export {
  ye as default
};
