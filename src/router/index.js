import { createRouter, createWebHistory } from "vue-router";
import Range from "@/pages/Range.vue";
import People from "@/pages/People.vue";
import Person from "@/pages/Person.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/range",
      name: "Range",
      component: Range
    },
    {
      path: "/",
      name: "People",
      component: People
    },
    {
      path: "/person",
      name: "Person",
      component: Person
    }
  ]
});

export default router;
