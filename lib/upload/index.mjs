import { ref as N, watch as w, toRefs as f, openBlock as I, createElementBlock as g, Fragment as p, createElementVNode as i, renderSlot as y, renderList as L, unref as C, reactive as E } from "vue";
const T = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjc1ODY4MDc0MjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3OTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTIwMi42NjY2NjcgMjU2aC00Mi42NjY2NjdhMzIgMzIgMCAwIDEgMC02NGg3MDRhMzIgMzIgMCAwIDEgMCA2NEgyNjYuNjY2NjY3djU2NS4zMzMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDAgMCA1My4zMzMzMzMgNTMuMzMzMzM0aDM4NGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAwIDUzLjMzMzMzMy01My4zMzMzMzRWMzUyYTMyIDMyIDAgMCAxIDY0IDB2NDY5LjMzMzMzM2MwIDY0LjgtNTIuNTMzMzMzIDExNy4zMzMzMzMtMTE3LjMzMzMzMyAxMTcuMzMzMzM0SDMyMGMtNjQuOCAwLTExNy4zMzMzMzMtNTIuNTMzMzMzLTExNy4zMzMzMzMtMTE3LjMzMzMzNFYyNTZ6IG0yMjQtMTA2LjY2NjY2N2EzMiAzMiAwIDAgMSAwLTY0aDE3MC42NjY2NjZhMzIgMzIgMCAwIDEgMCA2NEg0MjYuNjY2NjY3eiBtLTMyIDI4OGEzMiAzMiAwIDAgMSA2NCAwdjI1NmEzMiAzMiAwIDAgMS02NCAwVjQzNy4zMzMzMzN6IG0xNzAuNjY2NjY2IDBhMzIgMzIgMCAwIDEgNjQgMHYyNTZhMzIgMzIgMCAwIDEtNjQgMFY0MzcuMzMzMzMzeiIgZmlsbD0iIzEyOTZkYiIgcC1pZD0iMzc5NCI+PC9wYXRoPjwvc3ZnPg==";
const h = { class: "fly-uploader-imagelist" }, Y = { class: "preview-images-list" }, R = ["src"], b = { class: "preview-delete-icon" }, B = ["onClick"], U = {
  __name: "Upload",
  props: {
    accept: {
      type: String
    },
    size: {
      type: Number
    },
    limit: {
      type: Number
    },
    onSuccess: {
      type: Function
    },
    onError: {
      type: Function
    }
  },
  setup(s) {
    const j = s;
    let r = N([]);
    function u(e, M) {
      E({
        click: () => {
          document.getElementById("file-input").click();
        },
        change: (t) => {
          r.value.push(t.target.files);
        },
        drop: (t) => {
          t.preventDefault(), r.value.push(t.dataTransfer.files);
        }
      })[M](e);
    }
    function d(e) {
      e.preventDefault();
    }
    function m(e) {
      window.URL && window.URL.createObjectURL ? D(e) : v(e);
    }
    let o = N([]);
    function D(e) {
      let M = e.map((l) => ({
        file: l,
        url: URL.createObjectURL(new Blob(l))
      }));
      o.value = M;
    }
    function v(e) {
      const M = function(t) {
        return new Promise((z, a) => {
          let n = new FileReader();
          n.readAsDataURL(t), n.onload = (c) => {
            z(c.target.result);
          }, n.onerror = (c) => {
            a("文件读取失败" + c);
          };
        });
      };
      let l = e.map(M);
      Promise.all(l).then((t) => {
        o.value = t.map((z, a) => ({
          url: z,
          file: e[a]
        }));
      });
    }
    function A(e) {
      o.value.splice(e, 1), r.value.splice(e, 1);
    }
    return w(r.value, (e) => {
      let M = Array.from(e);
      const { size: l, accept: t, onError: z, limit: a } = f(j);
      if (!(M.length <= 0)) {
        if (M.some((n) => n[0].size > l.value))
          return z.value(`文件最大上传${l.value}k`);
        if (M.some((n) => !t.value.split(" ").indexOf(n[0].type)))
          return z.value(`只接受${t.value}类型的文件`);
        if (r.value.length > a.value)
          return r.value.pop(), z.value(`最多上传${a.value}个图片`);
        m(M);
      }
    }), (e, M) => (I(), g(p, null, [
      i("div", {
        class: "fly-uplouder-wrapper",
        onDrop: M[2] || (M[2] = (l) => u(l, "drop")),
        onDragover: d,
        onDragenter: d
      }, [
        i("div", h, [
          i("div", {
            class: "fly-uploader-container",
            onClick: M[1] || (M[1] = (l) => u(l, "click"))
          }, [
            y(e.$slots, "uploader-area"),
            i("input", {
              id: "file-input",
              type: "file",
              class: "fly-file__invisible",
              ref: "file",
              onChange: M[0] || (M[0] = (l) => u(l, "change"))
            }, null, 544)
          ])
        ]),
        i("div", null, [
          y(e.$slots, "tip")
        ])
      ], 32),
      i("ul", Y, [
        (I(!0), g(p, null, L(C(o), (l, t) => (I(), g("li", { key: t }, [
          i("img", {
            src: l.url,
            alt: ""
          }, null, 8, R),
          i("span", b, [
            i("img", {
              src: T,
              onClick: (z) => A(t)
            }, null, 8, B)
          ])
        ]))), 128))
      ])
    ], 64));
  }
}, S = {
  install(s) {
    s.component("Upload", U);
  }
};
export {
  S as default
};
