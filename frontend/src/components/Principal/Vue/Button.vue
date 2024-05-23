<template>
    <div class="flex justify-center items-center">
        <button class="bg-cprimary w-4/5 m-auto h-12 rounded-lg text-sm text-white font-semibold">
            {{text}}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    },
}
</script>