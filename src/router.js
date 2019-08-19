import Vue from "vue";
import Router from "vue-router";
import TeamsPage from "@/views/Teams/TeamsPage";
import SchedulePage from "@/views/Schedule/SchedulePage";
import StandingsPage from "@/views/Standings/StandingsPage";
import ScoresPage from "@/views/Scores/ScoresPage";
import Overview from "@/views/Overview/Overview";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/teams",
      name: "TeamsPage",
      component: TeamsPage
    },
    {
      path: "/schedule",
      name: "SchedulePage",
      component: SchedulePage
    },
    {
      path: "/standings",
      name: "StandingsPage",
      component: StandingsPage
    },
    {
      path: "/scores",
      name: "ScoresPage",
      component: ScoresPage
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview
    }
  ]
});
