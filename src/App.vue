<template>
  <div id="app" class="small-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Vue.js Phone Book App</h1>

    <contacts-table
      v-bind:contacts="contacts"
      @delete:contact="deleteContact"
      @edit:contact="updateContact"
    />

    <contact-form @add:contact="addContact"/>
  </div>
</template>

<script>
import ContactsTable from "./components/ContactsTable.vue";

import ContactForm from "./components/ContactForm.vue";

export default {
  name: "app",
  components: {
    ContactsTable,
    ContactForm
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Richard Hendricks",
          email: "richard@piedpiper.com",
          number: "8875695251"
        },
        {
          id: 2,
          name: "Bertram Gilfoyle",
          email: "gilfoyle@piedpiper.com",
          number: "8875695251"
        },
        {
          id: 3,
          name: "Dinesh Chugtai",
          email: "dinesh@piedpiper.com"
        }
      ]
    };
  },
  methods: {
    addContact(contact) {
      const lastId =
        this.contacts.length > 0
          ? this.contacts[this.contacts.length - 1].id
          : 0;
      const id = lastId + 1;
      const newContact = { ...contact, id };

      this.contacts = [...this.contacts, newContact];
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    },
    updateContact(id, updatedContact) {
        this.contacts = this.contacts.map(contact =>
    contact.id === id ? updatedContact : contact);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: #009435;
  border: 1px solid #009435;
}

</style>
