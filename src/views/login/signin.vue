<template>
  <login class="mt-5">
    <template v-slot:email>
      <input
        type="text"
        name="email"
        v-model.trim="email"
        id="email"
        :class="['form-control', { error: emailError }]"
      />
      <small class="text-danger pl-2">{{ emailError }}</small>
    </template>
    <template v-slot:password>
      <input
        type="password"
        v-model.trim="password"
        name="password"
        id="password"
        :class="['form-control', { error: passwordError }]"
      />
      <small class="text-danger pl-2">{{ passwordError }}</small>
    </template>
    <template v-slot:button>
      <button class="btn btn-success my-3" @click.prevent="login">Login</button>
    </template>
  </login>
</template>

<script>
import { ref, watch } from "vue";
import Login from "../../components/Login.vue";
import FormValidation from "../../operations/FormValidation";
export default {
  components: { Login },
  setup() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    watch(email, (to, from) => {
      const formCheck = new FormValidation(to);
      const error = formCheck.emailControl();
      if (error) {
        emailError.value = error;
        return true;
      } else {
        emailError.value = "";
        return false;
      }
    });

    watch(password, (to, from) => {
      const formCheck = new FormValidation(undefined, to);
      const error = formCheck.passwordControl();
      if (error) passwordError.value = error;
      else passwordError.value = "";
    });
    function login() {
      const formCheck = new FormValidation(email.value, password.value);
      const err = formCheck.lastValidation();
      if (("email" in err)) emailError.value = err.email;
      if (("password" in err)) passwordError.value = err.password;
    }

    return {
      email,
      password,
      emailError,
      passwordError,
      login,
    };
  },
};
</script>

<style>
.error {
  border: 1px solid red !important;
}
</style>
