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
    <v-container></v-container>
    <v-container class="card-container">
      <v-row
        justify="center"
        justify-sm="center"
        justify-md="start"
        justify-lg="start"
      >
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>This is only a test</v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="4" sm="5" cols="9">
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>This is only a test</v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="4" sm="5" cols="9">
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>This is only a test</v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="4" sm="5" cols="9">
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>This is only a test</v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="4" sm="5" cols="9">
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>This is only a test</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teamheader {
  color: #4f4f4f;
}

element.style {
}
<style > .teamheader[data-v-70783ae2] {
  color: #4f4f4f;
}
.v-card__title {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 2rem;
  padding: 3px 16px 8px;
}

.v-card__text {
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
  padding-top: 0%;
  width: 100%;
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

.my-1 {
  padding-bottom: 0;
}

.button-col {
  padding-bottom: 0;
}
.theme--light.v-card {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  height: 200px;
}
</style>
