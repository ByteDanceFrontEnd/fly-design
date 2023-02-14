import { defineComponent as m, openBlock as k, createElementBlock as v, createElementVNode as u, createTextVNode as K, toDisplayString as D, createCommentVNode as x, computed as w, reactive as L, onUpdated as U, resolveComponent as z, Fragment as R, withDirectives as G, vShow as M, unref as o, createVNode as y, renderList as A, normalizeClass as B, ref as S, watch as j, useSlots as q, withModifiers as E, isRef as $, renderSlot as V } from "vue";
const H = { class: "list-title" }, J = ["checked"], P = {
  key: 0,
  class: "show-number"
}, Q = /* @__PURE__ */ m({
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
  setup(t, { emit: l }) {
    const n = t, r = (a) => {
      l("selectAll", n.leftOrRight, a);
    };
    return (a, i) => (k(), v("header", null, [
      u("h1", H, [
        u("input", {
          type: "checkbox",
          onChange: i[0] || (i[0] = (e) => r(e.target.checked)),
          checked: t.canSelectListLen != 0 && t.canSelectListLen == t.checkedCount
        }, null, 40, J),
        K(" " + D(t.title), 1),
        t.showCount ? (k(), v("span", P, D(t.checkedCount) + "/" + D(t.allCount), 1)) : x("", !0)
      ])
    ]));
  }
});
const I = (t, l) => {
  const n = t.__vccOpts || t;
  for (const [r, a] of l)
    n[r] = a;
  return n;
}, N = /* @__PURE__ */ I(Q, [["__scopeId", "data-v-3e1a70a5"]]), X = { class: "box button-group" }, Y = ["disabled"], Z = ["disabled"], tt = /* @__PURE__ */ m({
  __name: "ButtonGroup",
  props: {
    leftButtonDisabled: { type: Boolean, default: !0 },
    rightButtonDisabled: { type: Boolean, default: !0 },
    buttonTexts: null
  },
  emits: ["leftButtonClick", "rightButtonClick"],
  setup(t, { emit: l }) {
    const n = () => {
      l("leftButtonClick");
    }, r = () => {
      l("rightButtonClick");
    };
    return (a, i) => (k(), v("div", X, [
      u("button", {
        disabled: t.leftButtonDisabled,
        onClick: n
      }, [
        u("span", null, "<" + D(t.buttonTexts[0]), 1)
      ], 8, Y),
      u("button", {
        disabled: t.rightButtonDisabled,
        onClick: r
      }, [
        u("span", null, D(t.buttonTexts[1]) + ">", 1)
      ], 8, Z)
    ]));
  }
});
const et = /* @__PURE__ */ I(tt, [["__scopeId", "data-v-c44f99bf"]]), lt = {
  key: 0,
  class: "search"
}, nt = ["draggable", "onDragstart"], at = ["checked", "disabled", "id", "onClick"], st = ["for"], ot = ["draggable", "onDragstart"], it = ["checked", "disabled", "id", "onClick"], rt = ["for"], ct = /* @__PURE__ */ m({
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
    }
  },
  emits: [
    "checkboxClick",
    "dragItem",
    "update:leftListData",
    "update:rightListData"
  ],
  setup(t, { emit: l }) {
    const n = t;
    let r = w(() => n.leftOrRight == "left" ? n.leftListData : n.rightListData), a = L([...n.leftListData]), i = L([...n.rightListData]);
    U(() => {
      a = L([...n.leftListData]), i = L([...n.rightListData]);
    });
    const e = (g) => n.checkedData.find((b) => b.id == g), c = (g) => {
      console.log(g);
      let b = null;
      n.leftOrRight == "left" ? (b = a.filter((_) => {
        var s;
        return (s = _.label) == null ? void 0 : s.includes(g);
      }), l("update:leftListData", b)) : (b = i.filter((_) => {
        var s;
        return (s = _.label) == null ? void 0 : s.includes(g);
      }), l("update:rightListData", b));
    }, h = (g, b, _) => {
      l("checkboxClick", g, b, _);
    }, f = (g) => {
      l("dragItem", g);
    };
    return (g, b) => {
      const _ = z("svg-icon");
      return k(), v(R, null, [
        G(u("span", { class: "empty-content" }, D(t.emptyKeyWords), 513), [
          [M, o(r).length == 0]
        ]),
        t.filterable ? (k(), v("div", lt, [
          y(_, {
            name: "search",
            color: "#c7c7c7"
          }),
          u("input", {
            type: "text",
            placeholder: "filter-key-words",
            size: "small",
            onInput: b[0] || (b[0] = (s) => c(s.target.value))
          }, null, 32)
        ])) : x("", !0),
        t.leftOrRight == "left" ? (k(!0), v(R, { key: 1 }, A(t.leftListData, (s) => (k(), v("div", {
          key: s.id,
          class: B(["list-item", s.disabled ? "disabled" : ""]),
          draggable: !s.disabled,
          onDragstart: (C) => f(s)
        }, [
          u("input", {
            checked: e(s.id),
            type: "checkbox",
            disabled: s.disabled,
            id: "__checkbox__" + s.id,
            onClick: (C) => h(C.target.checked, t.leftOrRight, s)
          }, null, 8, at),
          u("label", {
            for: "__checkbox__" + s.id,
            class: B({ checkedItem: e(s.id) })
          }, D(s.label), 11, st)
        ], 42, nt))), 128)) : (k(!0), v(R, { key: 2 }, A(t.rightListData, (s) => (k(), v("div", {
          key: s.id,
          class: B(["list-item", s.disabled ? "disabled" : ""]),
          draggable: !s.disabled,
          onDragstart: (C) => f(s)
        }, [
          u("input", {
            checked: e(s.id),
            type: "checkbox",
            disabled: s.disabled,
            id: "__checkbox__" + s.id,
            onClick: (C) => h(C.target.checked, t.leftOrRight, s)
          }, null, 8, it),
          u("label", {
            for: "__checkbox__" + s.id,
            class: B({ checkedItem: e(s.id) })
          }, D(s.label), 11, rt)
        ], 42, ot))), 128))
      ], 64);
    };
  }
});
const W = /* @__PURE__ */ I(ct, [["__scopeId", "data-v-ce9400d8"]]), dt = {
  key: 0,
  class: "search"
}, ut = /* @__PURE__ */ m({
  __name: "Search",
  props: {
    filterable: { type: Boolean, default: !1 },
    leftOrRight: null
  },
  emits: ["inputChange"],
  setup(t, { emit: l }) {
    const n = t;
    function r(a) {
      l("inputChange", n.leftOrRight, a), console.log(a);
    }
    return (a, i) => t.filterable ? (k(), v("div", dt, [
      u("input", {
        type: "text",
        placeholder: "filter-key-words",
        size: "small",
        onInput: i[0] || (i[0] = (e) => r(e.target.value))
      }, null, 32)
    ])) : x("", !0);
  }
});
const F = /* @__PURE__ */ I(ut, [["__scopeId", "data-v-8589e564"]]);
function ft(t, l, n, r) {
  const a = S(t);
  a.value = [...t, ...n];
  function i(c) {
    c.forEach((h) => {
      a.value.find((f) => h.id === f.id) || a.value.push(h);
    }), r("change", a.value, "right", c), l.left = [];
  }
  function e(c) {
    a.value = a.value.filter((h) => !c.find((f) => f.id == h.id)), r("change", a.value, "left", c), l.right = [];
  }
  return j(
    a,
    (c) => {
      r("update:modelValue", c);
    },
    { deep: !0 }
  ), { rightListData: a, addRightListData: i, removeRightListData: e };
}
function ht(t, l, n) {
  const r = w(() => t.filter((e) => {
    if (!l.value.find(({ id: c }) => e.id === c))
      return e;
  })), a = w(() => {
    let e = 0;
    return r.value.forEach((c) => {
      c.disabled || e++;
    }), e;
  }), i = w(() => ({
    left: n.right.length === 0,
    right: n.left.length === 0
  }));
  return { leftListData: r, transferButtonDisabled: i, leftNoDisabledLen: a };
}
function gt(t) {
  const l = L({
    left: [],
    right: []
  });
  function n(i, e) {
    switch (i) {
      case "left":
        l.left.push(e), t("left-check-change", l.left, e.id);
        break;
      case "right":
        l.right.push(e), t("right-check-change", l.right, e.id);
        break;
    }
  }
  function r(i, e) {
    switch (i) {
      case "left":
        l.left = l.left.filter((c) => c.id !== e), t("left-check-change", l.left, e);
        break;
      case "right":
        l.right = l.right.filter((c) => c.id !== e), t("right-check-change", l.right, e);
        break;
    }
  }
  return { checkedData: l, setCheckedData: (i, e, c) => {
    i ? n(e, c) : r(e, c.id);
  } };
}
function bt() {
  const t = S({ id: 0, label: "", disabled: !1 });
  function l(n) {
    t.value = n;
  }
  return { dragedItem: t, setDragedItem: l };
}
function kt(t, l, n) {
  function r(a, i) {
    switch (a) {
      case "left":
        i ? (n.left.length = 0, t.value.forEach((e) => {
          e.disabled || n.left.push(e);
        })) : t.value.forEach((e) => {
          e.disabled || (n.left.length = 0);
        });
        break;
      case "right":
        i ? (n.right.length = 0, l.value.forEach((e) => {
          e.disabled || n.right.push(e);
        })) : l.value.forEach((e) => {
          e.disabled || (n.right.length = 0);
        });
        break;
    }
  }
  return { selectAll: r };
}
function vt(t, l) {
  const n = S([...t.value]), r = [...l.value];
  function a(e, c) {
    e == "left" ? n.value = i(c, t.value) : l.value = i(c, l.value);
  }
  function i(e, c) {
    return r.filter((h) => h.label && h.label.includes(e));
  }
  return {
    leftFiltedData: n,
    rightFiltedData: r,
    filterData: a
  };
}
const pt = { class: "transfer" }, _t = { class: "itemsWraper" }, Ct = {
  key: 0,
  class: "slot left-footer"
}, yt = { class: "box button-group" }, Dt = { class: "itemsWraper" }, Lt = {
  key: 0,
  class: "slot right-footer"
}, xt = /* @__PURE__ */ m({
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
  setup(t, { emit: l }) {
    const n = t, r = q();
    console.log(r);
    const { checkedData: a, setCheckedData: i } = gt(l), { rightListData: e, addRightListData: c, removeRightListData: h } = ft(
      [],
      a,
      n.modelValue,
      l
    ), { leftListData: f, transferButtonDisabled: g, leftNoDisabledLen: b } = ht(n.data, e, a), { dragedItem: _, setDragedItem: s } = bt(), { selectAll: C } = kt(f, e, a), { leftFiltedData: It, rightFiltedData: Bt, filterData: T } = vt(
      f,
      e
    );
    return (O, d) => (k(), v("div", null, [
      u("div", pt, [
        u("div", {
          class: "box left-list",
          onDrop: d[2] || (d[2] = (p) => o(h)([o(_)])),
          onDragover: d[3] || (d[3] = E(() => {
          }, ["prevent"]))
        }, [
          y(N, {
            title: t.titles[0],
            showCount: t.showCount,
            checkedCount: o(a).left.length,
            "all-count": o(f).length,
            "left-or-right": "left",
            "can-select-list-len": o(b),
            onSelectAll: o(C)
          }, null, 8, ["title", "showCount", "checkedCount", "all-count", "can-select-list-len", "onSelectAll"]),
          y(F, {
            filterable: t.filterable,
            leftOrRight: "left",
            onInputChange: o(T)
          }, null, 8, ["filterable", "onInputChange"]),
          u("div", _t, [
            y(W, {
              "left-list-data": o(f),
              "onUpdate:leftListData": d[0] || (d[0] = (p) => $(f) ? f.value = p : null),
              "right-list-data": o(e),
              "onUpdate:rightListData": d[1] || (d[1] = (p) => $(e) ? e.value = p : null),
              "empty-key-words": t.emptyKeyWords,
              leftOrRight: "left",
              checkedData: o(a).left,
              onCheckboxClick: o(i),
              onDragItem: o(s)
            }, null, 8, ["left-list-data", "right-list-data", "empty-key-words", "checkedData", "onCheckboxClick", "onDragItem"])
          ]),
          o(r)["left-footer"] ? (k(), v("div", Ct, [
            V(O.$slots, "left-footer", {}, void 0, !0)
          ])) : x("", !0)
        ], 32),
        u("div", yt, [
          y(et, {
            "left-button-disabled": o(g).left,
            "right-button-disabled": o(g).right,
            "button-texts": t.buttonTexts,
            onLeftButtonClick: d[4] || (d[4] = (p) => o(h)(o(a).right)),
            onRightButtonClick: d[5] || (d[5] = (p) => o(c)(o(a).left))
          }, null, 8, ["left-button-disabled", "right-button-disabled", "button-texts"])
        ]),
        u("div", {
          class: "box right-list",
          onDrop: d[8] || (d[8] = (p) => o(c)([o(_)])),
          onDragover: d[9] || (d[9] = E(() => {
          }, ["prevent"]))
        }, [
          y(N, {
            title: t.titles[1],
            showCount: t.showCount,
            checkedCount: o(a).right.length,
            "all-count": o(e).length,
            "left-or-right": "right",
            "can-select-list-len": o(e).length,
            onSelectAll: o(C)
          }, null, 8, ["title", "showCount", "checkedCount", "all-count", "can-select-list-len", "onSelectAll"]),
          y(F, {
            filterable: t.filterable,
            leftOrRight: "right",
            onInputChange: o(T)
          }, null, 8, ["filterable", "onInputChange"]),
          u("div", Dt, [
            y(W, {
              "empty-key-words": t.emptyKeyWords,
              "left-list-data": o(f),
              "onUpdate:leftListData": d[6] || (d[6] = (p) => $(f) ? f.value = p : null),
              "right-list-data": o(e),
              "onUpdate:rightListData": d[7] || (d[7] = (p) => $(e) ? e.value = p : null),
              "left-or-right": "right",
              checkedData: o(a).right,
              onCheckboxClick: o(i),
              onDragItem: o(s)
            }, null, 8, ["empty-key-words", "left-list-data", "right-list-data", "checkedData", "onCheckboxClick", "onDragItem"])
          ]),
          o(r)["right-footer"] ? (k(), v("div", Lt, [
            V(O.$slots, "right-footer", {}, void 0, !0)
          ])) : x("", !0)
        ], 32)
      ])
    ]));
  }
});
const mt = /* @__PURE__ */ I(xt, [["__scopeId", "data-v-29570684"]]), wt = {
  install(t) {
    t.component("Transfer", mt);
  }
};
export {
  wt as default
};
