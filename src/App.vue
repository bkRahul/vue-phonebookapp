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
      contacts: []
    };
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?length=5"
        );
        const data = await response.json()
        this.contacts = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addContact(contact) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(contact),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.contacts = [...this.contacts, data];
      } catch (error) {
        console.error(error);
      }
    },
    async deleteContact(id) {
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "DELETE"
          }
        );
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      } catch (error) {
        console.error(error);
      }
    },

    async updateContact(id, updatedContact) {
            try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedContact),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
      this.contacts = this.contacts.map(contact =>
        (contact.id === id ? data : contact))
  } catch (error) {
    console.error(error);
  }
}
  }
}
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

.small-container {
  max-width: 1200px;
}
</style>