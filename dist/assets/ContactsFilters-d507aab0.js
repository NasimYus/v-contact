import {
  f as p,
  g as b,
  o as r,
  c as u,
  b as l,
  x as i,
  y as c,
  u as a,
  z as _,
  F as h,
  k as g,
  t as y,
} from "./index-ec3162aa.js";
import { u as m } from "./contacts-48eebbc6.js";
const k = { class: "card" },
  C = { class: "card-body" },
  N = { class: "row row-cols-12 mb-2" },
  x = { class: "col-3" },
  q = l("label", { for: "fullName", class: "form-label" }, "ФИО", -1),
  V = ["disabled"],
  $ = { class: "col-3" },
  F = l("label", { for: "phone", class: "form-label" }, "Номер телефона", -1),
  U = ["disabled"],
  w = l("label", { for: "email", class: "form-label" }, "Email адрес", -1),
  B = ["disabled"],
  I = { class: "col-3" },
  S = l("label", { for: "tags", class: "form-label" }, "Теги", -1),
  D = ["disabled"],
  E = l("option", { selected: "", value: {} }, "Выберите тег", -1),
  M = ["value"],
  T = { class: "d-flex justify-content-end" },
  A = p({
    __name: "ContactsFilters",
    setup(j) {
      const n = m().contacts,
        v = m().filterContacts,
        f = m().tags,
        o = b({ fullName: "", phone: "", email: "", tag: "" });
      function s(d) {
        d.key === "clear" &&
          (o.value = { fullName: "", phone: "", email: "", tag: "" }),
          v(d);
      }
      return (d, e) => (
        r(),
        u("div", k, [
          l("div", C, [
            l("form", N, [
              l("div", x, [
                q,
                i(
                  l(
                    "input",
                    {
                      onInput:
                        e[0] ||
                        (e[0] = (t) =>
                          s({ key: "fullName", value: o.value.fullName })),
                      disabled: !a(n).length,
                      "onUpdate:modelValue":
                        e[1] || (e[1] = (t) => (o.value.fullName = t)),
                      type: "text",
                      id: "fullName",
                      class: "form-control",
                      placeholder: "Иванов Иван Иванович",
                      required: "",
                    },
                    null,
                    40,
                    V
                  ),
                  [[c, o.value.fullName]]
                ),
              ]),
              l("div", $, [
                F,
                i(
                  l(
                    "input",
                    {
                      onInput:
                        e[2] ||
                        (e[2] = (t) =>
                          s({ key: "phone", value: o.value.phone })),
                      disabled: !a(n).length,
                      "onUpdate:modelValue":
                        e[3] || (e[3] = (t) => (o.value.phone = t)),
                      type: "number",
                      id: "phone",
                      class: "form-control",
                      placeholder: "998888888",
                      required: "",
                    },
                    null,
                    40,
                    U
                  ),
                  [[c, o.value.phone]]
                ),
              ]),
              l(
                "div",
                {
                  onInput:
                    e[5] ||
                    (e[5] = (t) => s({ key: "email", value: o.value.email })),
                  class: "col-3",
                },
                [
                  w,
                  i(
                    l(
                      "input",
                      {
                        disabled: !a(n).length,
                        "onUpdate:modelValue":
                          e[4] || (e[4] = (t) => (o.value.email = t)),
                        type: "email",
                        id: "email",
                        class: "form-control",
                        placeholder: "ivanov@mail.ru",
                        required: "",
                      },
                      null,
                      8,
                      B
                    ),
                    [[c, o.value.email]]
                  ),
                ],
                32
              ),
              l("div", I, [
                S,
                i(
                  l(
                    "select",
                    {
                      onChange:
                        e[6] ||
                        (e[6] = (t) => s({ key: "tag", value: o.value.tag })),
                      disabled: !a(n).length,
                      "onUpdate:modelValue":
                        e[7] || (e[7] = (t) => (o.value.tag = t)),
                      class: "form-select",
                      id: "tags",
                      required: "",
                    },
                    [
                      E,
                      (r(!0),
                      u(
                        h,
                        null,
                        g(
                          a(f),
                          (t) => (
                            r(),
                            u(
                              "option",
                              { key: t.id, value: t.id },
                              y(t.label),
                              9,
                              M
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    40,
                    D
                  ),
                  [[_, o.value.tag]]
                ),
              ]),
            ]),
            l("div", T, [
              l(
                "button",
                {
                  class: "btn btn-outline-dark",
                  onClick:
                    e[8] || (e[8] = (t) => s({ key: "clear", value: "" })),
                },
                " Очистить фильтры "
              ),
            ]),
          ]),
        ])
      );
    },
  });
export { A as default };
