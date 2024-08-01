<template>
    <div class="">
        <Chat v-for="(user, index) in users" :urlImage="user.urlImage" :nameUser="user.nameUser" :lastMessage="user.lastMessage" :messageNotRead="user.messageNotRead" :lastConnection="user.lastConnection" :key="index"/>
    </div>
</template>
<script>
import Chat from './chat.vue'
import { usersConnected } from '../../../helpers/Users/connectUsers';
export default {
    data(){
        return{
            users:[]
        };
    },
    name: "Chats",
    components:{
        Chat
    },
    computed: {
        allchats (){        
            
            const all = usersConnected()                        
            console.log(all)
            return all
        }
    },
    created(){
        this.users = this.allchats
        
    }
}
</script>