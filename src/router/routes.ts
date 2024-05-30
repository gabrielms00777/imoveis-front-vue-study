import { useAuthStore } from "@/stores/auth"
import type { RouteLocationNormalized, NavigationGuard } from 'vue-router'

export const tenantGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const auth = useAuthStore()
    if (auth.user?.type === 'tenant') {
      next()
    } else if(auth.user?.type === 'owner') {
      next({ name: 'owner' })
    } else {
      next({ name: 'login' })
    }
  }
  
  export const ownerGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const auth = useAuthStore()
    // console.log(auth.user?.type)
    if (auth.user?.type === 'owner') {
      next()
    } else if(auth.user?.type === 'tenant') {
      next({ name: 'tenant' })

    } else {
        next({ name: 'login' })
      }
  }

  export const loginGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const auth = useAuthStore()
    // console.log(auth.isAuthenticated)
    if (!!auth.isAuthenticated ) {
      next({ name: 'home' })
    } else {
        next()
      }
  }
// export const authGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
//   if (to.meta?.auth) {
//     const auth = useAuthStore()
//     if (auth.isAuth) {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   } else {
//     next()
//   }
// }