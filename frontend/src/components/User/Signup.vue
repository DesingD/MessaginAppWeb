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
            <div class="flex flex-col w-4/5 m-auto gap-1">
                <label for="text" class="text-right text-sm font-semibold text-cblack dark:text-white">Confirm Password</label>
                <input type="password" class="border-cprimary border-2 h-11 pl-2 rounded-lg dark:bg-bgColor dark:text-white" placeholder="Pleace enter your password again" v-model="confirmPassword">
            </div>

    </div>

    <div class="mt-14 flex flex-col gap-2">
        <a href="/auth/signin" class="text-xs font-normal text-[#494F7A] dark:text-[#D6D9ED] ml-[10%]">Already Registered?</a>
        <Button text="Submit" @click="Signup"/>
    </div>
    </div>
</template>

<script>
import Button from '../Principal/Vue/Button.vue'
import InputText from '../Principal/Vue/InputT.vue'
import { signup } from '../../helpers/Users/signup.js';

export default {
    data(){
        return{
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    name: 'Signup',
    components:{
        Button,
        InputText
    },
    methods:{
        Signup(){            
            signup(this.email,this.password,this.confirmPassword)
        }
    }
}
</script>
