<template>
  <div>
    <v-app-bar class="" color="" prominent>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="display-2 font-weight-black pl-6">
        <v-icon class="display-2 pb-2" color="black">mdi-trophy</v-icon>
        STANDINGS
        </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" background-color="transparent" show-arrows>
          <v-tab v-for="league in leagues" :key="league">{{ league }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-card>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <!-- <v-app-bar color="blue-grey darken-4" dense dark>
              <v-toolbar-title>Premier League</v-toolbar-title>
          </v-app-bar>-->
          <v-data-table
            class="elevation-5"
            multi-sort
            :headers="headers"
            :items="premierStandings"
            hide-default-footer
            mobile-breakpoint="none"
            calculate-widths
          ></v-data-table>
        </v-tab-item>
        <v-tab-item>
          <v-data-table
            class="elevation-5"
            multi-sort
            :headers="headers"
            :items="challengerStandings"
            hide-default-footer
            mobile-breakpoint="none"
            calculate-widths
          ></v-data-table>
        </v-tab-item>
        <v-tab-item>
          <v-data-table
            class="elevation-5"
            multi-sort
            :headers="headers"
            :items="challengerStandings"
            hide-default-footer
            mobile-breakpoint="none"
            calculate-widths
          ></v-data-table>
        </v-tab-item>
        <v-tab-item>
          <v-data-table
            class="elevation-5"
            multi-sort
            :headers="headers"
            :items="challengerStandings"
            hide-default-footer
            mobile-breakpoint="none"
            calculate-widths
          ></v-data-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      headers: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "position"
        },
        {
          text: "Team",
          align: "left",
          sortable: false,
          value: "team",
          width: "25%"
        },
        {
          text: "GP",
          align: "left",
          sortable: true,
          value: "gamesplayed"
        },
        {
          text: "W",
          align: "left",
          sortable: true,
          value: "wins"
        },
        {
          text: "L",
          align: "left",
          sortable: true,
          value: "losses"
        },
        {
          text: "Pts",
          align: "left",
          sortable: true,
          value: "points"
        }
      ],
      leagues: ["Premier", "Challenger", "Intermediate", "Open"],
      premierStandings: [
        {
          position: 1,
          team: "Columbus Clappers",
          gamesplayed: 30,
          wins: 22,
          losses: 5,
          overtimelosses: 3,
          goalsfor: 159,
          goalsagainst: 145,
          goaldifferential: "+14",
          points: 45
        },
        {
          position: 2,
          team: "New York Titanics",
          gamesplayed: 30,
          wins: 20,
          losses: 8,
          overtimelosses: 2,
          goalsfor: 152,
          goalsagainst: 137,
          goaldifferential: "+15",
          points: 42
        },
        {
          position: 3,
          team: "St. Louis Storm",
          gamesplayed: 30,
          wins: 16,
          losses: 13,
          overtimelosses: 1,
          goalsfor: 155,
          goalsagainst: 150,
          goaldifferential: "+5",
          points: 33
        },
        {
          position: 4,
          team: "DC Slappers",
          gamesplayed: 30,
          wins: 10,
          losses: 18,
          overtimelosses: 2,
          goalsfor: 128,
          goalsagainst: 142,
          goaldifferential: "-14",
          points: 22
        },
        {
          position: 5,
          team: "Milwaukee Talkies",
          gamesplayed: 30,
          wins: 7,
          losses: 21,
          overtimelosses: 2,
          goalsfor: 111,
          goalsagainst: 163,
          goaldifferential: "-52",
          points: 16
        }
      ],
      challengerStandings: [
        {
          position: 1,
          team: "Scranton Danglers",
          gamesplayed: 30,
          wins: 22,
          losses: 5,
          overtimelosses: 3,
          goalsfor: 159,
          goalsagainst: 145,
          goaldifferential: "+14",
          points: 45
        },
        {
          position: 2,
          team: "Team 2",
          gamesplayed: 30,
          wins: 20,
          losses: 8,
          overtimelosses: 2,
          goalsfor: 152,
          goalsagainst: 137,
          goaldifferential: "+15",
          points: 42
        },
        {
          position: 3,
          team: "Team 3",
          gamesplayed: 30,
          wins: 16,
          losses: 13,
          overtimelosses: 1,
          goalsfor: 155,
          goalsagainst: 150,
          goaldifferential: "+5",
          points: 33
        },
        {
          position: 4,
          team: "Team 4",
          gamesplayed: 30,
          wins: 10,
          losses: 18,
          overtimelosses: 2,
          goalsfor: 128,
          goalsagainst: 142,
          goaldifferential: "-14",
          points: 22
        },
        {
          position: 5,
          team: "Team 5",
          gamesplayed: 30,
          wins: 7,
          losses: 21,
          overtimelosses: 2,
          goalsfor: 111,
          goalsagainst: 163,
          goaldifferential: "-52",
          points: 16
        }
      ],
      intermediateStandings: [""],
      openStandings: [""]
    };
  }
};
</script>

<style scoped>
</style>