<template>
   <div class="bg-white rounded-md shadow-md p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" v-model="user.email" id="email" 
                 class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-bold mb-2">Senha:</label>
          <input type="password" v-model="user.password" id="password" 
                 class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md w-full">Entrar</button>
      </form>

      <div class="text-center mt-4">
        <router-link to="/register" class="text-gray-600 hover:text-blue-500">
            Não tem uma conta? Registre-se agora!
        </router-link>
      </div>

    </div>
</template>

<script lang="ts" setup>
import { api } from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import { AxiosError } from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const auth = useAuthStore()

const user = reactive({
    email: 'ysawayn@example.org',
    password: 'password'
})

const handleLogin = async () => {
    try {
        const {data} = await api.post('/login', user)
        console.log(data.data)
        auth.setToken(data.data.token)
        auth.setUser({
          name: data.data?.name,
          email: user.email, 
          type: data.data?.type
        })
        auth.setIsAuth(true)

        if(data.data.type == 'tenant'){
          router.push('/tenant')
        }else{
          router.push('/owner')
        }
        // }else if(data.data.type == 'owner'){
        //   router.push('/owner')
        // }


    } catch (error) {
        const err = error as AxiosError 
        console.error(err?.response?.data)
    }
}
</script>
