<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
import { useRoute, useRouter } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'

const router = useRouter()
const route = useRoute()

const id = ref<number>(+route.params.id)

const storeContacts = useContactsStore()
const storeSelectedContact = useContactsStore().selectedContact
storeContacts.getContact(+id.value)

const ContactsUpdateModal = defineAsyncComponent(
  () => import('@/components/contacts/ContactUpdateModal.vue')
)
</script>

<template>
  <div class="container pt-3">
    <div class="card w-50 shadow">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4>{{ storeSelectedContact?.fullName }}</h4>
          <div class="d-flex gap-2">
            <button class="btn btn-light btn-sm" @click="router.back()">Назад</button>
            <ContactsUpdateModal :contact="storeSelectedContact" />
          </div>
        </div>
        <p class="text-muted m-0">
          {{ storeSelectedContact?.phone }}, {{ storeSelectedContact?.email }}
        </p>
        <span class="badge rounded-pill" :class="`bg-${storeSelectedContact?.tag?.color}`">
          {{
            storeSelectedContact?.tag?.label
          }}
        </span>
      </div>
    </div>
  </div>
</template>
