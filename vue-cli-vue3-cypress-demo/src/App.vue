<template>
  <todo
    :todos="todos"
    @onAdd="addTodo"
    @onDelete="deleteTodo"
  ></todo>
</template>

<script>
import Todo from "./components/Todo.vue"

export default {
  name: 'App',
  components: {
    Todo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(title) {
      let maxId = this.todos.length > 0
        ? this.todos[this.todos.length - 1].id
        : 0;

      this.todos.push({
        id: maxId + 1,
        title: title
      });
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(x => x.id == id), 1);
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
