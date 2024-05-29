<template>
    <section class="bg-white rounded-md shadow-md p-6 w-3/4 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Meu Perfil</h2>

      <div class="mb-4">
        <label for="nome" class="block text-gray-700 font-bold mb-2">Nome:</label>
        <input type="text" id="nome" value="João da Silva"
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" readonly>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" value="joao@email.com"
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" readonly>
      </div>
      <div class="mb-4">
        <label for="telefone" class="block text-gray-700 font-bold mb-2">Telefone:</label>
        <input type="tel" id="telefone" value="(11) 99999-9999"
               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" readonly>
      </div>

      <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Editar Perfil</button>
    </section>


</template>

<script lang="ts" setup></script>
