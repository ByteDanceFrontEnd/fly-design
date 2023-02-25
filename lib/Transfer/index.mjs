import { defineComponent as y, openBlock as h, createElementBlock as g, createElementVNode as u, createTextVNode as G, toDisplayString as v, createCommentVNode as m, computed as L, reactive as p, onUpdated as z, Fragment as B, withDirectives as M, vShow as j, unref as o, renderList as A, normalizeClass as D, ref as I, watch as q, watchEffect as H, useSlots as J, withModifiers as O, createVNode as _, isRef as x, renderSlot as E } from "vue";
const P = { class: "list-title" }, Q = ["checked"], X = {
  key: 0,
  class: "show-number"
}, Y = /* @__PURE__ */ y({
  __name: "ListTitle",
  props: {
    title: null,
    showCount: { type: Boolean },
    checkedCount: null,
    allCount: null,
    leftOrRight: null,
    canSelectListLen: null
  },
  emits: ["selectAll"],
  setup(t, { emit: n }) {
    const a = t, r = (l) => {
      n("selectAll", a.leftOrRight, l);
    };
    return (l, d) => (h(), g("header", null, [
      u("h1", P, [
        u("input", {
          type: "checkbox",
          onChange: d[0] || (d[0] = (e) => r(e.target.checked)),
          checked: t.canSelectListLen != 0 && t.canSelectListLen == t.checkedCount
        }, null, 40, Q),
        G(" " + v(t.title), 1),
        t.showCount ? (h(), g("span", X, v(t.checkedCount) + "/" + v(t.allCount), 1)) : m("", !0)
      ])
    ]));
  }
});
const C = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [r, l] of n)
    a[r] = l;
  return a;
}, V = /* @__PURE__ */ C(Y, [["__scopeId", "data-v-3e1a70a5"]]), Z = { class: "box button-group" }, tt = ["disabled"], et = ["disabled"], lt = /* @__PURE__ */ y({
  __name: "ButtonGroup",
  props: {
    leftButtonDisabled: { type: Boolean, default: !0 },
    rightButtonDisabled: { type: Boolean, default: !0 },
    buttonTexts: null
  },
  emits: ["leftButtonClick", "rightButtonClick"],
  setup(t, { emit: n }) {
    const a = () => {
      n("leftButtonClick");
    }, r = () => {
      n("rightButtonClick");
    };
    return (l, d) => (h(), g("div", Z, [
      u("button", {
        disabled: t.leftButtonDisabled,
        onClick: a
      }, [
        u("span", null, "<" + v(t.buttonTexts[0]), 1)
      ], 8, tt),
      u("button", {
        disabled: t.rightButtonDisabled,
        onClick: r
      }, [
        u("span", null, v(t.buttonTexts[1]) + ">", 1)
      ], 8, et)
    ]));
  }
});
const nt = /* @__PURE__ */ C(lt, [["__scopeId", "data-v-c44f99bf"]]), at = ["draggable", "onDragstart"], st = ["checked", "disabled", "id", "onClick"], ot = ["for"], it = ["draggable", "onDragstart"], rt = ["checked", "disabled", "id", "onClick"], dt = ["for"], ct = /* @__PURE__ */ y({
  __name: "ListItem",
  props: {
    leftListData: {
      type: Array,
      default: () => []
    },
    rightListData: {
      type: Array,
      default: () => []
    },
    leftOrRight: {
      type: String,
      validator(t) {
        return ["left", "right"].includes(t);
      }
    },
    emptyKeyWords: {
      type: String,
      default: ""
    },
    checkedData: {
      type: Array,
      default: () => []
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    filtedData: {
      type: Array
    }
  },
  emits: [
    "checkboxClick",
    "dragItem",
    "update:leftListData",
    "update:rightListData"
  ],
  setup(t, { emit: n }) {
    const a = t;
    let r = L(() => a.leftOrRight == "left" ? a.leftListData : a.rightListData);
    p([...a.leftListData]), p([...a.rightListData]), z(() => {
      p([...a.leftListData]), p([...a.rightListData]);
    });
    const l = (i) => a.checkedData.find((f) => f.id == i), d = (i, f, s) => {
      n("checkboxClick", i, f, s);
    }, e = (i) => {
      n("dragItem", i);
    };
    return (i, f) => (h(), g(B, null, [
      M(u("span", { class: "empty-content" }, v(t.emptyKeyWords), 513), [
        [j, o(r).length == 0]
      ]),
      t.leftOrRight == "left" ? (h(!0), g(B, { key: 0 }, A(t.filtedData, (s) => (h(), g("div", {
        key: s.id,
        class: D(["list-item", s.disabled ? "disabled" : ""]),
        draggable: !s.disabled,
        onDragstart: (k) => e(s)
      }, [
        u("input", {
          checked: l(s.id),
          type: "checkbox",
          disabled: s.disabled,
          id: "__checkbox__" + s.id,
          onClick: (k) => d(k.target.checked, t.leftOrRight, s)
        }, null, 8, st),
        u("label", {
          for: "__checkbox__" + s.id,
          class: D({ checkedItem: l(s.id) })
        }, v(s.label), 11, ot)
      ], 42, at))), 128)) : (h(!0), g(B, { key: 1 }, A(t.filtedData, (s) => (h(), g("div", {
        key: s.id,
        class: D(["list-item", s.disabled ? "disabled" : ""]),
        draggable: !s.disabled,
        onDragstart: (k) => e(s)
      }, [
        u("input", {
          checked: l(s.id),
          type: "checkbox",
          disabled: s.disabled,
          id: "__checkbox__" + s.id,
          onClick: (k) => d(k.target.checked, t.leftOrRight, s)
        }, null, 8, rt),
        u("label", {
          for: "__checkbox__" + s.id,
          class: D({ checkedItem: l(s.id) })
        }, v(s.label), 11, dt)
      ], 42, it))), 128))
    ], 64));
  }
});
const N = /* @__PURE__ */ C(ct, [["__scopeId", "data-v-bbd9879b"]]), ut = {
  key: 0,
  class: "search"
}, ft = /* @__PURE__ */ y({
  __name: "Search",
  props: {
    filterable: { type: Boolean, default: !1 },
    leftOrRight: null
  },
  emits: ["inputChange"],
  setup(t, { emit: n }) {
    const a = t;
    function r(l) {
      n("inputChange", a.leftOrRight, l), console.log(l);
    }
    return (l, d) => t.filterable ? (h(), g("div", ut, [
      u("input", {
        type: "text",
        placeholder: "filter-key-words",
        size: "small",
        onInput: d[0] || (d[0] = (e) => r(e.target.value))
      }, null, 32)
    ])) : m("", !0);
  }
});
const W = /* @__PURE__ */ C(ft, [["__scopeId", "data-v-8589e564"]]);
function ht(t, n, a, r) {
  const l = I(t);
  l.value = [...t, ...a];
  function d(i) {
    i.forEach((f) => {
      l.value.find((s) => f.id === s.id) || l.value.push(f);
    }), r("change", l.value, "right", i), n.left = [];
  }
  function e(i) {
    l.value = l.value.filter((f) => !i.find((s) => s.id == f.id)), r("change", l.value, "left", i), n.right = [];
  }
  return q(
    l,
    (i) => {
      r("update:modelValue", i);
    },
    { deep: !0 }
  ), { rightListData: l, addRightListData: d, removeRightListData: e };
}
function gt(t, n, a) {
  const r = L(() => t.filter((e) => {
    if (!n.value.find(({ id: i }) => e.id === i))
      return e;
  })), l = L(() => {
    let e = 0;
    return r.value.forEach((i) => {
      i.disabled || e++;
    }), e;
  }), d = L(() => ({
    left: a.right.length === 0,
    right: a.left.length === 0
  }));
  return { leftListData: r, transferButtonDisabled: d, leftNoDisabledLen: l };
}
function bt(t) {
  const n = p({
    left: [],
    right: []
  });
  function a(d, e) {
    switch (d) {
      case "left":
        n.left.push(e), t("left-check-change", n.left, e.id);
        break;
      case "right":
        n.right.push(e), t("right-check-change", n.right, e.id);
        break;
    }
  }
  function r(d, e) {
    switch (d) {
      case "left":
        n.left = n.left.filter((i) => i.id !== e), t("left-check-change", n.left, e);
        break;
      case "right":
        n.right = n.right.filter((i) => i.id !== e), t("right-check-change", n.right, e);
        break;
    }
  }
  return { checkedData: n, setCheckedData: (d, e, i) => {
    d ? a(e, i) : r(e, i.id);
  } };
}
function kt() {
  const t = I({ id: 0, label: "", disabled: !1 });
  function n(a) {
    t.value = a;
  }
  return { dragedItem: t, setDragedItem: n };
}
function vt(t, n, a) {
  function r(l, d) {
    switch (l) {
      case "left":
        d ? (a.left.length = 0, t.value.forEach((e) => {
          e.disabled || a.left.push(e);
        })) : t.value.forEach((e) => {
          e.disabled || (a.left.length = 0);
        });
        break;
      case "right":
        d ? (a.right.length = 0, n.value.forEach((e) => {
          e.disabled || a.right.push(e);
        })) : n.value.forEach((e) => {
          e.disabled || (a.right.length = 0);
        });
        break;
    }
  }
  return { selectAll: r };
}
function _t(t, n) {
  const a = I([...t.value]), r = I([...n.value]);
  function l(e, i) {
    e == "left" ? a.value = d(i, t.value) : r.value = d(i, n.value);
  }
  H(() => {
    a.value = t.value, r.value = n.value;
  });
  function d(e, i) {
    return i.filter((f) => f.label && f.label.includes(e));
  }
  return {
    leftFiltedData: a,
    rightFiltedData: r,
    filterData: l
  };
}
const pt = { class: "transfer" }, yt = { class: "itemsWraper" }, Ct = {
  key: 0,
  class: "slot left-footer"
}, Dt = { class: "box button-group" }, xt = { class: "itemsWraper" }, Lt = {
  key: 0,
  class: "slot right-footer"
}, mt = /* @__PURE__ */ y({
  __name: "Transfer",
  props: {
    data: { default: () => [] },
    titles: { default: () => ["List1", "List2"] },
    emptyKeyWords: { default: "No data" },
    modelValue: { default: () => [] },
    showCount: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    buttonTexts: { default: () => ["", ""] }
  },
  emits: ["update:modelValue", "change", "left-check-change", "right-check-change"],
  setup(t, { emit: n }) {
    const a = t, r = J();
    console.log(r);
    const { checkedData: l, setCheckedData: d } = bt(n), { rightListData: e, addRightListData: i, removeRightListData: f } = ht(
      [],
      l,
      a.modelValue,
      n
    ), { leftListData: s, transferButtonDisabled: k, leftNoDisabledLen: F } = gt(a.data, e, l), { dragedItem: $, setDragedItem: w } = kt(), { selectAll: R } = vt(s, e, l), { leftFiltedData: K, rightFiltedData: U, filterData: S } = _t(
      s,
      e
    );
    return (T, c) => (h(), g("div", null, [
      u("div", pt, [
        u("div", {
          class: "box left-list",
          onDrop: c[2] || (c[2] = (b) => o(f)([o($)])),
          onDragover: c[3] || (c[3] = O(() => {
          }, ["prevent"]))
        }, [
          _(V, {
            title: t.titles[0],
            showCount: t.showCount,
            checkedCount: o(l).left.length,
            "all-count": o(s).length,
            "left-or-right": "left",
            "can-select-list-len": o(F),
            onSelectAll: o(R)
          }, null, 8, ["title", "showCount", "checkedCount", "all-count", "can-select-list-len", "onSelectAll"]),
          _(W, {
            filterable: t.filterable,
            leftOrRight: "left",
            onInputChange: o(S)
          }, null, 8, ["filterable", "onInputChange"]),
          u("div", yt, [
            _(N, {
              "left-list-data": o(s),
              "onUpdate:leftListData": c[0] || (c[0] = (b) => x(s) ? s.value = b : null),
              "right-list-data": o(e),
              "onUpdate:rightListData": c[1] || (c[1] = (b) => x(e) ? e.value = b : null),
              "empty-key-words": t.emptyKeyWords,
              leftOrRight: "left",
              checkedData: o(l).left,
              filtedData: o(K),
              onCheckboxClick: o(d),
              onDragItem: o(w)
            }, null, 8, ["left-list-data", "right-list-data", "empty-key-words", "checkedData", "filtedData", "onCheckboxClick", "onDragItem"])
          ]),
          o(r)["left-footer"] ? (h(), g("div", Ct, [
            E(T.$slots, "left-footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 32),
        u("div", Dt, [
          _(nt, {
            "left-button-disabled": o(k).left,
            "right-button-disabled": o(k).right,
            "button-texts": t.buttonTexts,
            onLeftButtonClick: c[4] || (c[4] = (b) => o(f)(o(l).right)),
            onRightButtonClick: c[5] || (c[5] = (b) => o(i)(o(l).left))
          }, null, 8, ["left-button-disabled", "right-button-disabled", "button-texts"])
        ]),
        u("div", {
          class: "box right-list",
          onDrop: c[8] || (c[8] = (b) => o(i)([o($)])),
          onDragover: c[9] || (c[9] = O(() => {
          }, ["prevent"]))
        }, [
          _(V, {
            title: t.titles[1],
            showCount: t.showCount,
            checkedCount: o(l).right.length,
            "all-count": o(e).length,
            "left-or-right": "right",
            "can-select-list-len": o(e).length,
            onSelectAll: o(R)
          }, null, 8, ["title", "showCount", "checkedCount", "all-count", "can-select-list-len", "onSelectAll"]),
          _(W, {
            filterable: t.filterable,
            leftOrRight: "right",
            onInputChange: o(S)
          }, null, 8, ["filterable", "onInputChange"]),
          u("div", xt, [
            _(N, {
              "empty-key-words": t.emptyKeyWords,
              "left-list-data": o(s),
              "onUpdate:leftListData": c[6] || (c[6] = (b) => x(s) ? s.value = b : null),
              "right-list-data": o(e),
              "onUpdate:rightListData": c[7] || (c[7] = (b) => x(e) ? e.value = b : null),
              "left-or-right": "right",
              checkedData: o(l).right,
              filtedData: o(U),
              onCheckboxClick: o(d),
              onDragItem: o(w)
            }, null, 8, ["empty-key-words", "left-list-data", "right-list-data", "checkedData", "filtedData", "onCheckboxClick", "onDragItem"])
          ]),
          o(r)["right-footer"] ? (h(), g("div", Lt, [
            E(T.$slots, "right-footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 32)
      ])
    ]));
  }
});
const It = /* @__PURE__ */ C(mt, [["__scopeId", "data-v-52f8bf10"]]);
const $t = {
  install(t) {
    t.component("Transfer", It);
  }
};
export {
  $t as default
};
