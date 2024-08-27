<template>
  <transition name="slide">
    <div
      v-if="visible"
      class="animated-component h-screen w-screen bg-white dark:bg-bgdark absolute p-4 dark:text-textLDark"
    >
      <div class="flex text-center gap-5">
        <button @click="$emit('close-settings-component')">
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
        <h1 class="font-medium text-2xl dark:text-textLDark">Settings</h1>
      </div>

      <div class="flex mt-7 items-center justify-between">
        <div class="flex">
          <img
            src="https://picsum.photos/700/400?random"
            alt="user profile"
            class="h-20 w-20 object-cover rounded-full"
          />
          <div class="pl-4 pt-1">
            <h2 class="font-medium text-xl">Dany Mitte</h2>
            <p class="text-xs max-w-44 dark:text-colMessaDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div class="flex justify-end items-end h-full">
          <svg
            width="31px"
            height="31px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#5D6062"
          >
            <path
              d="M15 12L15 15"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 3V6"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M18 12L18 15"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 18L21 18"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M18 21H21"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M6 12H9"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M6 6.01111L6.01 6"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 12.0111L12.01 12"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M3 12.0111L3.01 12"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 9.01111L12.01 9"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 15.0111L12.01 15"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M15 21.0111L15.01 21"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M12 21.0111L12.01 21"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M21 12.0111L21.01 12"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M21 15.0111L21.01 15"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M18 6.01111L18.01 6"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M9 3.6V8.4C9 8.73137 8.73137 9 8.4 9H3.6C3.26863 9 3 8.73137 3 8.4V3.6C3 3.26863 3.26863 3 3.6 3H8.4C8.73137 3 9 3.26863 9 3.6Z"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M21 3.6V8.4C21 8.73137 20.7314 9 20.4 9H15.6C15.2686 9 15 8.73137 15 8.4V3.6C15 3.26863 15.2686 3 15.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M6 18.0111L6.01 18"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
            <path
              d="M9 15.6V20.4C9 20.7314 8.73137 21 8.4 21H3.6C3.26863 21 3 20.7314 3 20.4V15.6C3 15.2686 3.26863 15 3.6 15H8.4C8.73137 15 9 15.2686 9 15.6Z"
              stroke="#5D6062"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:stroke-colMessaDark"
            ></path>
          </svg>
        </div>
      </div>

      <div class="mt-6 flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5ZM7 12C7 7.02944 11.0294 3 16 3C20.9706 3 25 7.02944 25 12C25 16.9706 20.9706 21 16 21C11.0294 21 7 16.9706 7 12Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0002 20.9988C13.718 20.9988 11.476 21.5996 9.49965 22.7407C7.52328 23.8819 5.88215 25.5233 4.74124 27.4998C4.46514 27.9781 3.85356 28.1421 3.37525 27.866C2.89693 27.5899 2.733 26.9783 3.0091 26.5C4.32553 24.2194 6.21914 22.3255 8.49957 21.0087C10.78 19.692 13.3669 18.9988 16.0002 18.9988C18.6335 18.9988 21.2203 19.692 23.5008 21.0087C25.7812 22.3255 27.6748 24.2194 28.9912 26.5C29.2673 26.9783 29.1034 27.5899 28.6251 27.866C28.1468 28.1421 27.5352 27.9781 27.2591 27.4998C26.1182 25.5233 24.4771 23.8819 22.5007 22.7407C20.5243 21.5996 18.2823 20.9988 16.0002 20.9988Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
          </svg>

          <div class="flex flex-col">
            <h3 class="font-medium">Account</h3>
            <p
              class="font-regular text-xs text-[#161718] dark:text-colMessaDark"
            >
              Privacy, secutrity, change email or number
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.6745 5.0468C14.0033 4.87939 11.3628 5.69277 9.24874 7.33424C7.1347 8.97571 5.6925 11.3324 5.1929 13.9618C4.6933 16.5913 5.17065 19.3127 6.53534 21.6151C6.67509 21.8509 6.71194 22.1337 6.63727 22.3974L5.46607 26.534L9.60267 25.3628L9.8751 26.325L10.385 25.4647C12.6874 26.8294 15.4088 27.3068 18.0382 26.8072C20.6677 26.3076 23.0244 24.8654 24.6658 22.7513C26.3073 20.6373 27.1207 17.9968 26.9533 15.3255C26.7859 12.6543 25.6492 10.136 23.7566 8.24345C21.8641 6.35089 19.3458 5.2142 16.6745 5.0468ZM9.74421 27.4013C12.3827 28.8478 15.4466 29.3354 18.4116 28.772C21.5196 28.1815 24.3053 26.4768 26.2455 23.9779C28.1858 21.4791 29.1472 18.3579 28.9494 15.2005C28.7515 12.043 27.4079 9.06629 25.1708 6.82923C22.9338 4.59218 19.9571 3.24859 16.7996 3.05071C13.6421 2.85283 10.521 3.81427 8.02216 5.75453C5.52331 7.69478 3.8186 10.4804 3.22806 13.5885C2.6647 16.5535 3.15225 19.6173 4.59873 22.2559L3.53889 25.9991C3.44016 26.3399 3.43445 26.7009 3.52239 27.0447C3.61075 27.3901 3.7904 27.7054 4.04251 27.9576C4.29463 28.2097 4.60993 28.3893 4.95535 28.4777C5.29915 28.5656 5.66019 28.5599 6.00099 28.4612L9.74421 27.4013Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              d="M10 17.5C10.8284 17.5 11.5 16.8284 11.5 16C11.5 15.1716 10.8284 14.5 10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              d="M22 17.5C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5C21.1716 14.5 20.5 15.1716 20.5 16C20.5 16.8284 21.1716 17.5 22 17.5Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
          </svg>

          <div class="flex flex-col">
            <h3 class="font-medium">Chats</h3>
            <p
              class="font-regular text-xs text-[#161718] dark:text-colMessaDark"
            >
              Theme, wallpapers, chat history
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.475 21.9988C26.7325 20.7163 25.8475 18.2875 25.8475 14V13.1125C25.8463 7.5775 21.4025 3.04125 15.94 3H15.87C13.2025 3.00375 10.695 4.04625 8.81252 5.935C6.92877 7.82375 5.89377 10.3325 5.89752 13V14C5.89752 18.2875 5.01252 20.7163 4.26877 22C4.09377 22.3013 4.00002 22.645 4.00002 22.9925C3.99752 23.5263 4.20377 24.03 4.58127 24.4088C4.95877 24.7875 5.45877 24.9975 5.99752 25H10.8713C10.8713 27.7575 13.1138 30 15.8713 30C18.6288 30 20.8713 27.7575 20.8713 25H25.75C26.0988 25 26.4425 24.9062 26.7425 24.7325C27.205 24.465 27.5363 24.0337 27.675 23.5187C27.8138 23.0025 27.7425 22.4638 27.475 22V21.9988ZM15.8725 28C14.2188 28 12.8725 26.6538 12.8725 25H18.8725C18.8725 26.6538 17.5263 28 15.8725 28ZM19.8788 23C19.8788 23 19.875 23 19.8725 23C19.87 23 19.8688 23 19.8663 23H11.885C11.885 23 11.8763 23 11.8713 23C11.8663 23 11.8625 23 11.8575 23H6.00002C6.86502 21.505 7.89752 18.73 7.89752 13.9988V12.9987C7.89502 10.8637 8.72252 8.85625 10.2288 7.34625C11.735 5.835 13.74 5.00125 15.875 4.99875H15.9275C20.295 5.0325 23.8475 8.67125 23.8475 13.1112V13.9988C23.8475 18.73 24.8788 21.505 25.7475 22.9988H19.8788V23Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
          </svg>

          <div class="flex flex-col">
            <h3 class="font-medium">Notifications</h3>
            <p
              class="font-regular text-xs text-[#161718] dark:text-colMessaDark"
            >
              Message, group & call tones
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289L26.7071 10.2929C26.8946 10.4804 27 10.7348 27 11V27C27 27.5304 26.7893 28.0391 26.4142 28.4142C26.0391 28.7893 25.5304 29 25 29H7C6.46957 29 5.96086 28.7893 5.58579 28.4142C5.21071 28.0391 5 27.5304 5 27V5C5 4.46957 5.21071 3.96086 5.58579 3.58579ZM18.5858 5L7 5L7 27H25V11.4142L18.5858 5Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 15C9 14.4477 9.44772 14 10 14H22C22.5523 14 23 14.4477 23 15V24C23 24.5523 22.5523 25 22 25H10C9.44772 25 9 24.5523 9 24V15ZM11 16V23H21V16H11Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 18C14.5523 18 15 18.4477 15 19V24C15 24.5523 14.5523 25 14 25C13.4477 25 13 24.5523 13 24V19C13 18.4477 13.4477 18 14 18Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 18C18.5523 18 19 18.4477 19 19V24C19 24.5523 18.5523 25 18 25C17.4477 25 17 24.5523 17 24V19C17 18.4477 17.4477 18 18 18Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
          </svg>

          <div class="flex flex-col">
            <h3 class="font-medium">Storage and data</h3>
            <p
              class="font-regular text-xs text-[#161718] dark:text-colMessaDark"
            >
              Network usage, auto-download
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.087 2.9999C17.8006 2.98665 19.5 3.31234 21.0873 3.95826C22.6771 4.60517 24.123 5.56047 25.3417 6.76906C26.5603 7.97765 27.5276 9.41559 28.1877 10.9999C28.8477 12.5843 29.1876 14.2836 29.1875 15.9999C29.1875 15.9999 29.1875 15.9999 29.1875 15.9999V22.9999C29.1875 23.7956 28.8714 24.5586 28.3088 25.1212C27.7462 25.6839 26.9832 25.9999 26.1875 25.9999H24.1875C23.3918 25.9999 22.6288 25.6839 22.0662 25.1212C21.5036 24.5586 21.1875 23.7956 21.1875 22.9999V17.9999C21.1875 17.2043 21.5036 16.4412 22.0662 15.8786C22.6288 15.316 23.3918 14.9999 24.1875 14.9999H27.142C27.0408 13.8905 26.7714 12.801 26.3415 11.7691C25.783 10.4285 24.9645 9.21178 23.9333 8.18913C22.9022 7.16648 21.6787 6.35814 20.3335 5.81076C18.9883 5.26338 17.5481 4.98779 16.0958 4.99989L16.0802 4.9999C14.6289 4.98932 13.1899 5.26603 11.8461 5.81409C10.5022 6.36216 9.28009 7.17073 8.25013 8.19323C7.22018 9.21573 6.40274 10.4319 5.84493 11.7718C5.41566 12.8029 5.14667 13.8915 5.04552 14.9999H8C8.79565 14.9999 9.55871 15.316 10.1213 15.8786C10.6839 16.4412 11 17.2043 11 17.9999V22.9999C11 23.7956 10.6839 24.5586 10.1213 25.1212C9.55871 25.6839 8.79565 25.9999 8 25.9999H6C5.20435 25.9999 4.44129 25.6839 3.87868 25.1212C3.31607 24.5586 3 23.7956 3 22.9999V16C2.99995 14.2848 3.33932 12.5865 3.99856 11.0031C4.65779 9.41963 5.62384 7.9823 6.84106 6.77389C8.05828 5.56548 9.5026 4.60989 11.0908 3.96218C12.6766 3.31546 14.3745 2.98844 16.087 2.9999ZM5 16.9999V22.9999C5 23.2651 5.10536 23.5195 5.29289 23.707C5.48043 23.8946 5.73478 23.9999 6 23.9999H8C8.26522 23.9999 8.51957 23.8946 8.70711 23.707C8.89464 23.5195 9 23.2651 9 22.9999V17.9999C9 17.7347 8.89464 17.4804 8.70711 17.2928C8.51957 17.1053 8.26522 16.9999 8 16.9999H5ZM27.1875 16.9999H24.1875C23.9223 16.9999 23.6679 17.1053 23.4804 17.2928C23.2929 17.4804 23.1875 17.7347 23.1875 17.9999V22.9999C23.1875 23.2651 23.2929 23.5195 23.4804 23.707C23.6679 23.8946 23.9223 23.9999 24.1875 23.9999H26.1875C26.4527 23.9999 26.7071 23.8946 26.8946 23.707C27.0821 23.5195 27.1875 23.2651 27.1875 22.9999V16.9999Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.1875 21.9999C28.7398 21.9999 29.1875 22.4476 29.1875 22.9999V25.9999C29.1875 27.326 28.6607 28.5978 27.723 29.5355C26.7854 30.4732 25.5136 30.9999 24.1875 30.9999H17C16.4477 30.9999 16 30.5522 16 29.9999C16 29.4477 16.4477 28.9999 17 28.9999H24.1875C24.9831 28.9999 25.7462 28.6839 26.3088 28.1213C26.8714 27.5587 27.1875 26.7956 27.1875 25.9999V22.9999C27.1875 22.4476 27.6352 21.9999 28.1875 21.9999Z"
              fill="#616C76"
              class="dark:fill-colMessaDark"
            />
          </svg>

          <div class="flex flex-col">
            <h3 class="font-medium">Help</h3>
            <p
              class="font-regular text-xs text-[#161718] dark:text-colMessaDark"
            >
              Help center, contact us, privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "SettingComponent",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active en versiones anteriores de Vue */ {
  transform: translateX(100%);
}
</style>
