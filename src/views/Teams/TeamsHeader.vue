<template>
  <div>
    <v-container class="header-container">
      <v-row justify="space-between" align-items="flex-end">
        <v-col xl="6" lg="6" md="6" sm="6" cols="9">
          <v-card-title class="teamheader">PREMIER LEAGUE TEAMS</v-card-title>
          <v-card-text>SEASON ONE</v-card-text>
        </v-col>
        <v-col class="button-col" cols="12" sm="4" xl="4" lg="4" md="4">
          <v-overflow-btn
            class="my-1"
            :items="dropdown_icon"
            label="Select Division"
            segmented
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-card__title {
  font-weight: 500;
  letter-spacing: normal;
  line-height: 2rem;
  padding: 4px 16px 8px;
  color: #4f4f4f;
}

.v-card__text {
  font-size: 1rem;
  font-weight: 400;
  color: #4f4f4f;
}

.header-container {
  margin-top: 50px;
  padding-bottom: 0px;
}

.card-container {
  padding-top: 0px;
  margin-top: 0px;
}
</style>
