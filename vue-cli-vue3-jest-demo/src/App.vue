<template>
  <login v-if="!isLoginSuccessful" @onSuccess="onSuccessfulLogin"></login>
  <dashboard v-if="isLoginSuccessful" :email="email" />

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login,
    Dashboard
  },
  data() {
    return {
      isLoginSuccessful: false,
      email: ""
    }
  },
  methods: {
    onSuccessfulLogin(payload) {
      this.isLoginSuccessful = true;
      this.email = payload.email;
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

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }

  .card .action-buttons {
    padding: 20px 16px;
  }

  .card .title {
    font-size: 40px;
    padding: 10px;
  }

  .text-left {
    text-align: left;
  }

  input[type=button] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  .error {
    color: red;
  }
</style>
