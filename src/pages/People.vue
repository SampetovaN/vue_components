<template>
  <Navigation />
  <main class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Пользователи</h2>
        </div>
        <Filter />
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto scroll">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <div class="min-w-full leading-normal table">
              <div class="table-header-group">
                <div class="table-row">
                  <div
                    class="table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Пользователь
                  </div>
                  <div
                    class="table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Email
                  </div>
                  <div
                    class="table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Действия
                  </div>
                </div>
              </div>

              <PersonInfo
                v-for="(person, index) in filteredPeople"
                :key="person.id"
                :person="person"
                @deletePerson="deletePerson(index)"
              />
              <AddPerson @createNewPerson="createNewPerson" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation";
import AddPerson from "@/components/AddPerson";
import PersonInfo from "@/components/PersonInfo";
import Filter from "@/components/Filter";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "People",
  components: { AddPerson, Navigation, PersonInfo, Filter },
  computed: {
    ...mapGetters(["PEOPLE", "SEARCH_VALUE"])
  },
  data() {
    return {
      filteredPeople: []
    };
  },
  methods: {
    ...mapActions(["DELETE_PERSON", "GET_PEOPLE"]),
    deletePerson(index) {
      this.DELETE_PERSON(index);
      this.filteredPeople = [...this.PEOPLE];
    },
    filterPeople(value) {
      this.filteredPeople = [...this.PEOPLE];
      if (value && value.length >= 2) {
        this.filteredPeople = this.filteredPeople.filter(function(item) {
          return (
            item.last_name.toLowerCase().includes(value.toLowerCase()) ||
            item.first_name.toLowerCase().includes(value.toLowerCase())
          );
        });
      } else {
        this.filteredPeople = this.PEOPLE;
      }
    },
    createNewPerson() {
      this.filteredPeople = [...this.PEOPLE];
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.filterPeople(this.SEARCH_VALUE);
    }
  },
  mounted() {
    this.GET_PEOPLE();
    this.filterPeople(this.SEARCH_VALUE);
  }
};
</script>
