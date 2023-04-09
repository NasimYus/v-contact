import { defineStore } from 'pinia'
import type { TContact, TTag } from '@/types/contacts'
type TState = {
  lastNumberOfId: number
  contacts: TContact[]
  tags: TTag[]
  filteredContacts: TContact[]
  selectedContact: TContact | null
}

type TActions = {
  filterContacts: (data: { key: string; value?: string | TTag }) => void
  addContact: (contact: TContact) => void
  getContact: (id: number | string) => void
  editContact: (contact: TContact) => void
  deleteContact: (contactId: number) => void
  getLastNumberOfId: () => void
}
export const useContactsStore = defineStore<string, TState, Record<string, never>, TActions>(
  'contacts',
  {
    state: () => ({
      lastNumberOfId: 0,
      contacts: [],
      tags: [
        {
          label: 'Семья',
          color: 'primary',
          id: 1
        },
        {
          label: 'Работа',
          color: 'success',
          id: 2
        },
        {
          label: 'Университет',
          color: 'light',
          id: 3
        },
        {
          label: 'Друзья',
          color: 'warning',
          id: 4
        },
        {
          label: 'Спортзал',
          color: 'danger',
          id: 5
        }
      ],
      filteredContacts: [],
      selectedContact: null
    }),

    actions: {
      filterContacts(data) {
        if (data.key === 'clear') {
          this.filteredContacts = JSON.parse(JSON.stringify(this.contacts))
        } else if (data.key === 'tag') {
          this.filteredContacts = this.contacts.filter((contact) => contact.tag.id === data.value)
        } else {
          this.filteredContacts = this.contacts.filter((contact) =>
            contact[data.key].includes(data.value)
          )
        }
      },
      getContact(id) {
        this.contacts.forEach((contact) => {
          if (contact.id === id) {
            this.selectedContact = contact
          }
        })
      },
      addContact(contact) {
        this.getLastNumberOfId()
        this.contacts.unshift({ ...contact, id: this.lastNumberOfId })
      },
      editContact(updatedContact) {
        const contactIndex: number = this.contacts.findIndex(
          (contact: TContact) => contact.id === updatedContact.id
        )
        this.contacts.splice(contactIndex, 1, updatedContact)
        this.selectedContact = updatedContact
      },
      deleteContact(contactId) {
        const contactIndex: number = this.contacts.findIndex(
          (contact: TContact) => contact.id === contactId
        )
        this.contacts.splice(contactIndex, 1)
      },
      getLastNumberOfId() {
        if (this.contacts.length) {
          const lastContactIndex = this.contacts.length - 1
          this.lastNumberOfId = this.contacts[lastContactIndex]?.id! + 1
        } else {
          this.lastNumberOfId = 1
        }
      }
    }
  }
)
