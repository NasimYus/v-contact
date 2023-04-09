<script setup lang="ts">
import { Modal } from 'bootstrap'
import { ref } from 'vue'
import type { TContact } from '@/types/contacts'
import { useContactsStore } from '@/stores/contacts'

type TProps = {
  contact: TContact | null
}
const props = defineProps<TProps>()

const storeEditContact = useContactsStore().editContact
const storeTags = useContactsStore().tags

const newContact = ref<TContact>(JSON.parse(JSON.stringify(props.contact)))
const loading = ref<boolean>(false)
const modalRef = ref(null)

function clearForm(): void {
  newContact.value = JSON.parse(JSON.stringify(props.contact))
  Modal.getInstance(modalRef.value!)?.hide()
}

function updateContact(): void {
  loading.value = true
  setTimeout(() => {
    storeEditContact(newContact.value)
    clearForm()
    loading.value = false
  }, 1000)
}
</script>

<template>
  <button
    type="button"
    class="btn btn-primary btn-sm"
    data-bs-toggle="modal"
    :data-bs-target="`#contactsUpdateModal${contact?.id}`"
  >
    Редактировать
  </button>
  <div
    :id="`contactsUpdateModal${contact?.id}`"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">редактирование контакта</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="updateContactForm" @submit.prevent="updateContact">
            <div class="mb-3">
              <label for="fullName" class="form-label">ФИО</label>
              <input
                v-model="newContact.fullName"
                type="text"
                id="fullName"
                class="form-control"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Номер телефона</label>
              <div class="input-group">
                <span class="input-group-text">+998</span>
                <input
                  v-model="newContact.phone"
                  type="number"
                  id="phone"
                  class="form-control"
                  placeholder="988888888"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email адрес</label>
              <input
                v-model="newContact.email"
                type="email"
                id="email"
                class="form-control"
                placeholder="ivanov@mail.ru"
                required
              />
            </div>
            <div class="mb-3">
              <label for="tags" class="form-label">Теги</label>
              <select v-model="newContact.tag" class="form-select" id="tags" required>
                <option selected :value="{}">Выберите тег</option>
                <option v-for="tag in storeTags" :key="tag.id" :value="tag">{{ tag.label }}</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button :disabled="loading" type="button" class="btn btn-light" @click="clearForm">
            Отмена
          </button>
          <button
            :disabled="loading"
            form="updateContactForm"
            type="submit"
            class="btn btn-primary"
          >
            Сохранить
            <div
              v-if="loading"
              class="spinner-border text-white ms-1 spinner-border-sm"
              role="status"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
