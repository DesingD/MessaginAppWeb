<template>
    <div>
        <!--Aqui va el codigo de los mensajes-->
        <div >
           <!-- <img :src="image" alt="" class="w-10 h-10 rounded-full object-cover">-->

           <ul class=" p-4 flex flex-col gap-6 dark:text-darkTitleChat justify-end">
                <li class="flex flex-col items-start " v-for="(message, index) in messages" :key="index" :class="{'items-end': message.send}">
                    <p class="relative dark:bg-borderidark p-4 rounded-t-lg rounded-br-lg max-w-[90%]" :class="{'text-right rounded-br-none rounded-bl-lg dark:bg-[#0086EA]': message.send}">{{message.message}}</p>
                    <span class="static left-0" :class="{'text-right right-0': message.send}">10:30</span>
                </li>
           </ul>
            <!-- <div class="dark:text-darkTitleChat" v-for="(message, index) in messages" :key="index">
                <h4 :class="{'left hola' : message.send}" class="dark:bg-borderidark p-4 rounded-t-lg rounded-br-lg w-auto"></h4>
                <p class="dark:text-darkDesChat text-sm ">10:36 PM</p>
            </div> -->
            
        </div>
    </div>
</template>
<script>
import { FindMessages } from '../../helpers/chats/findMessages';
export default {
    data(){
        return{
            messages:[]
        };
    },
    name:"Messages",
    props:{
        idChat: String,
        image: String
    },
    computed: {
        allMessages() {
            const messages = FindMessages()
            console.log(messages)
            return messages
        }
    },
    created(){
        this.messages = this.allMessages
    }
}
</script>