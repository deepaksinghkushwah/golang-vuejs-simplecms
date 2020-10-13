<template>
  <div class="loginFormContainer">
    <div class="loginFormInner">
      <form class="login" @submit.prevent="login">
        <table class="table table-striped">
          <tbody>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input required v-model="email" type="text" placeholder="Email" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input required v-model="password" type="password" placeholder="Password" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button class="btn btn-primary" type="submit">Login</button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>
<script>
import { AUTH_REQUEST } from "@/store/actions/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "admin@localhost.com",
      password: "123456",
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style scoped>
.loginFormContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginFormInner {
  padding-top: 100px;
  width: 200px;
}
</style>