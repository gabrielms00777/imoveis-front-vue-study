import { useAuthStore } from "@/stores/auth"
import type { RouteLocationNormalized, NavigationGuard } from 'vue-router'

export const tenantGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const auth = useAuthStore()
    if (auth.isAuth && auth.userType === 'tenant') {
      next()
    } else {
      next({ name: 'login' })
    }
  }

  export const ownerGuard: NavigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const auth = useAuthStore()
    if (auth.isAuth && auth.userType === 'owner') {
      next()
    } else {
      next({ name: 'login' })
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