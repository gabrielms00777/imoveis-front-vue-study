<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto py-4 px-6">
    <router-link to="/">
      <h1 class="text-3xl font-bold text-gray-800">Encontre seu Novo Lar</h1>
    </router-link>
      <p class="text-gray-600 mt-2">
        Encontre o imóvel ideal para você com facilidade e segurança.
      </p>
    </div>
  </header>

  <main class="container mx-auto py-8 px-6 flex">

<aside class="bg-gray-800 text-white w-1/5 py-6 px-4 rounded-md shadow-md">
  <h2 class="text-xl font-bold mb-4">Menu</h2>

  <ul class="flex flex-col space-y-2">
    <li class="mb-2">
      <router-link to="/tenant" class="block py-2 px-4 rounded-md hover:bg-gray-700">Dashboard</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/profile" class="block py-2 px-4 rounded-md hover:bg-gray-700">Meu Perfil</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/search-history" class="block py-2 px-4 rounded-md hover:bg-gray-700">Histórico de Buscas</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/schedule" class="block py-2 px-4 rounded-md hover:bg-gray-700 active">Agendamentos de Visita</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/contracts" class="block py-2 px-4 rounded-md hover:bg-gray-700">Visualizar Contratos</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/favorites" class="block py-2 px-4 rounded-md hover:bg-gray-700">Favoritos</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/tenant/settings" class="block py-2 px-4 rounded-md hover:bg-gray-700">Configurações</router-link>
    </li>
    <li class="mb-2">
      <router-link to="/login" class="block py-2 px-4 rounded-md hover:bg-gray-700">Sair</router-link>
    </li>
  </ul>
</aside>

<RouterView />

</main>

  <footer class="bg-gray-800 text-white py-4 mt-8">
    <div class="container mx-auto text-center">
      <p>© 2023 Seu Sistema de Aluguel de Imóveis</p>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
