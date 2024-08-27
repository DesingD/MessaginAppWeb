<template>
  <div class="flex flex-col items-center">
    <LogoComponent class="mt-16" />
    <h2 class="font-bold text-xl text-primary mt-3">Sign In</h2>

    <form action="" class="mt-11">
      <div
        class="flex flex-col justify-center items-center w-screen gap-8 text-start"
      >
        <FormInput
          v-model="newPassword"
          label="New Password"
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Please enter your new password"
        />
        <FormInput
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Please enter your new password again"
        />
        <div class="mt-[10%] flex flex-col w-11/12 gap-3">
          <router-link
            to="/SignUp"
            class="text-sm text-[#363738] dark:text-[#fff]"
            >Sign Up here!</router-link
          >
          <button
            type="submit"
            class="bg-primary h-14 font-semibold text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LogoComponent from "@/components/Logo.vue";
import FormInput from "@/components/forms/inputs.vue";
export default {
  name: "ResetPassView",
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
    };
  },
  components: {
    LogoComponent,
    FormInput,
  },
};
</script>
