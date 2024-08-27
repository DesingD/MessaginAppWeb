<template>
  <transition name="slide">
    <div
      v-if="visible"
      class="h-screen w-screen bg-white absolute dark:bg-bgdark p-4"
    >
      <div class="modal-content">
        <div class="flex items-center justify-center relative">
          <button @click="$emit('close')" class="absolute left-0">
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.7083 14.6667H10.4124L15.7062 8.85338C15.9537 8.58109 16.0728 8.23005 16.0372 7.87748C16.0017 7.52491 15.8144 7.19969 15.5166 6.97338C15.2188 6.74706 14.8348 6.63817 14.4492 6.67068C14.0636 6.70319 13.7079 6.87442 13.4603 7.14671L6.16867 15.1467C6.11961 15.2103 6.07574 15.2772 6.03742 15.3467C6.03742 15.4134 6.03742 15.4534 5.93534 15.52C5.86923 15.6729 5.83462 15.8357 5.83325 16C5.83462 16.1644 5.86923 16.3272 5.93534 16.48C5.93534 16.5467 5.93534 16.5867 6.03742 16.6534C6.07574 16.7229 6.11961 16.7897 6.16867 16.8534L13.4603 24.8534C13.5975 25.0039 13.7692 25.1249 13.9632 25.2079C14.1573 25.2909 14.369 25.3337 14.5833 25.3334C14.924 25.334 15.2542 25.2255 15.5166 25.0267C15.6643 24.9148 15.7863 24.7773 15.8758 24.6222C15.9653 24.4671 16.0204 24.2973 16.038 24.1227C16.0556 23.948 16.0354 23.7719 15.9784 23.6045C15.9215 23.437 15.829 23.2814 15.7062 23.1467L10.4124 17.3334H27.7083C28.095 17.3334 28.466 17.1929 28.7394 16.9429C29.0129 16.6928 29.1666 16.3537 29.1666 16C29.1666 15.6464 29.0129 15.3073 28.7394 15.0572C28.466 14.8072 28.095 14.6667 27.7083 14.6667Z"
                fill="#0E1114"
                class="dark:fill-textLDark"
              />
            </svg>
          </button>
          <h3 class="font-medium text-2xl dark:text-textLDark">Profile</h3>
        </div>

        <div class="mt-4 flex flex-col items-center">
          <img
            src="https://picsum.photos/400/200?random"
            alt="banner"
            class="w-full h-32 rounded-lg object-cover"
          />
          <img
            src="https://picsum.photos/700/400?random"
            alt="profile"
            class="h-28 w-28 rounded-full object-cover border-primary border-4 -mt-7"
          />
        </div>

        <div class="mt-4 flex flex-col items-center text-center text-xs">
          <h1 class="text-2xl font-semibold text-labelCol dark:text-textLDark">
            Dany Mitte
          </h1>

          <div class="flex gap-3 mt-2">
            <p class="text-primary font-medium">Juanito</p>
            <div
              class="h-5 border-[0.5px] border-collapse pt-1 bg-[#565757]"
            ></div>
            <p class="font-medium text-[#565757] dark:text-colMessa">
              Joined Agos 2024
            </p>
          </div>
          <p class="w-4/5 mt-4 text-[#262626] dark:text-colMessa">
            Ceo System D, Because your satisfaction is everythin & Standing out
            from the rest, and that’s what we want you to be as well
          </p>
        </div>

        <div class="mt-11">
          <h4 class="font-semibold text-lg dark:text-textLDark">Information</h4>
          <div class="flex flex-col gap-5">
            <div class="flex justify-between mt-4 text-[#565757]">
              <div class="flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62964 15.5H12"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62964 8.5H21.3704"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z"
                    stroke="#565757"
                    stroke-width="1.5"
                  />
                </svg>
                <p>Website</p>
              </div>
              <p
                class="text-[#353535] dark:text-textLDark font-medium text-[15px]"
              >
                danymitte.vercel.app
              </p>
            </div>
            <div class="flex justify-between text-[#565757]">
              <div class="flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9L12 12.5L17 9"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                    stroke="#565757"
                    stroke-width="1.5"
                  />
                </svg>

                <p>Email</p>
              </div>
              <p
                class="text-[#353535] dark:text-textLDark font-medium text-[15px]"
              >
                mittedany547@gmail.com
              </p>
            </div>
            <div class="flex justify-between text-[#565757]">
              <div class="flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50007 12.5 8.50007 10L9.27002 5.8699L7.81459 2H4.06367C2.93612 2 2.04821 2.93178 2.21661 4.04668C2.63702 6.83 3.8766 11.8765 7.50007 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655V16.1812L18.1183 14.702Z"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Phone</p>
              </div>
              <p
                class="text-[#353535] dark:text-textLDark font-medium text-[15px]"
              >
                +593969588973
              </p>
            </div>
            <div class="flex justify-between text-[#565757]">
              <div class="flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 2V6"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                    stroke="#565757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Joined</p>
              </div>
              <p
                class="text-[#353535] dark:text-textLDark font-medium text-[15px]"
              >
                23, August 2024
              </p>
            </div>
          </div>
        </div>

        <div class="flex gap-3 mt-7 flex-wrap">
          <div
            class="bg-backButton border border-lineButton dark:bg-backButtonDark dark:border-lineButtonDark pt-2 pb-2 pl-4 pr-4 rounded-lg"
          >
            <p class="text-xs font-medium text-labelCol dark:text-textLDark">
              UI/UX
            </p>
          </div>
          <div
            class="bg-backButton border border-lineButton dark:bg-backButtonDark dark:border-lineButtonDark pt-2 pb-2 pl-4 pr-4 rounded-lg"
          >
            <p class="text-xs font-medium text-labelCol dark:text-textLDark">
              Web Developer
            </p>
          </div>
          <div
            class="bg-backButton border border-lineButton dark:bg-backButtonDark dark:border-lineButtonDark pt-2 pb-2 pl-4 pr-4 rounded-lg"
          >
            <p class="text-xs font-medium text-labelCol dark:text-textLDark">
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ProfileComponent",
  props: {
    userId: {
      type: Number,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      userInfo: null,
    };
  },
  watch: {
    userId: {
      immediate: true,
      handler(newVal) {
        this.fetchUserInfo(newVal);
      },
    },
  },
  methods: {
    fetchUserInfo(userId) {
      // Simulación de una llamada a una API para obtener la información del usuario
      this.userInfo = `Información del usuario con ID ${userId}`;
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-leave-to /* .slide-leave-active en versiones anteriores de Vue */ {
  transform: translateX(100%);
}
.slide-enter {
  transform: translateX(-100%);
}
</style>
