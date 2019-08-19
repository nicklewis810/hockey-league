<template>
  <div>
    <v-toolbar>
      <div class="text-center">
        <v-avatar :tile="true">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
      </div>
      <v-toolbar-title>SUPER PREMIERE LEAGUE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/overview">OVERVIEW</v-btn>
        <v-btn text to="/scores">SCORES</v-btn>
        <v-btn text to="/schedule">SCHEDULE</v-btn>
        <v-btn text to="/standings">STANDINGS</v-btn>
        <v-btn text to="/teams">TEAMS</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <div class="my-2">
          <v-btn small color="primary" @click.stop="showSignupDialog=true">Sign-Up</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="success" @click.stop="showLoginDialog=true">Log-In</v-btn>
        </div>
      </template>
    </v-toolbar>
    <LoginDialog v-model="showLoginDialog" />
    <SignupDialog v-model="showSignupDialog" />
  </div>
</template>

<script>
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";

export default {
  name: "Navbar",
  components: {
    LoginDialog,
    SignupDialog
  },
  data() {
    return {
      showLoginDialog: false,
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
