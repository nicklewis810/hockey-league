<template>
  <v-container>
    <v-card>
      <v-app-bar color="blue-grey darken-4" dense dark>
        
        <v-toolbar-title><v-icon>mdi-trophy</v-icon> STANDINGS </v-toolbar-title>

        <template v-slot:extension>
          <v-tabs v-model="tab" fixed-tabs background-color="transparent">
            <v-tab v-for="league in leagues" :key="league">{{ league }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-app-bar color="red accent-4" dense dark>
            <v-toolbar-title>Premier League</v-toolbar-title>
          </v-app-bar>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Team</th>
                <th class="text-left">GP</th>
                <th class="text-left">W</th>
                <th class="text-left">L</th>
                <th class="text-left">OTL</th>
                <th class="text-left">GF</th>
                <th class="text-left">GA</th>
                <th class="text-left">GD</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody v-for="standing in this.premierStandings" :key="standing.position">
              <tr>
                <td>{{ standing.position }}</td>
                <td>{{ standing.team }}</td>
                <td>{{ standing.gamesplayed }}</td>
                <td>{{ standing.wins }}</td>
                <td>{{ standing.losses }}</td>
                <td>{{ standing.overtimelosses }}</td>
                <td>{{ standing.goalsfor }}</td>
                <td>{{ standing.goalsagainst }}</td>
                <td>{{ standing.goaldifferential }}</td>
                <td>{{ standing.points }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>
        <v-tab-item>
          <v-app-bar color="orange darken-3" dense dark>
            <v-toolbar-title>Challenger League</v-toolbar-title>
          </v-app-bar>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Team</th>
                <th class="text-left">GP</th>
                <th class="text-left">W</th>
                <th class="text-left">L</th>
                <th class="text-left">OTL</th>
                <th class="text-left">GF</th>
                <th class="text-left">GA</th>
                <th class="text-left">GD</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody v-for="standing in this.challengerStandings" :key="standing.position">
              <tr>
                <td>{{ standing.position }}</td>
                <td>{{ standing.team }}</td>
                <td>{{ standing.gamesplayed }}</td>
                <td>{{ standing.wins }}</td>
                <td>{{ standing.losses }}</td>
                <td>{{ standing.overtimelosses }}</td>
                <td>{{ standing.goalsfor }}</td>
                <td>{{ standing.goalsagainst }}</td>
                <td>{{ standing.goaldifferential }}</td>
                <td>{{ standing.points }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>
        <v-tab-item>
          <v-app-bar color="amber darken-3" dense dark>
            <v-toolbar-title>Intermediate League</v-toolbar-title>
          </v-app-bar>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Team</th>
                <th class="text-left">GP</th>
                <th class="text-left">W</th>
                <th class="text-left">L</th>
                <th class="text-left">OTL</th>
                <th class="text-left">GF</th>
                <th class="text-left">GA</th>
                <th class="text-left">GD</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody v-for="standing in this.intermediateStandings" :key="standing.position">
              <tr>
                <td>{{ standing.position }}</td>
                <td>{{ standing.team }}</td>
                <td>{{ standing.gamesplayed }}</td>
                <td>{{ standing.wins }}</td>
                <td>{{ standing.losses }}</td>
                <td>{{ standing.overtimelosses }}</td>
                <td>{{ standing.goalsfor }}</td>
                <td>{{ standing.goalsagainst }}</td>
                <td>{{ standing.goaldifferential }}</td>
                <td>{{ standing.points }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>
        <v-tab-item>
          <v-app-bar color="light-green darken-2" dense dark>
            <v-toolbar-title>Open League</v-toolbar-title>
          </v-app-bar>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Team</th>
                <th class="text-left">GP</th>
                <th class="text-left">W</th>
                <th class="text-left">L</th>
                <th class="text-left">OTL</th>
                <th class="text-left">GF</th>
                <th class="text-left">GA</th>
                <th class="text-left">GD</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody v-for="standing in this.openStandings" :key="standing.position">
              <tr>
                <td>{{ standing.position }}</td>
                <td>{{ standing.team }}</td>
                <td>{{ standing.gamesplayed }}</td>
                <td>{{ standing.wins }}</td>
                <td>{{ standing.losses }}</td>
                <td>{{ standing.overtimelosses }}</td>
                <td>{{ standing.goalsfor }}</td>
                <td>{{ standing.goalsagainst }}</td>
                <td>{{ standing.goaldifferential }}</td>
                <td>{{ standing.points }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
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