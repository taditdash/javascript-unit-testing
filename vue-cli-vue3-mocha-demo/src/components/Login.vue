<template>
  <div class="card" style="width: 400px; margin: auto">
    <div class="title">Login</div>
    <div class="container text-left">
      <p>Email: <input type="text" v-model="email"></p>
      <p class="error">{{emailError}}</p>
      <p>Password: <input type="password" v-model="password"></p>
      <p class="error">{{passwordError}}</p>
    </div>
    <div class="error">{{signupError}}</div>
    <div class="action-buttons">
      <input type="button" value="Login" @click="login">
    </div>
  </div>
</template>

<script>
const Users = [{
  "email": "taditdash@gmail.com",
  "password": "123456"
}];

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      signupError: ""
    }
  },
  methods: {
    login() {
      this.emailError = "";
      this.passwordError = "";
      this.signupError = "";

      // Validate for blank
      if (!this.email.trim()) {
        this.emailError = "Enter your email";
      } else if (!this.validateEmail(this.email.trim())) {
        // Validate for proper email address
        this.emailError = "Email is not valid";
      }

      if (!this.password) {
        this.passwordError = "Enter your password";
      } else if (this.password.length < 6) {
        // Validate for proper password with minimum 6 chars
        this.passwordError = "Your password should be minimum 6 characters";
      }

      if (this.emailError || this.passwordError) return;

      let vm = this;

      // Match with database, for now from static data.
      let userFound = Users.find(u => u.email == vm.email.trim() && u.password == vm.password);

      if (!userFound) this.signupError = "Email or password is not correct";

      if (this.signupError) return;

      // Now submit and emit login successful event
      this.$emit("onSuccess", { email: userFound.email });
    },
    validateEmail (emailAdress) {
      let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      if (emailAdress.match(regexEmail)) {
        return true; 
      } else {
        return false; 
      }
    }
  }
}
</script>