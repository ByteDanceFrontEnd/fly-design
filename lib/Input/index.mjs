import { defineComponent as z, ref as p, onMounted as M, computed as $, openBlock as o, createElementBlock as c, Fragment as y, createElementVNode as l, normalizeClass as D, unref as u, createCommentVNode as d, withDirectives as L, withKeys as j, vModelText as q, renderList as C, toDisplayString as _, pushScopeId as O, popScopeId as P } from "vue";
function S() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-blur");
}
function E() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-focus");
}
function U(e, h) {
  let a = null;
  return function() {
    a && clearTimeout(a), a = setTimeout(() => {
      e.apply(this, arguments);
    }, h);
  };
}
const I = (e) => (O("data-v-b4540a41"), e = e(), P(), e), W = { key: 0 }, A = ["placeholder"], G = { key: 1 }, J = ["placeholder", "rows", "cols"], Q = {
  key: 2,
  class: "search"
}, R = ["placeholder"], X = {
  key: 3,
  class: "password"
}, Y = ["placeholder"], Z = {
  id: "password-span",
  class: "password-span-blur"
}, ee = ["src"], te = {
  key: 4,
  class: "cache-search"
}, ne = ["placeholder", "onKeyup"], se = /* @__PURE__ */ I(() => /* @__PURE__ */ l("img", { src: "https://img1.imgtp.com/2023/02/12/mKWB4ns6.png" }, null, -1)), le = [
  se
], oe = /* @__PURE__ */ I(() => /* @__PURE__ */ l("br", null, null, -1)), ce = {
  key: 0,
  class: "cache-search-title"
}, ae = /* @__PURE__ */ I(() => /* @__PURE__ */ l("div", { class: "cache-search-title-history" }, "搜索历史", -1)), ue = {
  key: 1,
  class: "cache-search-list"
}, ie = ["onClick"], re = {
  key: 2,
  class: "cache-search-list"
}, de = ["onClick"], pe = { name: "Input" }, he = /* @__PURE__ */ z({
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
    const h = e, a = p(!0), i = p("");
    let r = p([]), f = p([]), v = "https://img1.imgtp.com/2023/02/12/86q3pyMC.png", B = "https://img1.imgtp.com/2023/02/12/5lVT5sTv.png";
    const m = p(v), k = p();
    M(() => {
      const t = k.value;
      t && t.addEventListener("input", U(H, 100));
    });
    const x = $(() => [`f-input-${h.size}`]);
    function H() {
      f.value = [];
      const t = i.value, s = t.length;
      if (s !== 0)
        for (const n of r.value)
          n.length >= s && n.substring(0, s) === t && f.value.push([t, n.substring(s)]);
    }
    function T() {
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
    function b(t) {
      i.value = t;
    }
    function F() {
      const t = document.getElementById("password-input");
      m.value === v ? (m.value = B, t && (t.type = "password")) : (m.value = v, t && (t.type = "text"));
    }
    return (t, s) => (o(), c(y, null, [
      e.type ? d("", !0) : (o(), c("div", W, [
        l("input", {
          placeholder: e.placeholder,
          class: D(u(x))
        }, null, 10, A)
      ])),
      e.type === "textarea" ? (o(), c("div", G, [
        l("textarea", {
          placeholder: e.placeholder,
          rows: e.rows,
          cols: e.cols
        }, null, 8, J)
      ])) : d("", !0),
      e.type == "search" ? (o(), c("div", Q, [
        l("input", {
          placeholder: e.placeholder,
          class: "search-input"
        }, null, 8, R),
        l("button", {
          onClick: s[0] || (s[0] = //@ts-ignore
          (...n) => e.fn && e.fn(...n))
        }, "Search")
      ])) : d("", !0),
      e.type === "password" ? (o(), c("div", X, [
        l("input", {
          class: "password-input",
          placeholder: e.placeholder,
          onBlur: s[1] || (s[1] = //@ts-ignore
          (...n) => u(S) && u(S)(...n)),
          onFocus: s[2] || (s[2] = //@ts-ignore
          (...n) => u(E) && u(E)(...n)),
          id: "password-input"
        }, null, 40, Y),
        l("span", Z, [
          l("img", {
            onClick: F,
            src: m.value
          }, null, 8, ee)
        ])
      ])) : d("", !0),
      e.type === "cache-search" ? (o(), c("div", te, [
        L(l("input", {
          placeholder: e.placeholder,
          onBlur: T,
          onFocus: N,
          onKeyup: j(w, ["enter"]),
          class: "cache-search-input-blur",
          id: "cache-search-input",
          "onUpdate:modelValue": s[3] || (s[3] = (n) => i.value = n),
          ref_key: "searchInput",
          ref: k
        }, null, 40, ne), [
          [q, i.value]
        ]),
        l("button", { onClick: w }, le),
        oe,
        a.value && u(r).length > 0 ? (o(), c("div", ce, [
          ae,
          l("button", {
            class: "cache-search-title-clear",
            onClick: V
          }, "清空")
        ])) : d("", !0),
        a.value && u(r).length > 0 && !i.value ? (o(), c("div", ue, [
          (o(!0), c(y, null, C(u(r), (n, g) => (o(), c("div", {
            key: g,
            onClick: (K) => b(n)
          }, _(n), 9, ie))), 128))
        ])) : d("", !0),
        a.value && u(f).length > 0 && i.value ? (o(), c("div", re, [
          (o(!0), c(y, null, C(u(f), (n, g) => (o(), c("div", {
            key: g,
            onClick: (K) => b(n[0] + n[1])
          }, [
            l("p", null, _(n[0]), 1),
            l("span", null, _(n[1]), 1)
          ], 8, de))), 128))
        ])) : d("", !0)
      ])) : d("", !0)
    ], 64));
  }
});
const fe = (e, h) => {
  const a = e.__vccOpts || e;
  for (const [i, r] of h)
    a[i] = r;
  return a;
}, me = /* @__PURE__ */ fe(he, [["__scopeId", "data-v-b4540a41"]]), ge = {
  install(e) {
    e.component("Input", me);
  }
};
export {
  ge as default
};
