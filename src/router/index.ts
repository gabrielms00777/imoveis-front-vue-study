import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/components/layouts/HomeLayout.vue'
import TenantLayout from '@/components/layouts/TenantLayout.vue'
import OwnerLayout from '@/components/layouts/OwnerLayout.vue'
import { authGuard, ownerGuard, tenantGuard } from './routes'

function lazyLoad(view: string){
  return () => import(`../views/${view}.vue`)
}
function lazyLoadOwner(view: string){
  return () => import(`../views/Owner/${view}.vue`)
}
function lazyLoadOwnerTenant(view: string){
  return () => import(`../views/Tenant/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: lazyLoad("Index")
        },
        {
          path: 'details/:id',
          name: 'details',
          component: lazyLoad("Details")
        },
        {
          path: 'filters',
          name: 'filters',
          component: lazyLoad("Filters")
        },
        {
          path: 'register',
          name: 'register',
          component: lazyLoad("Register")
        },
        {
          path: 'login',
          name: 'login',
          component: lazyLoad("Login")
        },
      ]
    },
    {
      path: '/tenant',
      component: TenantLayout,
      beforeEnter: tenantGuard,
      // meta: {
      //   auth: true
      // },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: lazyLoadOwnerTenant("Dashboard")
        },
        {
          path: 'schedule',
          name: 'schedule',
          component: lazyLoadOwnerTenant("Schedule")
        },
        {
          path: 'settings',
          name: 'settings',
          component: lazyLoadOwnerTenant("Settings")
        },
        {
          path: 'contracts',
          name: 'contracts',
          component: lazyLoadOwnerTenant("Contracts")
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: lazyLoadOwnerTenant("Favorites")
        },
        {
          path: 'search-history',
          name: 'searchHistory',
          component: lazyLoadOwnerTenant("SearchHistory")
        },
        {
          path: 'profile',
          name: 'profile',
          component: lazyLoadOwnerTenant("Profile")
        },
        {
          path: 'view-contract/:id',
          name: 'viewContract',
          component: lazyLoadOwnerTenant("ViewContract")
        }
      ]
    },
    {
      path: '/owner',
      component: OwnerLayout,
      beforeEnter: ownerGuard,
      // meta: {
      //   auth: true
      // },
      children: [
        {
          path: 'contracts',
          name: 'ownerContracts',
          component: lazyLoadOwner("Contracts")
          // component: lazyLoad("Owner/Contracts")
          // component: () => import(`../views/Owner/Contracts.vue`)
        },
        {
          path: 'contracts/:id',
          name: 'ownerContractDetails',
          component: lazyLoadOwner("ContractDetails")
        },
        {
          path: 'properties',
          name: 'properties',
          component: lazyLoadOwner("Properties")
        },
        {
          path: 'properties/create',
          name: 'createProperty',
          component: lazyLoadOwner("CreateProperty")
        },
        {
          path: 'properties/:id',
          name: 'propertyDetails',
          component: lazyLoadOwner("PropertyDetails")
        },
        {
          path: 'dashboard',
          name: 'ownerDashboard',
          component: lazyLoadOwner("Dashboard")
        },
        {
          path: 'messages',
          name: 'messages',
          component: lazyLoadOwner("Messages")
        },
        {
          path: 'messages/:id',
          name: 'messageDetails',
          component: lazyLoadOwner("MessageDetails")
        },
        {
          path: 'profile',
          name: 'ownerProfile',
          component: lazyLoadOwner("Profile")
        },
        {
          path: 'reservations',
          name: 'reservations',
          component: lazyLoadOwner("Reservations")
        },
        {
          path: 'reservations/create',
          name: 'createReservation',
          component: lazyLoadOwner("CreateReservation")
        },
        {
          path: 'reservations/:id',
          name: 'reservationDetails',
          component: lazyLoadOwner("ReservationDetails")
        },
      ]
    },
  ]
})

router.beforeEach(authGuard)

export default router
