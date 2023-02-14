import { defineComponent as l, computed as a, openBlock as d, createElementBlock as u, normalizeClass as c, unref as r, createElementVNode as _, renderSlot as p } from "vue";
const f = /* @__PURE__ */ l({
  __name: "Button",
  props: {
    type: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, o = a(() => [
      "f-button",
      `f-button-${e.type}`,
      `f-button-${e.disabled ? "disabled" : ""}`
    ]);
    return (n, s) => (d(), u("div", {
      class: c(r(o))
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
}, m = /* @__PURE__ */ i(f, [["__scopeId", "data-v-9ed1e3d1"]]), v = {
  install(t) {
    t.component("Button", m);
  }
};
export {
  v as default
};
