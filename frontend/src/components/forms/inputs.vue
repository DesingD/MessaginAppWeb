<template>
  <div class="flex flex-col w-11/12 text-end gap-1">
    <label
      :for="id"
      class="font-semibold text-labelCol text-sm dark:text-[#EEE]"
      >{{ label }}</label
    >
    <input
      :type="type"
      :name="name"
      :id="id"
      class="bg-backButton rounded-lg h-14 border-2 text-black border-lineButton text-sm pl-4 dark:bg-backButtonDark dark:border-lineButtonDark dark:text-white focus:outline-none focus:border-primary"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind:class="{ 'border-primary dark:border-primary': modelValue }"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
  },
};
</script>
