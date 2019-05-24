<template>
  <div id="contacts-table">
    <p v-if="contacts.length < 1" class="empty-table">No contacts</p>
    <table v-else>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Contact Email</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td v-if="editing === contact.id">
            <input type="text" v-model="contact.name">
          </td>
          <td v-else>{{ contact.name }}</td>
          <td v-if="editing === contact.id">
            <input type="email" v-model="contact.email">
          </td>
          <td v-else>{{ contact.email }}</td>
          <td v-if="editing === contact.id">
            <input type="tel" size="20" minlength="10" maxlength="10" v-model="contact.phone">
          </td>
          <td v-else>{{ contact.phone }}</td>
          <td v-if="editing === contact.id">
            <button @click="editContact(contact)">Save</button>
            <button class="muted-button" @click="editing = null">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(contact.id)">Edit</button>
            <button @click="$emit('delete:contact', contact.id);">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contacts-table",
  props: {
    contacts: Array
  },
  data() {
    return {
      editing: null
    };
  },
  methods: {
    editMode(id) {
      this.editing = id;
    },
    editContact(contact) {
      if (this.name === "" || this.email === "" || this.phone === "") return;
      this.$emit("edit:contact", contact.id, contact);
      this.editing = null;
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}
</style>