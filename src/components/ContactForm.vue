<template>
  <div id="contact-form">
    <form @submit.prevent="onsubmit">
      <label>Contact name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="contact.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label>Contact Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="contact.email"
        @focus="clearStatus"
      >

      <label>Contact Number</label>
      <input
        type="tel" minlength="10" maxlength="10" pattern="[0-9]{10}"
        :class="{ 'has-error': submitting && invalidNumber }"
        v-model="contact.phone"
        @focus="clearStatus"
      >
      <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Contact successfully added</p>
      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      contact: {
        name: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    onsubmit() {
      this.clearStatus();
      this.submitting = true;

      if (this.invalidName || this.invalidEmail || this.invalidNumber) {
        this.error = true;
        return;
      }

      this.$emit("add:contact", this.contact);
      this.contact = {
        name: "",
        email: "",
        phone: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;

      this.$refs.first.focus();
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidName() {
      return this.contact.name === "";
    },

    invalidEmail() {
      return this.contact.email === "";
    },

    invalidNumber() {
      return this.contact.phone === "";        
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}

#contact-form {
  max-width: 500px;
  margin: 0 auto;
}
</style>