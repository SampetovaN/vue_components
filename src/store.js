import { createStore } from "vuex";

export default createStore({
  state: {
    people: [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
      }
    ],
    searchValue: ""
  },
  mutations: {
    SET_SEARCH_VALUE(state, value) {
      state.searchValue = value;
    },
    REMOVE_PERSON(state, index) {
      state.people.splice(index, 1);
    }
  },
  actions: {
    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    },
    DELETE_PERSON({ commit }, index) {
      commit("REMOVE_PERSON", index);
    }
  },
  getters: {
    PEOPLE(state) {
      return state.people;
    },
    SEARCH_VALUE(state) {
      return state.searchValue;
    }
  }
});
