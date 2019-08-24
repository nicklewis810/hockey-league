<template>
  <div>
    <v-container>
      <v-row justify="center" justify-sm="center" justify-md="start" justify-lg="start">
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2">
              <v-card-title class="justify-center">TORONTO TURTLES</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75">
                  <img src="~@/assets/logo_turtles.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
                <v-icon small>mdi-arrow-right</v-icon>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.text-center {
  padding: 30px;
}

.v-card__title.justify-center {
  font-weight: 400;
}
</style>