<template>
  <div class="table-container">
    <h1>My Contacts</h1>
    <table data-testid="table-contacts">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Mobile</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :data-testid="'row-' + row.Id" v-for="row in dataRows" :key="row.Id">
          <td>{{ row.FirstName }}</td>
          <td>{{ row.LastName }}</td>
          <td>{{ row.Mobile }}</td>
          <td>
            <button :data-testid="'btn-delete-' + row.Id" class="delete" @click="deleteContact(row.Id)">
              DELETE
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr v-if="!dataRows || dataRows.length == 0">
          <td colspan="4" style="text-align: center">
            No Data Found
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "ContactsTable",
  props: {
    dataRows: Array
  },
  methods: {
    deleteContact(id) {
      this.$emit('onRowDelete', id);
    }
  }
}
</script>

<style>
  .table-container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  button {
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  table button.delete {
    background-color: red; 
    color: white;
  }
</style>