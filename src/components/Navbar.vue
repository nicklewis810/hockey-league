<template>
  <div>
    <v-toolbar>
      <div class="text-center">
        <v-avatar :tile="true">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
      </div>
      <v-toolbar-title>SUPER PREMIERE LEAGUE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>OVERVIEW</v-btn>
        <v-btn text>SCHEDULE</v-btn>
        <v-btn text>STANDINGS</v-btn>
        <v-btn text>TEAMS</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <div class="my-2">
          <v-btn small color="primary">Sign-Up</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="success">Log-In</v-btn>
        </div>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
