import { s as c } from "./index-ec3162aa.js";
const n = c("contacts", {
  state: () => ({
    lastNumberOfId: 0,
    contacts: [],
    tags: [
      { label: "Семья", color: "primary", id: 1 },
      { label: "Работа", color: "success", id: 2 },
      { label: "Университет", color: "light", id: 3 },
      { label: "Друзья", color: "warning", id: 4 },
      { label: "Спортзал", color: "danger", id: 5 },
    ],
    filteredContacts: [],
    selectedContact: null,
  }),
  actions: {
    filterContacts(t) {
      t.key === "clear"
        ? (this.filteredContacts = JSON.parse(JSON.stringify(this.contacts)))
        : t.key === "tag"
        ? (this.filteredContacts = this.contacts.filter(
            (s) => s.tag.id === (t == null ? void 0 : t.value)
          ))
        : (this.filteredContacts = this.contacts.filter((s) =>
            s[t.key].includes(t.value)
          ));
    },
    getContact(t) {
      this.contacts.forEach((s) => {
        s.id === t && (this.selectedContact = s);
      });
    },
    addContact(t) {
      this.getLastNumberOfId(),
        this.contacts.unshift({ ...t, id: this.lastNumberOfId });
    },
    editContact(t) {
      const s = this.contacts.findIndex((e) => e.id === t.id);
      this.contacts.splice(s, 1, t), (this.selectedContact = t);
    },
    deleteContact(t) {
      const s = this.contacts.findIndex((e) => e.id === t);
      this.contacts.splice(s, 1);
    },
    getLastNumberOfId() {
      var t;
      if (this.contacts.length) {
        const s = this.contacts.length - 1;
        this.lastNumberOfId =
          ((t = this.contacts[s]) == null ? void 0 : t.id) + 1;
      } else this.lastNumberOfId = 1;
    },
  },
});
export { n as u };
