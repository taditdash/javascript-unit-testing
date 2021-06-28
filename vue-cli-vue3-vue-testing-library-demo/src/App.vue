<template>
  <contacts-table
    :dataRows="contacts"
    @onRowDelete="deleteContact"
  ></contacts-table>

  <p>{{ errorMessage }}</p>
</template>

<script>
import ContactsTable from './components/ContactsTable.vue'

export default {
  name: 'App',
  components: {
    ContactsTable
  },
  data() {
    return {
      errorMessage: "",
      contacts: [
        {
          "Id": 1,
          "FirstName": "Tadit",
          "LastName": "Dash",
          "Mobile": "9132994288"
        },
        {
          "Id": 2,
          "FirstName": "Pravasini",
          "LastName": "Sahoo",
          "Mobile": "1234567890"
        },
        {
          "Id": 3,
          "FirstName": "Subodh",
          "LastName": "Sahu",
          "Mobile": "9087654321"
        },
        {
          "Id": 4,
          "FirstName": "Tan",
          "LastName": "Biswal",
          "Mobile": "9087345321"
        },
        {
          "Id": 5,
          "FirstName": "Abhijit",
          "LastName": "Pattanaik",
          "Mobile": "9087000321"
        }
      ]
    };
  },
  methods: {
    deleteContact(id) {
      this.errorMessage = "";
      
      let deleteContactIndex = this.contacts.findIndex(x => x.Id == id);

      if (deleteContactIndex > -1) {
        this.contacts.splice(deleteContactIndex, 1);
      } else {
        // Show error
        this.errorMessage = "This contact does not exist";
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
