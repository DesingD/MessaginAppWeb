<template>
  <div class="flex justify-center items-center relative">
    <span
      class="absolute left-[12%] top-1/2 transform -translate-y-1/2 text-gray-500"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.0625 3.125C5.78331 3.125 3.125 5.78331 3.125 9.0625C3.125 12.3417 5.78331 15 9.0625 15C12.3417 15 15 12.3417 15 9.0625C15 5.78331 12.3417 3.125 9.0625 3.125ZM1.875 9.0625C1.875 5.09295 5.09295 1.875 9.0625 1.875C13.032 1.875 16.25 5.09295 16.25 9.0625C16.25 13.032 13.032 16.25 9.0625 16.25C5.09295 16.25 1.875 13.032 1.875 9.0625Z"
          fill="#0E1114"
          fill-opacity="0.75"
          class="dark:fill-[#ABBBC9]"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.2611 13.2612C13.5051 13.0171 13.9009 13.0171 14.1449 13.2612L17.9418 17.0581C18.1859 17.3022 18.1859 17.6979 17.9418 17.942C17.6977 18.1861 17.302 18.1861 17.0579 17.942L13.2611 14.1451C13.017 13.901 13.017 13.5053 13.2611 13.2612Z"
          fill="#0E1114"
          fill-opacity="0.75"
          class="dark:fill-[#ABBBC9]"
        />
      </svg>
    </span>
    <input
      type="text"
      placeholder="Search..."
      v-model="searchQuery"
      @input="onInput"
      class="pl-[10%] bg-backButton rounded-lg w-5/6 h-14 border-2 text-black border-lineButton text-sm dark:bg-backButtonDark dark:border-lineButtonDark dark:text-white focus:outline-none focus:border-primary"
    />
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>
