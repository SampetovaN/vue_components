<template>
  <div class="my-2 flex sm:flex-row flex-col">
    <div class="block relative">
      <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
          <path
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
          ></path>
        </svg>
      </span>
      <input
        ref="searchInput"
        placeholder="Search"
        v-model="searchValue"
        @input="search(searchValue)"
        class="cursor-pointer hover:border-gray-800 appearance-none rounded-sm border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Filter",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    search(value) {
      this.GET_SEARCH_VALUE(value);
    }
  }
};
</script>
