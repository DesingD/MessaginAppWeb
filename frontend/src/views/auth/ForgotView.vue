<template>
  <div class="flex flex-col items-center">
    <LogoComponent class="mt-16" />
    <h2 class="font-bold text-xl text-primary mt-3">Reset Password</h2>

    <form action="" class="mt-11">
      <div
        class="flex flex-col justify-center items-center w-screen gap-8 text-start"
      >
        <FormInput
          v-model="email"
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Please enter your email"
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
  name: "ForgotView",
  data() {
    return {
      email: "",
    };
  },
  components: {
    LogoComponent,
    FormInput,
  },
};
</script>
