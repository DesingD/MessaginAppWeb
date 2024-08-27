<template>
  <div class="flex pt-4 pr-7 pb-4 pl-7 gap-3 justify-between">
    <div class="flex gap-1 items-center">
      <!--Image-->
      <div class="w-12">
        <img
          src="https://picsum.photos/700/400?random"
          alt="image"
          class="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <!-- Contact Info -->
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-sm text-labelCol dark:text-textLDark">
          {{ data.name }}
        </h2>
        <p
          class="truncate w-40 text-colMessa font-normal text-sm pt-[2px] dark:text-colMessaDark"
        >
          {{ data.lastMessage }}
        </p>
      </div>
    </div>

    <!-- Date -->
    <div class="flex flex-col items-end gap-[6px]">
      <p class="text-[#8FA0AF] text-xs dark:text-[#778592]">
        {{ data.hourLast }}
      </p>
      <div
        class="w-5 h-5 bg-primary flex justify-center items-center rounded-full"
        :class="{ 'w-2 h-2 translate-y-1': data.messachesNotRead === 1 }"
        v-if="data.messachesNotRead > 0"
      >
        <p
          class="text-white text-xs dark:text-colMessaDark"
          v-if="data.messachesNotRead > 1"
        >
          <span v-if="data.messachesNotRead > 9">+9</span>
          <span v-if="data.messachesNotRead <= 9">
            {{ data.messachesNotRead }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
