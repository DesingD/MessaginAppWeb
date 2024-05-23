<template>
    <div>
        <div class="mt-24 flex flex-col gap-11">
            <div class="flex flex-col w-4/5 m-auto gap-1">
                <label for="text" class="text-right text-sm font-semibold text-cblack dark:text-white">Email</label>
                <input type="text" class="border-cprimary border-2 h-11 pl-2 rounded-lg dark:bg-bgColor dark:text-white" placeholder="Pleace enter your email" v-model="email">
            </div>
            <div class="flex flex-col w-4/5 m-auto gap-1">
                <label for="text" class="text-right text-sm font-semibold text-cblack dark:text-white">Password</label>
                <input type="password" class="border-cprimary border-2 h-11 pl-2 rounded-lg dark:bg-bgColor dark:text-white" placeholder="Pleace enter your password" v-model="password">
            </div>

    </div>

    <div class="mt-14 flex flex-col gap-2">
        <a href="/auth/signup" class="text-xs font-normal text-[#494F7A] dark:text-[#D6D9ED] ml-[10%]">Sign Up here!</a>
        <Button text="Submit" @click="Signin"/>
    </div>
    </div>
</template>

<script>
import Button from '../Principal/Vue/Button.vue'
import { Signin } from '../../helpers/Users/signin.js';

export default {
    data(){
        return{
            email: '',
            password: '',            
        }
    },
    name: 'Signin',
    components:{
        Button,        
    },
    methods:{
        Signin(){            
            Signin(this.email,this.password)
        }
    }
}
</script>
