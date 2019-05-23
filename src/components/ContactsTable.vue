<template>
  <div id="contacts-table">
    <table>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Contact Email</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.number }}</td>
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
  }
};
</script>
