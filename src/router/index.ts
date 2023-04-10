import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "core",
      component: () => import("@/layouts/CoreLayout.vue"),
      meta: {
        title: "Главная",
      },
      redirect: { name: "contacts" },
      children: [
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/contacts/ContactsIndex.vue"),
          meta: {
            title: "Главная",
          },
        },
        {
          path: "/contacts/:id",
          name: "contact-detail",
          component: () => import("@/views/contacts/detail/ContactDetail.vue"),
          props: true,
          meta: {
            title: "контакт",
          },
        },
      ],
    },
  ],
});

export default router;
