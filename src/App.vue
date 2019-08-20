<template>
  <v-app>
    <div>
      <container>
        <AlertBar />
        <Navbar />
      </container>

      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import AlertBar from "./components/AlertBar";

export default {
  name: "App",
  components: {
    Navbar,
    AlertBar
  },
  data: () => ({
    //
  })
};
</script>


<style lang="stylus" scoped>
body {
  background-color: black;
}
</style>