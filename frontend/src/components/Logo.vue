<template>
  <div
    class="flex justify-center items-center gap-4 p-3 text-labelCol dark:text-textLDark"
  >
    <img :src="logoSrc" alt="Logo" />
    <p class="font-semibold">E-Message</p>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
  data() {
    return {
      logoSrc: require("@/assets/logos/LogoPrincipal.svg"),
    };
  },
};
</script>
