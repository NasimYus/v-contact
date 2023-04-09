<script setup lang="ts">
import { ref } from 'vue'
import type { TTag, TQuery } from '@/types/contacts'
import { useContactsStore } from '@/stores/contacts'

const storeContacts = useContactsStore().contacts
const storeFilterContacts = useContactsStore().filterContacts
const storeTags = useContactsStore().tags

const query = ref<TQuery>({
  fullName: '',
  phone: '',
  email: '',
  tag: ''
})

function filterContacts(data: { key: string; value: string | TTag }) {
  if (data.key === 'clear') {
    query.value = {
      fullName: '',
      phone: '',
      email: '',
      tag: ''
    }
  }
  storeFilterContacts(data)
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <form class="row row-cols-12 mb-2">
        <div class="col-3">
          <label for="fullName" class="form-label">ФИО</label>
          <input
            @input="filterContacts({ key: 'fullName', value: query.fullName })"
            :disabled="!storeContacts.length"
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
            @input="filterContacts({ key: 'phone', value: query.phone })"
            :disabled="!storeContacts.length"
            v-model="query.phone"
            type="number"
            id="phone"
            class="form-control"
            placeholder="998888888"
            required
          />
        </div>
        <div @input="filterContacts({ key: 'email', value: query.email })" class="col-3">
          <label for="email" class="form-label">Email адрес</label>
          <input
            :disabled="!storeContacts.length"
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
            @change="filterContacts({ key: 'tag', value: query.tag })"
            :disabled="!storeContacts.length"
            v-model="query.tag"
            class="form-select"
            id="tags"
            required
          >
            <option selected :value="{}">Выберите тег</option>
            <option v-for="tag in storeTags" :key="tag.id" :value="tag.id">{{ tag.label }}</option>
          </select>
        </div>
      </form>
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-dark" @click="filterContacts({ key: 'clear', value: '' })">
          Очистить фильтры
        </button>
      </div>
    </div>
  </div>
</template>
