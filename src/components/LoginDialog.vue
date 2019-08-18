<template>
  <v-dialog v-model="show" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            prepend-icon="mdi-lock-question"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="success" @click="show= false">Login</v-btn>

        <v-btn color="green darken-1" text @click="showSignup">Sign-up</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" text @click="show= false">Close</v-btn>
      </v-card-actions>
    </v-card>
    <SignupDialog v-model="showSignupDialog" />
  </v-dialog>
</template>

<script>
import SignupDialog from "./SignupDialog";

export default {
  components: {
    SignupDialog
  },
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    showSignup() {
      this.show = false;
      this.showSignupDialog = true;
      console.log("it's doing something");
    }
  },
  data() {
    return {
      showSignupDialog: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.v-btn:not(.v-btn--round).v-size--small {
  margin-left: 10px;
}

.v-toolbar__items {
  margin-right: 10px;
}
</style>