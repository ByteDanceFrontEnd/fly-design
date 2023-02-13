import { defineComponent as b, ref as h, openBlock as o, createElementBlock as c, Fragment as g, createElementVNode as n, normalizeStyle as x, createCommentVNode as u, unref as r, withDirectives as B, withKeys as E, vModelText as H, renderList as N, toDisplayString as T, pushScopeId as V, popScopeId as z } from "vue";
function y() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-blur");
}
function v() {
  const e = document.getElementById("password-span");
  e && (e.className = "password-span-focus");
}
const m = (e) => (V("data-v-c6b52e30"), e = e(), z(), e), F = { key: 0 }, K = ["placeholder"], M = { key: 1 }, q = ["placeholder", "rows", "cols"], D = {
  key: 2,
  class: "search"
}, j = ["placeholder"], L = {
  key: 3,
  class: "password"
}, O = ["placeholder"], P = {
  id: "password-span",
  class: "password-span-blur"
}, U = ["src"], W = {
  key: 4,
  class: "cache-search"
}, $ = ["placeholder", "onKeyup"], A = /* @__PURE__ */ m(() => /* @__PURE__ */ n("img", { src: "https://img1.imgtp.com/2023/02/12/mKWB4ns6.png" }, null, -1)), G = [
  A
], J = /* @__PURE__ */ m(() => /* @__PURE__ */ n("br", null, null, -1)), Q = {
  key: 0,
  class: "cache-search-title"
}, R = /* @__PURE__ */ m(() => /* @__PURE__ */ n("div", { class: "cache-search-title-history" }, "搜索历史", -1)), X = {
  key: 1,
  class: "cache-search-list"
}, Y = ["onClick"], Z = /* @__PURE__ */ b({
  __name: "main",
  props: {
    placeholder: { default: "" },
    size: { default: "" },
    showPassword: { type: Boolean, default: !1 },
    prefixIcon: { default: "" },
    suffixIcon: { default: "" },
    type: { default: "" },
    rows: { default: 5 },
    cols: { default: 33 },
    fn: null
  },
  setup(e) {
    const d = h(!0), a = h("");
    let i = h([]);
    const p = h("https://img1.imgtp.com/2023/02/12/86q3pyMC.png");
    function _() {
      setTimeout(() => {
        const t = document.getElementById("cache-search-input");
        d.value = !1, t && setTimeout(() => {
          t.className = "cache-search-input-blur";
        }, 10);
      }, 200);
    }
    function w() {
      const t = document.getElementById("cache-search-input");
      d.value = !0, t && (t.className = "cache-search-input-focus");
    }
    function I() {
      localStorage.removeItem("SearchHistory"), i.value = [];
    }
    function f() {
      let t;
      const l = localStorage.getItem("SearchHistory") ? localStorage.getItem("SearchHistory") : null;
      t = l ? l.split(",") : [];
      const s = a.value;
      s.length > 0 && !t.includes(s) && t.push(s), t.length > 0 && localStorage.setItem("SearchHistory", t.join(",")), i.value = t;
    }
    function k(t) {
      a.value = t;
    }
    function S() {
      const t = document.getElementById(
        "password-input"
      );
      p.value === "https://img1.imgtp.com/2023/02/12/86q3pyMC.png" ? (p.value = "https://img1.imgtp.com/2023/02/12/5lVT5sTv.png", t && (t.type = "password")) : (p.value = "https://img1.imgtp.com/2023/02/12/86q3pyMC.png", t && (t.type = "text"));
    }
    return (t, l) => (o(), c(g, null, [
      e.type ? u("", !0) : (o(), c("div", F, [
        n("input", {
          placeholder: e.placeholder,
          style: x(e.size ? { height: (e.size === "small" ? 24 : 40) + "px" } : {})
        }, null, 12, K)
      ])),
      e.type === "textarea" ? (o(), c("div", M, [
        n("textarea", {
          placeholder: e.placeholder,
          rows: e.rows,
          cols: e.cols
        }, null, 8, q)
      ])) : u("", !0),
      e.type == "search" ? (o(), c("div", D, [
        n("input", {
          placeholder: e.placeholder,
          class: "search-input"
        }, null, 8, j),
        n("button", {
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => e.fn && e.fn(...s))
        }, "Search")
      ])) : u("", !0),
      e.type === "password" ? (o(), c("div", L, [
        n("input", {
          class: "password-input",
          placeholder: e.placeholder,
          onBlur: l[1] || (l[1] = //@ts-ignore
          (...s) => r(y) && r(y)(...s)),
          onFocus: l[2] || (l[2] = //@ts-ignore
          (...s) => r(v) && r(v)(...s)),
          id: "password-input"
        }, null, 40, O),
        n("span", P, [
          n("img", {
            onClick: S,
            src: p.value
          }, null, 8, U)
        ])
      ])) : u("", !0),
      e.type === "cache-search" ? (o(), c("div", W, [
        B(n("input", {
          placeholder: e.placeholder,
          onBlur: _,
          onFocus: w,
          onKeyup: E(f, ["enter"]),
          class: "cache-search-input-blur",
          id: "cache-search-input",
          "onUpdate:modelValue": l[3] || (l[3] = (s) => a.value = s)
        }, null, 40, $), [
          [H, a.value]
        ]),
        n("button", { onClick: f }, G),
        J,
        d.value && r(i).length > 0 ? (o(), c("div", Q, [
          R,
          n("button", {
            class: "cache-search-title-clear",
            onClick: I
          }, " 清空 ")
        ])) : u("", !0),
        d.value && r(i).length > 0 ? (o(), c("div", X, [
          (o(!0), c(g, null, N(r(i), (s, C) => (o(), c("div", {
            key: C,
            onClick: (se) => k(s)
          }, T(s), 9, Y))), 128))
        ])) : u("", !0)
      ])) : u("", !0)
    ], 64));
  }
});
const ee = (e, d) => {
  const a = e.__vccOpts || e;
  for (const [i, p] of d)
    a[i] = p;
  return a;
}, te = /* @__PURE__ */ ee(Z, [["__scopeId", "data-v-c6b52e30"]]), le = {
  install(e) {
    e.component("Input", te);
  }
};
export {
  le as default
};
