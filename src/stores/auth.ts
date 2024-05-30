import router from "@/router";
import { api } from "@/services/api";
import type { AxiosError } from "axios";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

interface AuthUserState {
    user: {
        name: string | null,
        email: string | null,
        type: 'tenant' | 'owner' | 'admin' | null;
    } | null,
    token: string | null
}

export const useAuthStore = defineStore('authUser', () => {
    const user = ref<AuthUserState['user']>(JSON.parse(localStorage.getItem('user') ?? '{}') as AuthUserState['user'])
    const token = ref<AuthUserState['token']>(localStorage.getItem('token'))
    const isAuth = ref(false)

    // user.value = JSON.parse(localStorage.getItem('user') ?? '{}') as AuthUserState['user']

    const setUser = (userValue: AuthUserState['user']) => {
        // console.log(userValue)
        localStorage.setItem('user',JSON.stringify(userValue))
        user.value = userValue
    }
    
    const setToken = (tokenValue: AuthUserState['token']) => {
        localStorage.setItem('token',JSON.stringify(tokenValue))
        token.value = tokenValue
    }

    const checkToken = async () => {
        try {
            const tokenAuth = 'Bearer ' + token.value
            const {data} = await api.get('/user', {
                headers: {
                    Authorization: tokenAuth,
                },
            })

            return data
        } catch (error) {
            const err = error as AxiosError 
            clear()
            router.push('/login')
            console.error(err?.response?.data)
        }
    }

    const setIsAuth = (auth: boolean) => {
        isAuth.value = auth
    }

    const isAuthenticated = computed(() => {
        return user.value && token.value
    })

    const clear = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        isAuth.value = false
        token.value = null
        user.value = null
    }

    return {
        token,
        user,
        setToken,
        setUser,
        checkToken,
        isAuthenticated,
        clear,
        setIsAuth,
        isAuth
    }
})