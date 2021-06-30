<template>
  <div class="hello">
    <h1>todos</h1>
    <input
      type="text"
      v-model="newTodoTitle"
      data-cy="newTodoTitle">

    <button
      @click="addTodo"
      data-cy="addTodo"
    >
      Add</button>
    
    <p>{{ error }}</p>
    
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-cy="todos"
    >
      <input type="checkbox" v-model="todo.complete" />
      {{ todo.title }}
      <button
        @click="editTodo(todo.id)"
        data-cy="editTodo"
      >
      Edit</button>
      
      <button 
        @click="deleteTodo(todo.id)"
        :data-cy="'deleteTodo-' + todo.id"
      >
        Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todos: Array
  },
  data() {
    return {
      newTodoTitle: "",
      error: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoTitle.trim())
        this.$emit('onAdd', this.newTodoTitle.trim());
      else
        this.error = "Please add a title for the todo.";
    },
    editTodo() {

    },
    deleteTodo(id) {
      this.$emit('onDelete', id);
    }
  }
}
</script>

<style scoped>

</style>
