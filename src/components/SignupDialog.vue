<template>
  <v-dialog v-model="show" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Sign-up</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            label="Username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock-question"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="success" @click="show= false">Sign-up</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" text @click="show= false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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
data() {
    return {
      valid: '',
      username: '',
      password: '',
    }
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