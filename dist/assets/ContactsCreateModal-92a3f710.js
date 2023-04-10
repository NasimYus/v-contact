import {
  f as h,
  g as r,
  o as l,
  c as n,
  b as e,
  v as g,
  x as d,
  y as c,
  z as y,
  F as b,
  k as C,
  t as x,
  u as N,
  l as M,
  A as k,
  M as V,
} from "./index-ec3162aa.js";
import { u as _ } from "./contacts-48eebbc6.js";
const F = e(
    "button",
    {
      type: "button",
      class: "btn btn-primary btn-sm",
      "data-bs-toggle": "modal",
      "data-bs-target": "#contactsCreateModal",
    },
    " Добавить ",
    -1
  ),
  S = { class: "modal-dialog" },
  q = { class: "modal-content" },
  w = e(
    "div",
    { class: "modal-header" },
    [
      e("h5", { class: "modal-title" }, "создание контакта"),
      e("button", {
        type: "button",
        class: "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close",
      }),
    ],
    -1
  ),
  T = { class: "modal-body" },
  U = ["onSubmit"],
  B = { class: "mb-3" },
  A = e("label", { for: "fullName", class: "form-label" }, "ФИО", -1),
  D = { class: "mb-3" },
  E = e("label", { for: "phone", class: "form-label" }, "Номер телефона", -1),
  R = { class: "input-group" },
  z = e("span", { class: "input-group-text" }, "+998", -1),
  I = { class: "mb-3" },
  L = e("label", { for: "email", class: "form-label" }, "Email адрес", -1),
  j = { class: "mb-3" },
  G = e("label", { for: "tags", class: "form-label" }, "Теги", -1),
  H = e("option", { selected: "", value: {} }, "Выберите тег", -1),
  J = ["value"],
  K = { class: "modal-footer" },
  O = ["disabled"],
  P = ["disabled"],
  Q = {
    key: 0,
    class: "spinner-border text-white ms-1 spinner-border-sm",
    role: "status",
  },
  Z = h({
    __name: "ContactsCreateModal",
    setup(W) {
      const p = _().addContact,
        f = _().tags,
        o = r({ fullName: "", phone: "", email: "", tag: null }),
        s = r(!1),
        u = r(null);
      function m() {
        var i;
        (o.value = { fullName: "", phone: "", email: "", tag: null }),
          (i = V.getInstance(u.value)) == null || i.hide();
      }
      function v() {
        (s.value = !0),
          setTimeout(() => {
            p(o.value), m(), (s.value = !1);
          }, 1e3);
      }
      return (i, a) => (
        l(),
        n(
          b,
          null,
          [
            F,
            e(
              "div",
              {
                id: "contactsCreateModal",
                ref_key: "modalRef",
                ref: u,
                class: "modal fade",
                tabindex: "-1",
                "aria-hidden": "true",
              },
              [
                e("div", S, [
                  e("div", q, [
                    w,
                    e("div", T, [
                      e(
                        "form",
                        {
                          id: "createContactForm",
                          onSubmit: g(v, ["prevent"]),
                        },
                        [
                          e("div", B, [
                            A,
                            d(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    a[0] ||
                                    (a[0] = (t) => (o.value.fullName = t)),
                                  type: "text",
                                  id: "fullName",
                                  class: "form-control",
                                  placeholder: "Иванов Иван Иванович",
                                  required: "",
                                },
                                null,
                                512
                              ),
                              [[c, o.value.fullName]]
                            ),
                          ]),
                          e("div", D, [
                            E,
                            e("div", R, [
                              z,
                              d(
                                e(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      a[1] ||
                                      (a[1] = (t) => (o.value.phone = t)),
                                    type: "number",
                                    id: "phone",
                                    class: "form-control",
                                    placeholder: "988888888",
                                    required: "",
                                  },
                                  null,
                                  512
                                ),
                                [[c, o.value.phone]]
                              ),
                            ]),
                          ]),
                          e("div", I, [
                            L,
                            d(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    a[2] || (a[2] = (t) => (o.value.email = t)),
                                  type: "email",
                                  id: "email",
                                  class: "form-control",
                                  placeholder: "ivanov@mail.ru",
                                  required: "",
                                },
                                null,
                                512
                              ),
                              [[c, o.value.email]]
                            ),
                          ]),
                          e("div", j, [
                            G,
                            d(
                              e(
                                "select",
                                {
                                  "onUpdate:modelValue":
                                    a[3] || (a[3] = (t) => (o.value.tag = t)),
                                  class: "form-select",
                                  id: "tags",
                                  required: "",
                                },
                                [
                                  H,
                                  (l(!0),
                                  n(
                                    b,
                                    null,
                                    C(
                                      N(f),
                                      (t) => (
                                        l(),
                                        n(
                                          "option",
                                          { key: t.id, value: t },
                                          x(t.label),
                                          9,
                                          J
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                512
                              ),
                              [[y, o.value.tag]]
                            ),
                          ]),
                        ],
                        40,
                        U
                      ),
                    ]),
                    e("div", K, [
                      e(
                        "button",
                        {
                          disabled: s.value,
                          type: "button",
                          class: "btn btn-light",
                          onClick: m,
                        },
                        " Отмена ",
                        8,
                        O
                      ),
                      e(
                        "button",
                        {
                          disabled: s.value,
                          form: "createContactForm",
                          type: "submit",
                          class: "btn btn-primary",
                        },
                        [
                          M(" Сохранить "),
                          s.value ? (l(), n("div", Q)) : k("", !0),
                        ],
                        8,
                        P
                      ),
                    ]),
                  ]),
                ]),
              ],
              512
            ),
          ],
          64
        )
      );
    },
  });
export { Z as default };
