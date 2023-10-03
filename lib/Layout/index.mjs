import { defineComponent as u, computed as i, openBlock as _, createElementBlock as r, normalizeClass as p, unref as l, renderSlot as c } from "vue";
const f = /* @__PURE__ */ u({
  __name: "Layout",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const o = e, t = i(() => o.direction == "vertical");
    return (n, s) => (_(), r("div", {
      class: p(["f-layout", l(t) == !0 ? "is-vertical" : ""])
    }, [
      c(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const d = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, $ = /* @__PURE__ */ d(f, [["__scopeId", "data-v-46d7fed5"]]), v = {
  setup() {
    return {};
  }
};
const m = { class: "f-header" };
function y(e, o, t, n, s, a) {
  return _(), r("div", m, [
    c(e.$slots, "default", {}, void 0, !0)
  ]);
}
const h = /* @__PURE__ */ d(v, [["render", y], ["__scopeId", "data-v-097e95ad"]]), x = {
  setup() {
    return {};
  }
};
const g = { class: "f-sider" };
function C(e, o, t, n, s, a) {
  return _(), r("div", g, [
    c(e.$slots, "default", {}, void 0, !0)
  ]);
}
const I = /* @__PURE__ */ d(x, [["render", C], ["__scopeId", "data-v-24e55f7a"]]), L = {
  setup() {
    return {};
  }
};
const S = { class: "f-content" };
function k(e, o, t, n, s, a) {
  return _(), r("div", S, [
    c(e.$slots, "default", {}, void 0, !0)
  ]);
}
const F = /* @__PURE__ */ d(L, [["render", k], ["__scopeId", "data-v-4a283f61"]]), H = {
  setup() {
    return {};
  }
};
const b = { class: "f-footer" };
function z(e, o, t, n, s, a) {
  return _(), r("div", b, [
    c(e.$slots, "default", {}, void 0, !0)
  ]);
}
const B = /* @__PURE__ */ d(H, [["render", z], ["__scopeId", "data-v-66376b44"]]), O = {
  install(e) {
    e.component("Layout", $), e.component("Header", h), e.component("Sider", I), e.component("Content", F), e.component("Footer", B);
  }
};
export {
  O as default
};
