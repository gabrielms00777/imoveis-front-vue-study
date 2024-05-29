<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto py-4 px-6">
      <div class="flex justify-between items-center">
        <div>
          <router-link to="/">
            <h1 class="text-3xl font-bold text-gray-800">Encontre seu Novo Lar</h1>
          </router-link>
            <p class="text-gray-600 mt-2">
              Encontre o imóvel ideal para você com facilidade e segurança.
            </p>
        </div>
        <div class="flex">
          <router-link to="/login">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
          Login
        </button>
          </router-link>
          <router-link to="/register">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
              Cadastrar
        </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>

  <main class="container mx-auto py-8 px-6">
    <RouterView />
    <!-- <slot></slot> -->
  </main>

  <footer class="bg-gray-800 text-white py-4 mt-8">
    <div class="container mx-auto text-center">
      <p>© 2023 Seu Sistema de Aluguel de Imóveis</p>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
