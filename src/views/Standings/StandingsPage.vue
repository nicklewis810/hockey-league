<template>
  <div>
    <v-card class="ma-0" :tile="true">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <v-toolbar-title class="font-weight-black">
        <v-icon class color="black">mdi-trophy</v-icon>STANDINGS
      </v-toolbar-title>-->
      <!-- <v-select :items="leagues"></v-select> -->

      <v-card class color="blue-grey darken-4" dark elevation="5">
        <v-container class="text-center">
        <v-toolbar-title class="display-2 font-weight-black">
          <v-icon class="display-2 mt-n2">mdi-trophy</v-icon>STANDINGS
        </v-toolbar-title>
        </v-container>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color
          fixed-tabs
          show-arrows
          slider-size="5"
        >
          <v-tab v-for="league in leagues" :key="league">{{ league }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" dark>
          <!--Premier League -->
          <v-tab-item>
            <v-list color="blue-grey darken-4">
              <v-card-title class="title">Regular Season</v-card-title>
              <v-divider></v-divider>
              <v-list-item
                two-line
                v-for="(team, index) in this.premierStandings"
                :key="team.premierStandings"
                v-model="sortedPremier"
              >
                <v-list-item-icon>
                  <v-list-item-content>{{index +1}}</v-list-item-content>
                </v-list-item-icon>
                <v-list-item-icon>
                  <img v-bind:src="team.logo" width="50px" class="pr-3 pt-2"/>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{team.team}}</v-list-item-title>
                  <v-list-item-subtitle>{{team.wins}}W-{{team.losses}}L, {{team.wins *2}}Pts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <!--Challenger League -->
          <v-tab-item>
            <v-list color="blue-grey darken-4">
              <v-card-title class="title">Regular Season</v-card-title>
              <v-divider></v-divider>
              <v-list-item
                two-line
                v-for="(team, index) in this.challengerStandings"
                :key="team.challengerStandings"
                v-model="sortedChallenger"
              >
                <v-list-item-icon>
                  <v-icon>{{index +1}}</v-icon>
                </v-list-item-icon>
                <v-list-item-icon>
                  <img v-bind:src="team.logo" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{team.team}}</v-list-item-title>
                  <v-list-item-subtitle>{{team.wins}}W-{{team.losses}}L, {{team.wins *2}}Pts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <!--Intermediate League -->
          <v-tab-item>
            <v-list color="blue-grey darken-4">
              <v-card-title>Regular Season</v-card-title>
              <v-divider></v-divider>
              <v-list-item
                two-line
                v-for="(team, index) in this.intermediateStandings"
                :key="team.intermediateStandings"
                v-model="sortedIntermediate"
              >
                <v-list-item-icon>
                  <v-icon>{{index +1}}</v-icon>
                </v-list-item-icon>
                <v-list-item-icon>
                  <v-icon color="pink">{{team.logo}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{team.team}}</v-list-item-title>
                  <v-list-item-subtitle>{{team.wins}}W-{{team.losses}}L, {{team.points}}Pts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <!--Open League -->
          <v-tab-item>
            <v-list color="blue-grey darken-4">
              <v-card-title>Regular Season</v-card-title>
              <v-divider></v-divider>
              <v-list-item
                two-line
                v-for="team in this.openStandings"
                :key="team.openStandings"
                v-model="sortedOpen"
              >
                <v-list-item-icon>
                  <v-icon>{{team.position}}</v-icon>
                </v-list-item-icon>
                <v-list-item-icon>
                  <v-icon color="pink">{{team.logo}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{team.team}}</v-list-item-title>
                  <v-list-item-subtitle>{{team.wins}}W-{{team.losses}}L, {{team.points}}Pts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-card>

    <!-- Filters for Season/Stage
      <div elevation="5">
      <div class="mt-2">
        <v-row class="px-4" justify="end">
          <v-card class="px-4" width="125px" flat>
            <v-select label="Season" :items="season_dropdown" placeholder="Current"></v-select>
          </v-card>
          <v-card class="px-4" width="200px" flat>
            <v-select label="Season Type" :items="seasontype_dropdown" placeholder="Regular Season"></v-select>
          </v-card>
        </v-row>
    </div>-->

    <!-- Data Table for Standings -->
    <!-- <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-data-table
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
            multi-sort
            :headers="headers"
            :items="challengerStandings"
            hide-default-footer
            mobile-breakpoint="none"
            calculate-widths
          ></v-data-table>
        </v-tab-item>
    </v-tabs-items>-->
  </div>
</template>

<script>
import { isNull } from "util";
export default {
  computed: {
    sortedPremier: function() {
      this.premierStandings.sort((a, b) => ((b.wins * 2) - (a.wins * 2)));
    },
    sortedChallenger: function() {
      this.challengerStandings.sort((a, b) => ((b.wins * 2) - (a.wins * 2)));
    },
    sortedIntermediate: function() {
      this.intermediateStandings.sort((a, b) => b.points - a.points);
    },
    sortedOpen: function() {
      this.openStandings.sort((a, b) => b.points - a.points);
    },
    pointTotal: function() {
      const total = this.premierStandings.wins *2;
      this.premierStandings.points = total;
      console.log(total);
    }
  },
  data() {
    return {
      tab: null,
      season_dropdown: ["S1", "S2"],
      seasontype_dropdown: ["Regular Season", "Playoffs"],
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
          logo: require('@/assets/logo_clappers.png'),
          team: "Columbus Clappers",
          gamesplayed: 30,
          wins: 22,
          losses: 5,
          goalsfor: 159,
          goalsagainst: 145,
          goaldifferential: "+14",
        },
        {
          position: 2,
          logo: require('@/assets/logo_titanics.png'),
          team: "New York Titanics",
          gamesplayed: 30,
          wins: 20,
          losses: 8,
          goalsfor: 152,
          goalsagainst: 137,
          goaldifferential: "+15",
        },
        {
          position: 3,
          logo: require('@/assets/logo_turtles.png'),
          team: "Toronto Turtles",
          gamesplayed: 30,
          wins: 16,
          losses: 13,
          goalsfor: 155,
          goalsagainst: 150,
          goaldifferential: "+5",
        },
        {
          position: 4,
          logo: require('@/assets/logo_slappers.png'),
          team: "DC Slappers",
          gamesplayed: 30,
          wins: 10,
          losses: 18,
          goalsfor: 128,
          goalsagainst: 142,
          goaldifferential: "-14",
        },
        {
          position: 5,
          logo: require('@/assets/logo_talkies.png'),
          team: "Milwaukee Talkies",
          gamesplayed: 30,
          wins: 7,
          losses: 21,
          goalsfor: 111,
          goalsagainst: 163,
          goaldifferential: "-52",
        }
      ],
      challengerStandings: [
        {
          position: 1,
          team: "Team 1",
          gamesplayed: 30,
          wins: 22,
          losses: 5,
          goalsfor: 159,
          goalsagainst: 145,
          goaldifferential: "+14",
        },
        {
          position: 2,
          team: "Team 2",
          gamesplayed: 30,
          wins: 20,
          losses: 8,
          goalsfor: 152,
          goalsagainst: 137,
          goaldifferential: "+15",
        },
        {
          position: 3,
          team: "Team 3",
          gamesplayed: 30,
          wins: 16,
          losses: 13,
          goalsfor: 155,
          goalsagainst: 150,
          goaldifferential: "+5",
        },
        {
          position: 4,
          team: "Team 4",
          gamesplayed: 30,
          wins: 10,
          losses: 18,
          goalsfor: 128,
          goalsagainst: 142,
          goaldifferential: "-14",
        },
        {
          position: 5,
          team: "Team 5",
          gamesplayed: 30,
          wins: 7,
          losses: 21,
          goalsfor: 111,
          goalsagainst: 163,
          goaldifferential: "-52",
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