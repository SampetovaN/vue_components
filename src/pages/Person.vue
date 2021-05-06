<template>
  <div>
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
            style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"
          ></div>

          <h1 class="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-25"
          ></div>
          <p
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            Your Email -
          </p>
          <p class="pt-8 text-sm">
            Totally optional short description about yourself, what you do and
            so on.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-2/5">
        <img
          src="https://source.unsplash.com/MP0IUfwrn0A"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-2/3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person"
};
</script>
