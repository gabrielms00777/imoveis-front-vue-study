<template>
   <section class="bg-white rounded-md shadow-md p-6 w-3/4 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Configurações</h2>

      <div class="mb-4">
        <label for="senha" class="block text-gray-700 font-bold mb-2">Senha:</label>
        <input type="password" id="senha" 
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
      </div>
      <div class="mb-4">
        <label for="confirmar-senha" class="block text-gray-700 font-bold mb-2">Confirmar Senha:</label>
        <input type="password" id="confirmar-senha" 
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
      </div>
      <div class="mb-4">
        <label for="notificacoes" class="block text-gray-700 font-bold mb-2">Notificações:</label>
        <select id="notificacoes" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
          <option value="todas">Todas</option>
          <option value="email">Somente por E-mail</option>
          <option value="app">Somente no App</option>
          <option value="nenhuma">Nenhuma</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="newsletter" class="block text-gray-700 font-bold mb-2">Newsletter:</label>
        <input type="checkbox" id="newsletter" 
               class="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500">
      </div>

      <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Salvar Alterações</button>
    </section>
</template>

<script lang="ts" setup></script>
