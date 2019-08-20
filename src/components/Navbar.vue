<template>
  <div>
    <v-app-bar color="blue-grey darken-4" dark>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-divider class="mx-2" inset vertical v-if="$vuetify.breakpoint.mdAndDown"></v-divider>

      <v-avatar :tile="true">
        <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
      </v-avatar>

      <v-toolbar-title class>SUPER PREMIERE LEAGUE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn text to="/overview">OVERVIEW</v-btn>
        <v-btn text to="/scores">SCORES</v-btn>
        <v-btn text to="/schedule">SCHEDULE</v-btn>
        <v-btn text to="/standings">STANDINGS</v-btn>
        <v-btn text to="/teams">TEAMS</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn small color="primary" @click.stop="showSignupDialog=true">Sign-Up</v-btn>
        <v-btn small color="success" @click.stop="showLoginDialog=true">Login</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item>
          <v-btn text to="/overview">SPL</v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn text to="/overview">OVERVIEW</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text to="/scores">SCORES</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text to="/schedule">SCHEDULE</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text to="/standings">STANDINGS</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text to="/teams">TEAMS</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      showSignupDialog: false,
      drawer: null
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
