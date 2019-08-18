<template>
  <div>
    <v-carousel cycle height="50" hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div id="text" class="display-2">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["success", "primary", "red lighten-1"],
      slides: [
        "ATTENTION PLAYERS! - SEASON 1 BEGINS ON SEPTEMBER 20TH, 2019",
        "CONGRATULATIONS TO THE DONG STOMPERS ON WINNING THE SEASON ONE SPL PREMIERE LEAGUE CHAMPIONSHIP!!!",
        "ATTENTION PLAYERS! - SIGNUPS FOR SEASON 2 WILL LOCK ON JANUARY 2ND 2019 AT 8PM"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.v-application .display-2 {
  font-size: 0.95rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
