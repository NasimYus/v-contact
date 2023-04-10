<script setup lang="ts">
import { ref } from "vue";
import type { TQuery } from "@/types/contacts";
import { useContactsStore } from "@/stores/contacts";

const storeContacts = useContactsStore();
const query = ref<TQuery>({
  fullName: "",
  phone: "",
  email: "",
  tag: "",
});

function filterByTag(value: string) {
  storeContacts.filterByTag(value);
}

function filterByName(value: string) {
  storeContacts.filterByName(value);
}
function filterByPhone(value: string) {
  storeContacts.filterByPhone(value);
}
function filterByEmail(value: string) {
  storeContacts.filterByEmail(value);
}

function clearFilters() {
  query.value = {
    fullName: "",
    phone: "",
    email: "",
    tag: "",
  };
  storeContacts.clearFilters();
}
</script>
<template>
  <div class="card">
    <div class="card-body">
      <form class="row row-cols-12 mb-2">
        <div class="col-3">
          <label for="fullName" class="form-label">ФИО</label>
          <input
            @input="filterByName(query.fullName)"
            :disabled="!storeContacts.contacts.length"
            v-model="query.fullName"
            type="text"
            id="fullName"
            class="form-control"
            placeholder="Иванов Иван Иванович"
            required
          />
        </div>
        <div class="col-3">
          <label for="phone" class="form-label">Номер телефона</label>
          <input
            @input="filterByPhone(query.phone)"
            :disabled="!storeContacts.contacts.length"
            v-model="query.phone"
            type="number"
            id="phone"
            class="form-control"
            placeholder="998888888"
            required
          />
        </div>
        <div class="col-3">
          <label for="email" class="form-label">Email адрес</label>
          <input
            @input="filterByEmail(query.email)"
            :disabled="!storeContacts.contacts.length"
            v-model="query.email"
            type="email"
            id="email"
            class="form-control"
            placeholder="ivanov@mail.ru"
            required
          />
        </div>
        <div class="col-3">
          <label for="tags" class="form-label">Теги</label>
          <select
            @change="filterByTag(query.tag)"
            :disabled="!storeContacts.contacts.length"
            v-model="query.tag"
            class="form-select"
            id="tags"
            required
          >
            <option selected :value="''">Выберите тег</option>
            <option
              v-for="tag in storeContacts.tags"
              :key="tag.id"
              :value="tag.id"
            >
              {{ tag.label }}
            </option>
          </select>
        </div>
      </form>
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-dark" @click="clearFilters">
          Очистить фильтры
        </button>
      </div>
    </div>
  </div>
</template>
