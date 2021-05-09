<template>
  <Navigation />
  <div v-if="CURRENT_PERSON">
    <div
      class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
    >
      <div
        id="profile"
        class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div class="p-4 md:p-12 text-center lg:text-left">
          <div
            class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            :style="{ backgroundImage: `url(${CURRENT_PERSON.avatar})` }"
          ></div>

          <h1 class="text-3xl font-bold pt-8 lg:pt-0">
            {{ personName }}
          </h1>
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-25"
          ></div>
          <p
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            {{ CURRENT_PERSON.email }}
          </p>
          <p class="pt-8 text-sm">
            Totally optional short description about yourself, what you do and
            so on.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-2/5">
        <img
          :src="CURRENT_PERSON.avatar"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-2/3"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3"
      role="alert"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
        />
      </svg>
      <p>К сожалению, мы не нашли информацию об этом пользователе.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navigation from "@/components/Navigation";

export default {
  name: "Person",
  components: { Navigation },
  computed: {
    ...mapGetters(["CURRENT_PERSON"]),
    personName() {
      return (
        this.CURRENT_PERSON.first_name + " " + this.CURRENT_PERSON.last_name
      );
    }
  },
  methods: {
    ...mapActions(["GET_CURRENT_PERSON"])
  },
  mounted() {
    if (this.CURRENT_PERSON) {
      let parsed = JSON.stringify(this.CURRENT_PERSON);
      localStorage.setItem("current", parsed);
    } else {
      const current = localStorage.getItem("current");
      if (current) {
        this.GET_CURRENT_PERSON(JSON.parse(current));
      }
    }
  }
};
</script>
