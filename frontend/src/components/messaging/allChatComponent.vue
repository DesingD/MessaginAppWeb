<template>
  <div>
    <SearchComponent @search="filterList" />
    <ul class="mt-4">
      <ContactComponent
        v-for="item in filteredItems"
        :key="item.id"
        :data="item"
      />
    </ul>
  </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue";
import ContactComponent from "./ContactComponent.vue";

export default {
  name: "AllChatComponent",
  components: {
    SearchComponent,
    ContactComponent,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Alice",
          lastMessage: "hello my friend dwadawdadwadawdwdwadad",
          hourLast: "12:00 PM",
          messachesNotRead: 9,
        },
        {
          id: 2,
          name: "Bob",
          lastMessage: "hello my friend",
          hourLast: "12:00 PM",
          messachesNotRead: 10,
        },
        {
          id: 3,
          name: "Charlie",
          lastMessage: "hello my friend",
          hourLast: "12:00 PM",
          messachesNotRead: 1,
        },
        {
          id: 4,
          name: "Dany Mitte",
          lastMessage: "hello my friend, how are you?",
          hourLast: "6:36 PM",
          messachesNotRead: 0,
        },
        // Agrega más elementos según sea necesario
      ],
      searchQuery: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    filterList(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>
