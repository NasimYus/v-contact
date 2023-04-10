import {
  f as g,
  g as h,
  j as v,
  o as x,
  c as k,
  b as t,
  t as o,
  u as e,
  a as y,
  n as w,
  p as B,
  q as D,
  m as E,
} from "./index-ec3162aa.js";
import { u } from "./contacts-48eebbc6.js";
const N = { class: "container pt-3" },
  R = { class: "card w-50 shadow" },
  S = { class: "card-body" },
  V = { class: "d-flex justify-content-between" },
  j = { class: "d-flex gap-2" },
  A = { class: "text-muted m-0" },
  L = g({
    __name: "ContactDetail",
    setup(P) {
      const p = B(),
        m = D(),
        f = h(+m.params.id),
        b = u(),
        s = u().selectedContact;
      b.getContact(+f.value);
      const C = v(() =>
        E(
          () => import("./ContactUpdateModal-d7cc3127.js"),
          [
            "assets/ContactUpdateModal-d7cc3127.js",
            "assets/index-ec3162aa.js",
            "assets/index-af80516f.css",
            "assets/contacts-48eebbc6.js",
          ]
        )
      );
      return ($, a) => {
        var n, c, l, d, r, i, _;
        return (
          x(),
          k("div", N, [
            t("div", R, [
              t("div", S, [
                t("div", V, [
                  t("h4", null, o((n = e(s)) == null ? void 0 : n.fullName), 1),
                  t("div", j, [
                    t(
                      "button",
                      {
                        class: "btn btn-light btn-sm",
                        onClick: a[0] || (a[0] = (q) => e(p).back()),
                      },
                      "Назад"
                    ),
                    y(e(C), { contact: e(s) }, null, 8, ["contact"]),
                  ]),
                ]),
                t(
                  "p",
                  A,
                  o((c = e(s)) == null ? void 0 : c.phone) +
                    ", " +
                    o((l = e(s)) == null ? void 0 : l.email),
                  1
                ),
                t(
                  "span",
                  {
                    class: w([
                      "badge rounded-pill",
                      `bg-${
                        (r = (d = e(s)) == null ? void 0 : d.tag) == null
                          ? void 0
                          : r.color
                      }`,
                    ]),
                  },
                  o(
                    (_ = (i = e(s)) == null ? void 0 : i.tag) == null
                      ? void 0
                      : _.label
                  ),
                  3
                ),
              ]),
            ]),
          ])
        );
      };
    },
  });
export { L as default };
