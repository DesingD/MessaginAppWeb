<template>
    <div class="flex flex-col w-4/5 m-auto gap-1">
        <label for="text" class="text-right text-sm font-semibold text-cblack dark:text-white">{{label}}</label>
        <input :type="typeI" class="border-cprimary border-2 h-11 pl-2 rounded-lg dark:bg-bgColor dark:text-white" :placeholder="placeholder" v-model="inputValue" @input="updateValue">
    </div>
</template>

<script>
export default {
    name: 'inputT',
    props: {
        label: String,
        placeholder: String,
        typeI: String,
        value: String,
    },
    data() {
        return{
            inputValue: this.value
        }
    },
    methods: {
        updateValue(){
            this.$emit('input', this.inputValue)
        }
    }

}   
</script>