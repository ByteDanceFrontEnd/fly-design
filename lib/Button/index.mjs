import { defineComponent as c, computed as l, openBlock as a, createElementBlock as u, normalizeClass as r, unref as d, createElementVNode as _, renderSlot as p } from "vue";
const f = /* @__PURE__ */ c({
  __name: "Button",
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
    return (n, s) => (a(), u("div", {
      class: r(d(o))
    }, [
      _("button", null, [
        p(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
});
const i = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, m = /* @__PURE__ */ i(f, [["__scopeId", "data-v-bc7946c8"]]), v = {
  install(t) {
    t.component("Button", m);
  }
};
export {
  v as default
};
