<template>
  <div>
    <v-container>
      <v-row justify="start" justify-sm="center" justify-md="start" justify-lg="start">
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">AUSTIN TINCANS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_cans.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">COLUMBUS CLAPPERS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_clappers.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">DENVER OMELETS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_omelets.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">BOSTON STALLIONS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_stallions.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">NEW YORK TITANICS</v-card-title>

              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_titanics.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">CAROLINA SMOKERS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_smokers.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300">
              <v-card-title class="justify-center">MILWAUKEE TALKIES</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_talkies.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="2" lg="3" md="4" sm="5" cols="9">
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" height="250" max-width="300" min-width="300">
              <v-card-title class="justify-center">D.C. SLAPPERS</v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-avatar size="75" color="grey lighten-5">
                  <img src="~@/assets/logo_slappers.png" alt="No Image Found" />
                </v-avatar>
              </div>
              <v-divider></v-divider>
              <v-card-actions class="justify-center">
                <v-btn text>View Team</v-btn>
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
  color: #4f4f4f;
}
</style>