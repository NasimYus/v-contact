<script setup lang="ts">
import { computed, defineAsyncComponent, watch, ref } from "vue";
import { useContactsStore } from "@/stores/contacts";

const loading = ref<boolean>(false);

const storeContacts = useContactsStore()
let contacts = storeContacts.contacts
const storeFilteredContacts = computed(() => {
  return JSON.stringify(storeContacts.filteredContacts);
});

watch(storeFilteredContacts, () => {
  loading.value = true;
  contacts = storeContacts.filteredContacts;
  loading.value = false;
});

function deleteContact(contactId: number): void {
  storeContacts.deleteContact(contactId);
}

// components
const ContactsCreateModal = defineAsyncComponent(
  () => import("@/components/contacts/ContactsCreateModal.vue")
);
const ContactsFilters = defineAsyncComponent(
  () => import("@/components/contacts/ContactsFilters.vue")
);
</script>
<template>
  <div class="container pt-3">
    <section class="mb-3 d-flex justify-content-between">
      <h2>Контакты</h2>
      <ContactsCreateModal />
    </section>
    <section class="mb-3">
      <ContactsFilters />
    </section>
    <section class="card shadow">
      <div v-if="loading">загрузка...</div>
      <table v-else class="table mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ФИО</th>
            <th scope="col">Номер телефона</th>
            <th scope="col">Email адрес</th>
            <th scope="col">Теги</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="contacts.length">
            <tr v-for="contact in contacts" :key="contact.id">
              <th scope="row">{{ contact.id }}</th>
              <td>
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'contact-detail', params: { id: contact.id } }"
                >
                  {{ contact.fullName }}
                </router-link>
              </td>
              <td>{{ contact.phone }}</td>
              <td>{{ contact.email }}</td>
              <td>
                <span
                  class="badge rounded-pill"
                  :class="`bg-${contact.tag?.color}`"
                  >{{ contact.tag?.label }}</span
                >
              </td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteContact(contact.id ? contact.id : 0)"
                >
                  Удалить
                </button>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td colspan="6" class="text-muted text-center">Нет данных</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </div>
</template>
