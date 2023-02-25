import { defineComponent as a, computed as l, openBlock as c, createElementBlock as u, normalizeClass as d, unref as r, createElementVNode as _, renderSlot as f } from "vue";
const p = { name: "Button" }, i = /* @__PURE__ */ a({
  ...p,
  props: {
    type: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, o = l(() => [
      "f-button",
      `f-button-${e.type}`,
      `f-button-${e.disabled ? "disabled" : ""}`
    ]);
    return (n, s) => (c(), u("div", {
      class: d(r(o))
    }, [
      _("button", null, [
        f(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
});
const m = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, b = /* @__PURE__ */ m(i, [["__scopeId", "data-v-8fe59cfa"]]), B = {
  install(t) {
    t.component("Button", b);
  }
};
export {
  B as default
};
