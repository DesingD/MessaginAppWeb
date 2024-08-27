<template>
  <div class="w-full relative">
    <button
      @click="showModal = true"
      class="bg-primary m-auto w-5/6 h-14 fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 rounded-lg text-white font-semibold"
    >
      New chat
    </button>

    <div v-if="showModal" class="modal">
      <div class="modal-content rounded-lg bg-[#fefefe] dark:bg-[#21262B]">
        <span class="close" @click="showModal = false">&times;</span>
        <input
          type="text"
          placeholder="Find...."
          v-model="searchQuery"
          class="pl-3 bg-backButton rounded-lg w-5/6 h-14 border-2 text-black border-lineButton text-sm dark:bg-backButtonDark dark:border-lineButtonDark dark:text-white focus:outline-none focus:border-primary"
        />
        <!--Result Search-->
        <ul class="mt-4 flex flex-col gap-3 max-h-52 overflow-auto">
          <div
            class="flex gap-1 items-center"
            v-for="item in filteredItems"
            :key="item.id"
            :data="item"
          >
            <!--Image-->
            <div class="w-12">
              <img
                src="https://picsum.photos/700/400?random"
                alt="image"
                class="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <!--Contact Info-->
            <div class="flex-1 min-w-0">
              <h2 class="font-bold text-sm text-labelCol dark:text-textLDark">
                {{ item.name }}
              </h2>
              <p
                class="truncate w-40 text-colMessa font-normal text-sm pt-[2px] dark:text-colMessaDark"
              >
                {{ item.bio }}
              </p>
            </div>
            <div class="flex flex-col items-end gap-[6px]"></div>
            <div
              class="w-6 h-6 bg-primary flex justify-center items-center rounded-md"
            >
              <button>
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    d="M6 12H12M18 12H12M12 12V6M12 12V18"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMessageComponent",
  data() {
    return {
      showModal: false,
      searchQuery: "",
      data: [
        {
          uid: "1",
          name: "alice",
          bio: "hello my friend",
        },
        {
          uid: "2",
          name: "julian",
          bio: "esta es mi bio men",
        },
        {
          uid: "3",
          name: "johan",
          bio: "eskibiri toilet",
        },
        {
          uid: "4",
          name: "soland",
          bio: "me gusta hacer sopa cuando esta dando calor",
        },
        {
          uid: "5",
          name: "johan",
          bio: "eskibiri toilet2",
        },
        {
          uid: "6",
          name: "soland",
          bio: "me gusta hacer sopa cuando esta dando calor2",
        },
      ],
    };
  },
  methods: {},
  computed: {
    filteredItems() {
      return this.data.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
