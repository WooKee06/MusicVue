import { createRouter, createWebHistory } from "vue-router";
import PlayerView from "@/views/PlayerView.vue";
import ProfileView from "@/views/ProfileView.vue";
import searchView from "@/views/searchView.vue";
import popularView from "@/views/popularView.vue";
import LikedView from "@/views/LikedView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: PlayerView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/search",
    name: "search",
    component: searchView,
  },
  {
    path: "/popular",
    name: "popular",
    component: popularView,
  },
  {
    path: "/liked",
    name: "liked",
    component: LikedView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
