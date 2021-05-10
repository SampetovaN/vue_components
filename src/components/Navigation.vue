<template>
  <header class="pb-16">
    <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div class="container mx-auto flex justify-center">
        <ul class="flex">
          <li class="hover:text-gray-500">
            <router-link
              to="/"
              class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
              >{{ nameRoute }}</router-link
            >
          </li>
          <li class="hover:text-gray-500">
            <router-link
              to="/range"
              class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
              >Рэндж</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
.router-link-active {
  &:hover,
  &:focus {
    color: black;
    cursor: auto;
  }
}
</style>

<script>
export default {
  name: "Navigation",
  computed: {
    nameRoute() {
      return this.$route.path === "/person" ? "Назад" : "Пользователи";
    }
  }
};
</script>
