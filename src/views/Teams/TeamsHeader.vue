<template>
  <div>
    <v-app-bar flat prominent color="blue">
      <v-container fill-height>
        <v-row
          align="center"
          justify="center"
          justify-xs="center"
          justify-sm="center"
          justify-md="start"
          justify-lg="start"
        >
          <v-col xl="4" lg="4" md="5" sm="3" cols="3">
            <v-toolbar-title>TEAMS</v-toolbar-title>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider></v-divider>

    <v-container align="end">
      <v-row
        align="center"
        justify="center"
        justify-xs="center"
        justify-sm="center"
        justify-md="end"
        justify-lg="end"
      >
        <v-col xl="3" lg="3" md="4" sm="4" cols="5">
          <v-select append-icon="mdi-calendar" dense :items="seasons" label="Season" outlined></v-select>
        </v-col>
        <v-col xl="3" lg="3" md="4" sm="4" cols="5">
          <v-select
            append-icon="mdi-hockey-sticks"
            dense
            :items="divisions"
            label="Division"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seasons: ["19' Spring", "20' Summer", "20' Fall", "'20' Winter"],
      divisions: ["Premier", "Challenger", "Intermediate", "Open"]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-size: 3rem;
  color: white;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
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
  font-size: 28px;
}

.v-card__text {
  font-size: 1rem;
  font-weight: 400;
  color: #4f4f4f;
}
</style>
