import {
  f as N,
  g as r,
  o as l,
  c as n,
  b as t,
  v as x,
  x as d,
  y as u,
  z as S,
  F as v,
  k as M,
  t as k,
  u as U,
  l as V,
  A as F,
  M as q,
} from "./index-ec3162aa.js";
import { u as h } from "./contacts-48eebbc6.js";
const w = ["data-bs-target"],
  J = ["id"],
  O = { class: "modal-dialog" },
  T = { class: "modal-content" },
  B = t(
    "div",
    { class: "modal-header" },
    [
      t("h5", { class: "modal-title" }, "редактирование контакта"),
      t("button", {
        type: "button",
        class: "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close",
      }),
    ],
    -1
  ),
  E = { class: "modal-body" },
  D = ["onSubmit"],
  R = { class: "mb-3" },
  $ = t("label", { for: "fullName", class: "form-label" }, "ФИО", -1),
  z = { class: "mb-3" },
  A = t("label", { for: "phone", class: "form-label" }, "Номер телефона", -1),
  I = { class: "input-group" },
  L = t("span", { class: "input-group-text" }, "+998", -1),
  j = { class: "mb-3" },
  G = t("label", { for: "email", class: "form-label" }, "Email адрес", -1),
  H = { class: "mb-3" },
  K = t("label", { for: "tags", class: "form-label" }, "Теги", -1),
  P = t("option", { selected: "", value: null }, "Выберите тег", -1),
  Q = ["value"],
  W = { class: "modal-footer" },
  X = ["disabled"],
  Y = ["disabled"],
  Z = {
    key: 0,
    class: "spinner-border text-white ms-1 spinner-border-sm",
    role: "status",
  },
  ot = N({
    __name: "ContactUpdateModal",
    props: { contact: null },
    setup(i) {
      const m = i,
        g = h().editContact,
        y = h().tags,
        o = r(JSON.parse(JSON.stringify(m.contact))),
        a = r(!1),
        p = r(null);
      function b() {
        var c;
        (o.value = JSON.parse(JSON.stringify(m.contact))),
          (c = q.getInstance(p.value)) == null || c.hide();
      }
      function C() {
        (a.value = !0),
          setTimeout(() => {
            g(o.value), b(), (a.value = !1);
          }, 1e3);
      }
      return (c, s) => {
        var _, f;
        return (
          l(),
          n(
            v,
            null,
            [
              t(
                "button",
                {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  "data-bs-toggle": "modal",
                  "data-bs-target": `#contactsUpdateModal${
                    (_ = i.contact) == null ? void 0 : _.id
                  }`,
                },
                " Редактировать ",
                8,
                w
              ),
              t(
                "div",
                {
                  id: `contactsUpdateModal${
                    (f = i.contact) == null ? void 0 : f.id
                  }`,
                  ref_key: "modalRef",
                  ref: p,
                  class: "modal fade",
                  tabindex: "-1",
                  "aria-hidden": "true",
                },
                [
                  t("div", O, [
                    t("div", T, [
                      B,
                      t("div", E, [
                        t(
                          "form",
                          {
                            id: "updateContactForm",
                            onSubmit: x(C, ["prevent"]),
                          },
                          [
                            t("div", R, [
                              $,
                              d(
                                t(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      s[0] ||
                                      (s[0] = (e) => (o.value.fullName = e)),
                                    type: "text",
                                    id: "fullName",
                                    class: "form-control",
                                    placeholder: "Иванов Иван Иванович",
                                    required: "",
                                  },
                                  null,
                                  512
                                ),
                                [[u, o.value.fullName]]
                              ),
                            ]),
                            t("div", z, [
                              A,
                              t("div", I, [
                                L,
                                d(
                                  t(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        s[1] ||
                                        (s[1] = (e) => (o.value.phone = e)),
                                      type: "number",
                                      id: "phone",
                                      class: "form-control",
                                      placeholder: "988888888",
                                      required: "",
                                    },
                                    null,
                                    512
                                  ),
                                  [[u, o.value.phone]]
                                ),
                              ]),
                            ]),
                            t("div", j, [
                              G,
                              d(
                                t(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      s[2] ||
                                      (s[2] = (e) => (o.value.email = e)),
                                    type: "email",
                                    id: "email",
                                    class: "form-control",
                                    placeholder: "ivanov@mail.ru",
                                    required: "",
                                  },
                                  null,
                                  512
                                ),
                                [[u, o.value.email]]
                              ),
                            ]),
                            t("div", H, [
                              K,
                              d(
                                t(
                                  "select",
                                  {
                                    "onUpdate:modelValue":
                                      s[3] || (s[3] = (e) => (o.value.tag = e)),
                                    class: "form-select",
                                    id: "tags",
                                    required: "",
                                  },
                                  [
                                    P,
                                    (l(!0),
                                    n(
                                      v,
                                      null,
                                      M(
                                        U(y),
                                        (e) => (
                                          l(),
                                          n(
                                            "option",
                                            { key: e.id, value: e },
                                            k(e.label),
                                            9,
                                            Q
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  512
                                ),
                                [[S, o.value.tag]]
                              ),
                            ]),
                          ],
                          40,
                          D
                        ),
                      ]),
                      t("div", W, [
                        t(
                          "button",
                          {
                            disabled: a.value,
                            type: "button",
                            class: "btn btn-light",
                            onClick: b,
                          },
                          " Отмена ",
                          8,
                          X
                        ),
                        t(
                          "button",
                          {
                            disabled: a.value,
                            form: "updateContactForm",
                            type: "submit",
                            class: "btn btn-primary",
                          },
                          [
                            V(" Сохранить "),
                            a.value ? (l(), n("div", Z)) : F("", !0),
                          ],
                          8,
                          Y
                        ),
                      ]),
                    ]),
                  ]),
                ],
                8,
                J
              ),
            ],
            64
          )
        );
      };
    },
  });
export { ot as default };
