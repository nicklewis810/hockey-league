<template>
  <div>
    <v-container class="header-container">
      <v-card elevation="0">
        <v-row justify="space-between">
          <v-col xl="6" lg="6" md="6" sm="6" cols="9">
            <v-card-title class="teamheader">PREMIER LEAGUE TEAMS</v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="button-col" cols="12" sm="4" xl="4" lg="4" md="4">
            <v-overflow-btn
              class="my-1"
              :items="dropdown_icon"
              label="Season"
              segmented
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
          <v-col class="button-col" cols="12" sm="4" xl="4" lg="4" md="4">
            <v-overflow-btn
              class="my-1"
              :items="dropdown_icon"
              label="Division"
              segmented
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-card__title {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 2rem;
  padding: 16px 20px 0px;
  color: #4f4f4f;
}

#teamsheader {
  color: #4f4f4f;
  font-weight: 500;
}

.v-card__text {
  font-size: 1rem;
  font-weight: 400;
  color: #4f4f4f;
}

.header-container {
  margin-top: 50px;

  padding: 0px;
  outline: 1px solid #e0e0e0;
}

.card-container {
  padding-top: 0px;
  margin-top: 0px;
}

.button-col {
  padding-left: 32px;
  padding-top: 32px;
}
</style>
