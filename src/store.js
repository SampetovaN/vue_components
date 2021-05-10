import { createStore } from "vuex";

export default createStore({
  state: {
    people: [],
    searchValue: "",
    currentPerson: null
  },
  mutations: {
    SET_SEARCH_VALUE(state, value) {
      state.searchValue = value;
    },
    REMOVE_PERSON(state, index) {
      let current = localStorage.getItem("current");
      if (current) {
        current = JSON.parse(current);
        console.log(state.people[index].id, current.id);
        if (state.people[index].id === current.id) {
          localStorage.removeItem("current");
        }
      }
      state.people.splice(index, 1);
      localStorage.setItem("people", JSON.stringify(state.people));
    },
    SET_CURRENT_PERSON(state, value) {
      state.currentPerson = value;
    },
    ADD_PERSON(state, value) {
      state.people.push(value);
      localStorage.setItem("people", JSON.stringify(state.people));
    },
    SET_PEOPLE(state) {
      let storage = localStorage.getItem("people");
      if (storage) {
        state.people = JSON.parse(storage);
      } else {
        localStorage.setItem(
          "people",
          JSON.stringify([
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
          ])
        );
        state.people = JSON.parse(localStorage.getItem("people"));
      }
    }
  },
  actions: {
    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    },
    GET_CURRENT_PERSON({ commit }, value) {
      commit("SET_CURRENT_PERSON", value);
    },
    CREATE_PERSON({ commit }, value) {
      commit("ADD_PERSON", value);
    },
    DELETE_PERSON({ commit }, index) {
      commit("REMOVE_PERSON", index);
    },
    GET_PEOPLE({ commit }) {
      commit("SET_PEOPLE");
    }
  },
  getters: {
    PEOPLE(state) {
      return state.people;
    },
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
    CURRENT_PERSON(state) {
      return state.currentPerson;
    }
  }
});
