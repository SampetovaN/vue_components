<template>
  <div class="table-row">
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex items-baseline">
        <div class="flex-shrink-0 w-10 h-10 align-top">
          <img
            class="w-full h-full rounded-full"
            :src="personPhoto"
            :alt="personPhoto ? personName : ''"
          />
        </div>
        <div class="ml-3">
          <p class="text-gray-900 whitespace-no-wrap">
            {{ personName }}
          </p>
        </div>
      </div>
    </div>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
        {{ person.email }}
      </p>
    </div>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span
        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
      >
        <span
          aria-hidden
          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
        ></span>
        <button
          type="button"
          class="relative hover:opacity-40 outline-none focus:outline-none"
          @click="deletePerson"
        >
          Удалить
        </button>
      </span>
      <span
        class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
      >
        <span
          aria-hidden
          class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
        ></span>
        <router-link
          type="button"
          class="relative hover:opacity-40 outline-none focus:outline-none font-normal"
          @click="viewPerson"
          to="/person"
        >
          Посмотреть
        </router-link>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.table-cell {
  span {
    &:first-child {
      margin-bottom: 3px;
      margin-right: 3px;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  name: "PersonInfo",
  data() {
    return {
      defaultPhoto:
        "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
    };
  },
  props: {
    person: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    personName() {
      return this.person.first_name + " " + this.person.last_name;
    },
    personPhoto() {
      return this.person.avatar;
    }
  },
  methods: {
    ...mapActions(["GET_CURRENT_PERSON"]),
    deletePerson() {
      this.$emit("deletePerson");
    },
    viewPerson() {
      this.GET_CURRENT_PERSON(this.person);
    }
  }
};
</script>
