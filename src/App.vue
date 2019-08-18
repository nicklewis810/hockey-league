<template>
  <v-app>
    <div>
      <AlertBar />
      <Navbar />
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
