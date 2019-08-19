<template>
  <v-app>
    <div>
      <AlertBar />
      <Navbar />

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
