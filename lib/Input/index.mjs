import { defineComponent as H, ref as h, computed as N, openBlock as o, createElementBlock as c, Fragment as v, createElementVNode as n, normalizeClass as T, unref as a, createCommentVNode as r, withDirectives as V, withKeys as F, vModelText as K, renderList as z, toDisplayString as D, pushScopeId as M, popScopeId as $ } from "vue";
function _() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-blur");
}
function w() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-focus");
}
const g = (e) => (M("data-v-563b30cf"), e = e(), $(), e), j = { key: 0 }, q = ["placeholder"], L = { key: 1 }, O = ["placeholder", "rows", "cols"], P = {
  key: 2,
  class: "search"
}, U = ["placeholder"], W = {
  key: 3,
  class: "password"
}, A = ["placeholder"], G = {
  id: "password-span",
  class: "password-span-blur"
}, J = ["src"], Q = {
  key: 4,
  class: "cache-search"
}, R = ["placeholder", "onKeyup"], X = /* @__PURE__ */ g(() => /* @__PURE__ */ n("img", { src: "https://img1.imgtp.com/2023/02/12/mKWB4ns6.png" }, null, -1)), Y = [
  X
], Z = /* @__PURE__ */ g(() => /* @__PURE__ */ n("br", null, null, -1)), ee = {
  key: 0,
  class: "cache-search-title"
}, te = /* @__PURE__ */ g(() => /* @__PURE__ */ n("div", { class: "cache-search-title-history" }, "搜索历史", -1)), se = {
  key: 1,
  class: "cache-search-list"
}, ne = ["onClick"], le = /* @__PURE__ */ H({
  __name: "main",
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
    const m = e, u = h(!0), d = h("");
    let i = h([]), f = "https://img1.imgtp.com/2023/02/12/86q3pyMC.png", I = "https://img1.imgtp.com/2023/02/12/5lVT5sTv.png";
    const p = h(f), k = N(() => [`f-input-${m.size}`]);
    function S() {
      setTimeout(() => {
        const t = document.getElementById("cache-search-input");
        u.value = !1, t && setTimeout(() => {
          t.className = "cache-search-input-blur";
        }, 10);
      }, 200);
    }
    function C() {
      const t = document.getElementById("cache-search-input");
      u.value = !0, t && (t.className = "cache-search-input-focus");
    }
    function b() {
      localStorage.removeItem("SearchHistory"), i.value = [];
    }
    function y() {
      let t;
      const l = localStorage.getItem("SearchHistory") ? localStorage.getItem("SearchHistory") : null;
      t = l ? l.split(",") : [];
      const s = d.value;
      s.length > 0 && !t.includes(s) && t.push(s), t.length > 0 && localStorage.setItem("SearchHistory", t.join(",")), i.value = t;
    }
    function B(t) {
      d.value = t;
    }
    function E() {
      const t = document.getElementById(
        "password-input"
      );
      p.value === f ? (p.value = I, t && (t.type = "password")) : (p.value = f, t && (t.type = "text"));
    }
    return (t, l) => (o(), c(v, null, [
      e.type ? r("", !0) : (o(), c("div", j, [
        n("input", {
          placeholder: e.placeholder,
          class: T(a(k))
        }, null, 10, q)
      ])),
      e.type === "textarea" ? (o(), c("div", L, [
        n("textarea", {
          placeholder: e.placeholder,
          rows: e.rows,
          cols: e.cols
        }, null, 8, O)
      ])) : r("", !0),
      e.type == "search" ? (o(), c("div", P, [
        n("input", {
          placeholder: e.placeholder,
          class: "search-input"
        }, null, 8, U),
        n("button", {
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => e.fn && e.fn(...s))
        }, "Search")
      ])) : r("", !0),
      e.type === "password" ? (o(), c("div", W, [
        n("input", {
          class: "password-input",
          placeholder: e.placeholder,
          onBlur: l[1] || (l[1] = //@ts-ignore
          (...s) => a(_) && a(_)(...s)),
          onFocus: l[2] || (l[2] = //@ts-ignore
          (...s) => a(w) && a(w)(...s)),
          id: "password-input"
        }, null, 40, A),
        n("span", G, [
          n("img", {
            onClick: E,
            src: p.value
          }, null, 8, J)
        ])
      ])) : r("", !0),
      e.type === "cache-search" ? (o(), c("div", Q, [
        V(n("input", {
          placeholder: e.placeholder,
          onBlur: S,
          onFocus: C,
          onKeyup: F(y, ["enter"]),
          class: "cache-search-input-blur",
          id: "cache-search-input",
          "onUpdate:modelValue": l[3] || (l[3] = (s) => d.value = s)
        }, null, 40, R), [
          [K, d.value]
        ]),
        n("button", { onClick: y }, Y),
        Z,
        u.value && a(i).length > 0 ? (o(), c("div", ee, [
          te,
          n("button", {
            class: "cache-search-title-clear",
            onClick: b
          }, " 清空 ")
        ])) : r("", !0),
        u.value && a(i).length > 0 ? (o(), c("div", se, [
          (o(!0), c(v, null, z(a(i), (s, x) => (o(), c("div", {
            key: x,
            onClick: (ae) => B(s)
          }, D(s), 9, ne))), 128))
        ])) : r("", !0)
      ])) : r("", !0)
    ], 64));
  }
});
const oe = (e, m) => {
  const u = e.__vccOpts || e;
  for (const [d, i] of m)
    u[d] = i;
  return u;
}, ce = /* @__PURE__ */ oe(le, [["__scopeId", "data-v-563b30cf"]]), ie = {
  install(e) {
    e.component("Input", ce);
  }
};
export {
  ie as default
};
