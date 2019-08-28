<template>
  <div>
    <v-container>
      <v-row
        justify="center"
        justify-sm="center"
        justify-md="start"
        justify-lg="start"
      >
        <div v-for="team in teams" v-bind:key="team.id">
          <v-col xl="3" lg="4" md="4" sm="6" cols="9">
            <v-card>
              <v-card-title class="justify-center">
                {{ team.name }}
              </v-card-title>
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
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  data() {
    return {
      teams: []
    };
  },

  created() {
    //fetch data from firestore
    db.collection("teams")
      .get()
      // db.collection grabs all information from a firestore collection
      .then(snapshot => {
        //snapshot views the collection and all of its dcocuments at this moment in time
        snapshot.forEach(doc => {
          //cycles through the snapshot documents using for each loop
          console.log(doc.data(), doc.id);
          //doc.data pulls the actual values wthin that document
          //doc.id pulls the id of the document
          //Doc.id is a separate call because id is not a value of the document but rather a property of the docuement itself
          let team = doc.data();
          team.id = doc.id;
          this.teams.push(team);
        });
      });
  }
};
</script>

<style lang="stylus" scoped>
.text-center {
  padding: 30px;
}

.v-card__title.justify-center {
  font-weight: 400;
}
</style>
