import { defineComponent as l, openBlock as s, createElementBlock as i, normalizeStyle as c, createElementVNode as d, toDisplayString as m, renderSlot as n } from "vue";
const u = ["src"], g = {
  key: 0,
  class: "card-summary"
}, f = {
  key: 1,
  class: "card-summary"
}, y = /* @__PURE__ */ l({
  __name: "main",
  props: {
    width: { default: 0 },
    imgSrc: { default: "" },
    imgHeight: { default: 0 },
    summary: { default: "" }
  },
  setup(e) {
    return (t, a) => (s(), i("div", {
      class: "card",
      style: c(e.width ? { width: e.width + "px" } : {})
    }, [
      d("div", {
        class: "card-img",
        style: c(e.imgHeight ? { height: e.imgHeight + "px" } : {})
      }, [
        d("img", {
          src: e.imgSrc,
          alt: "img"
        }, null, 8, u)
      ], 4),
      e.summary ? (s(), i("div", g, m(e.summary), 1)) : (s(), i("div", f, [
        n(t.$slots, "default", {}, void 0, !0)
      ])),
      n(t.$slots, "footer", {}, void 0, !0)
    ], 4));
  }
});
const h = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, r] of t)
    a[o] = r;
  return a;
}, _ = /* @__PURE__ */ h(y, [["__scopeId", "data-v-9e1fca3e"]]), k = {
  install(e) {
    e.component("Card", _);
  }
};
export {
  k as default
};
