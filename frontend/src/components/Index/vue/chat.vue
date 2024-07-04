<template>
    <div class="pt-4 pb-4 pl-6 pr-6 flex"> 
        <!--Images-->
        <div class="">
            
            <img :src="urlImage" alt="" class="h-10 w-10 rounded-full object-cover">
            
        </div>
        <!--Data user-->
        <div class="ml-2 w-3/4">
            <h3 class="font-semibold text-sm text-cblack dark:text-darkTitleChat">{{ nameUser }}</h3>
            <div class="">
                <p class="text-xs truncate w-7/12 text-tdescrip font-normal"><span v-if="lastMessage.send" class="text-cprimary">You: </span>{{ lastMessage.message }}</p>
                
            </div>
        </div>
        <!--Info user-->
        <div class="absolute right-[8%] flex flex-col justify-end items-end">
            <div class="">
                <p class="text-xs text-dcolor dark:text-darkDesChat">{{ lastConnection }}</p>
            </div>
            <!--DotNumber-->
            <div v-if="messageNotRead > 2" class="bg-cprimary text-xs text-white w-5 h-5 flex justify-center items-center rounded-full">{{ messageNotRead }}</div>
            <div v-if="messageNotRead == 1" class="bg-cprimary text-xs text-white w-2 h-2 mt-3 flex justify-center items-center rounded-full"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        urlImage: String,
        connect: Boolean,
        nameUser: String,
        lastMessage: String,
        lastConnection: String,
        messageNotRead: Number,
    },
    name: "chat"    
}
</script>
