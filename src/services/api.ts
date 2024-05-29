import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const baseUrl = 'http://api-ronda.test/api'

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
    'Content-type': 'application/json'
    }
})

// api.interceptors.request.use(config => {
//     const authUser = useAuthStore()
//     if(authUser.token){
//         config.headers.Authorization = ` Bearer ${authUser.token}`
//     }
//     return config
// })