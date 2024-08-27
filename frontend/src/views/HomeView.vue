<template>
  <div class="home min-h-screen flex flex-col">
    <headerNav
      @show-animated-component="showAnimatedComponent = true"
      @open-profile="openProfile"
    />
    <allChatComponent />
    <newMessageComponent />

    <settingComponent
      :visible="showAnimatedComponent"
      @close-settings-component="showAnimatedComponent = !showAnimatedComponent"
    />

    <profileComponent
      :userId="selectedUserId"
      :visible="showProfileComponent"
      @close="showProfileComponent = !showProfileComponent"
    />
  </div>
</template>

<script>
import headerNav from "@/components/principal/headerNav.vue";
import allChatComponent from "@/components/messaging/allChatComponent.vue";
import newMessageComponent from "@/components/messaging/newMessageComponent.vue";
import settingComponent from "@/components/user/SettingComponent.vue";
import profileComponent from "@/components/user/ProfileComponent.vue";

export default {
  name: "HomeView",
  components: {
    headerNav,
    allChatComponent,
    newMessageComponent,
    settingComponent,
    profileComponent,
  },
  data() {
    return {
      showAnimatedComponent: false,
      showProfileComponent: true,
      selectedUserId: null,
    };
  },
  methods: {
    openProfile(userId) {
      this.selectedUserId = userId;
      this.showProfileComponent = true;
    },
  },
};
</script>
