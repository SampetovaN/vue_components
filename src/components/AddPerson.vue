<template>
  <form class="table-row" action="#" @submit.prevent="createNewPerson">
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex items-baseline">
        <div class="flex items-center justify-start">
          <div
            class="flex items-center flex-shrink-0 h-10 align-top block m-0 mb-auto mt-auto"
          >
            <label
              for="photo"
              class="px-0.5 py-0.5 cursor-pointer hover:bg-gray-300 hover:text-gray-500 opacity-50 rounded-full bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </label>
            <input
              type="file"
              id="photo"
              class="visually-hidden"
              accept="image/*"
              @change="saveAvatar"
              aria-label="Загрузить фото"
            />
          </div>
          <div class="px-5 py-5 bg-white text-sm" v-show="photo">
            <span
              class="relative inline-block px-3 py-1 font-semibold text-yellow-800 leading-tight"
            >
              <span
                aria-hidden
                class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
              ></span>
              <button
                type="button"
                class="relative hover:opacity-40 outline-none focus:outline-none"
                @click="deleteAvatar"
                aria-label="Удалить фото"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div class="ml-3 w-full">
          <input
            placeholder="Имя"
            type="text"
            class="cursor-pointer hover:border-gray-800 appearance-none rounded-sm border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            required
            v-model="name"
          />
        </div>
      </div>
    </div>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <input
        placeholder="Почта"
        v-model="email"
        type="email"
        class="cursor-pointer hover:border-gray-800 appearance-none rounded-sm border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
      />
    </div>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span
        class="relative inline-block px-3 py-1 font-semibold text-red-800 leading-tight"
      >
        <span
          aria-hidden
          class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
        ></span>
        <button
          type="submit"
          class="relative hover:opacity-40 outline-none focus:outline-none"
        >
          Добавить
        </button>
      </span>
    </div>
  </form>
</template>

<style scoped lang="scss">
form {
  .table-cell {
    &:first-child {
      min-width: 300px;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddPerson",
  data() {
    return {
      newPerson: this.resetNewPerson(),
      name: "",
      email: "",
      photo: "",
      defaultPhoto:
        "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
      uniqueId: require("lodash.uniqueid")
    };
  },
  methods: {
    ...mapActions(["CREATE_PERSON"]),
    createNewPerson(evt) {
      this.newPerson.id = this.uniqueId() + "" + this.uniqueId();
      this.newPerson.email = this.email || "-";
      this.newPerson.avatar = this.photo || this.defaultPhoto;
      let nameArr = this.name.trim().split(" ");
      if (nameArr.length === 1) {
        this.newPerson.first_name = nameArr[0];
      } else {
        this.newPerson.first_name = nameArr[0];
        this.newPerson.last_name = nameArr.slice(1).join(" ");
      }
      evt.target.reset();
      this.CREATE_PERSON(this.newPerson);
      this.newPerson = this.resetNewPerson();
      this.name = this.email = this.photo = "";
      this.$emit("createNewPerson");
    },
    saveAvatar(evt) {
      let reader = new FileReader();
      let file = evt.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.photo = event.target.result;
      };
    },
    deleteAvatar() {
      this.photo = "";
    },
    resetNewPerson() {
      return {
        id: null,
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
      };
    }
  }
};
</script>
