import {
  defineComponent as l,
  computed as s,
  ref as u,
  onMounted as c,
  openBlock as f,
  createElementBlock as r,
  normalizeClass as d,
  unref as _,
  createElementVNode as i,
  renderSlot as p,
} from 'vue'
const b = { name: 'Button' },
  m = /* @__PURE__ */ l({
    ...b,
    props: {
      type: { default: 'default' },
      disabled: { type: Boolean, default: !1 },
      animation: { type: Boolean, default: !1 },
      size: { default: '' },
      shape: { default: '' },
      color: { default: '' },
    },
    setup(e) {
      const t = e,
        n = s(() => [
          'f-button',
          `f-button-${t.type}`,
          `f-button-${t.disabled ? 'disabled' : ''}`,
          `f-button-${t.animation ? 'animation' : ''}`,
          `f-button-${t.size}`,
          `f-button-${t.shape}`,
        ])
      let o = u()
      return (
        c(() => {
          t.color && ((o.value.style.color = 'white'), (o.value.style.background = t.color))
        }),
        (a, B) => (
          f(),
          r(
            'div',
            {
              class: d(_(n)),
            },
            [
              i(
                'button',
                {
                  ref_key: 'buttonRef',
                  ref: o,
                },
                [p(a.$slots, 'default', {}, void 0, !0)],
                512,
              ),
            ],
            2,
          )
        )
      )
    },
  })
const y = (e, t) => {
    const n = e.__vccOpts || e
    for (const [o, a] of t) n[o] = a
    return n
  },
  v = /* @__PURE__ */ y(m, [['__scopeId', 'data-v-9c8830b4']]),
  k = {
    install(e) {
      e.component('Button', v)
    },
  }
export { k as default }
