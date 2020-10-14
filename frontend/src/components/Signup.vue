<template>
  <div class="loginFormContainer">
    <div class="loginFormInner">
      <h1>Signup</h1>
      <table class="table table-bordered">
        <tr>
          <td>
            <input type="email" placeholder="Email" v-model="user.Email" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="password" placeholder="Password" v-model="user.Password" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="First Name" v-model="user.FirstName" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="Last Name" v-model="user.LastName" />
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-primary" @click="signup">Signup</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { AUTH_SIGNUP } from "@/store/actions/auth.js";
export default {
  name: "Signup",
  data() {
    return {
      user: {
        Email: "deepak@localhost.com",
        Password: "123456",
        FirstName: "Deepak",
        LastName: "Kushwah",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch(AUTH_SIGNUP, this.user).then((resp) => {
        alert(resp.data.msg);
        if (resp.data.status == 1) {
          this.user.Email = "";
          this.user.Password = "";
          this.user.FirstName = "";
          this.user.LastName = "";
        }
      });
    },
  },
};
</script>