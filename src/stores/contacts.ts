import { defineStore } from "pinia";
import type { TContact, TTag } from "@/types/contacts";

type TState = {
  lastNumberOfId: number;
  contacts: TContact[];
  tags: TTag[];
  filteredContacts: TContact[];
  selectedContact: TContact | null;
};

type TActions = {
  filterByName: (value:  string ) => void;
  filterByPhone: (value:  string ) => void;
  filterByEmail: (value:  string ) => void;
  filterByTag: (value:  string ) => void;
  clearFilters: () => void;
  addContact: (contact: TContact) => void;
  getContact: (id: number | string) => void;
  editContact: (contact: TContact) => void;
  deleteContact: (contactId: number) => void;
  getLastNumberOfId: () => void;
};

export const useContactsStore = defineStore<
  string,
  TState,
  Record<string, never>,
  TActions
>("contacts", {
  state: () => ({
    lastNumberOfId: 0,
    contacts: [],
    tags: [
      {
        label: "Семья",
        color: "primary",
        id: 1,
      },
      {
        label: "Работа",
        color: "success",
        id: 2,
      },
      {
        label: "Университет",
        color: "secondary",
        id: 3,
      },
      {
        label: "Друзья",
        color: "warning",
        id: 4,
      },
      {
        label: "Спортзал",
        color: "danger",
        id: 5,
      },
    ],
    filteredContacts: [],
    selectedContact: null,
  }),

  actions: {
    filterByName(value) {
        this.filteredContacts = this.contacts.filter((contact) =>
          contact.fullName
            .toLowerCase()
            .includes(value.toString().toLowerCase())
        );
    },

    filterByPhone(value) {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.phone.toString().includes(value.toString())
      );
    },

    filterByEmail(value) {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.email
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      );
    },

    filterByTag(value) {
      this.filteredContacts = this.contacts.filter(
        (contact) => contact?.tag?.id.toString() === value?.toString()
      );
    },

    clearFilters() {
      this.filteredContacts = JSON.parse(JSON.stringify(this.contacts));
    },

    getContact(id) {
      this.contacts.forEach((contact) => {
        if (contact.id === id) {
          this.selectedContact = contact;
        }
      });
    },

    addContact(contact) {
      this.getLastNumberOfId();
      this.contacts.unshift({ ...contact, id: this.lastNumberOfId });
    },

    editContact(updatedContact) {
      const contactIndex: number = this.contacts.findIndex(
        (contact: TContact) => contact.id === updatedContact.id
      );
      this.contacts.splice(contactIndex, 1, updatedContact);
      this.selectedContact = updatedContact;
    },

    deleteContact(contactId) {
      const contactIndex: number = this.contacts.findIndex(
        (contact: TContact) => contact.id === contactId
      );
      this.contacts.splice(contactIndex, 1);
    },

    getLastNumberOfId() {
      if (this.contacts.length) {
        const lastContactIndex = this.contacts.length - 1;
        this.lastNumberOfId = this.contacts[lastContactIndex]?.id! + 1;
      } else {
        this.lastNumberOfId = 1;
      }
    },
  },
});
