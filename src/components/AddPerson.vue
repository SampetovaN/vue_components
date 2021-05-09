<template>
  <form class="table-row" action="#" v-on:submit.prevent>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex items-baseline">
        <div
          class="flex-shrink-0 w-20 h-10 align-top block m-0 mb-auto mt-auto"
        >
          <label
            for="photo"
            class="cursor-pointer hover:bg-gray-300 hover:text-gray-500 opacity-50 rounded-full bg-gray-200 p-0.5"
            >Выбрать фото</label
          >
          <input type="file" id="photo" class="visually-hidden" />
        </div>
        <div class="ml-3 w-full">
          <input
            placeholder="Имя"
            class="cursor-pointer hover:border-gray-800 appearance-none rounded-sm border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            required
          />
        </div>
      </div>
    </div>
    <div class="table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <input
        placeholder="Почта"
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
form .table-cell {
  div {
    min-width: 142px;
  }
}
</style>

<script>
export default {
  name: "AddPerson",
  data() {
    return {
      newPerson: null
    };
  }
};
</script>
