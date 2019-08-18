<template>
  <div>
    <v-carousel cycle height="40" hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-icon medium id="slide-icon" v-text="slide.icon"></v-icon>
            <div v-html="slide.msg" id="text" class="display-2"></div>
            <v-icon medium id="slide-icon" v-text="slide.icon"></v-icon>
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
        {
          icon: "mdi-clipboard-text-outline",
          msg:
            "<STRONG>ATTENTION:</STRONG> SEASON ONE SIGNUPS WILL UNLOCK ON OCTOBER 4TH AT 7:00AM EST"
        },
        {
          icon: "mdi-trophy",
          msg:
            "<STRONG>PLAYOFF ALERT:</STRONG> THE COLUMBUS CLAPPERS ARE THE SEASON 1 SPL PREMIERE LEAGUE CHAMPIONS"
        },
        {
          icon: "mdi-lock",
          msg:
            "<strong>ALERT:</strong> SEASON 2 SIGNUPS WILL BE CLOSING ON DECEMBER 5TH AT 11:59PM EST"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.v-application .display-2 {
  font-size: 0.9rem !important;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}

.v-icon {
  padding-right: 10px;
  padding-left: 10px;
}

.v-sheet {
  border-radius: 0px;
}
</style>
