<template>
    <div class="bg-white rounded-md shadow-md p-6">
       <h2 class="text-2xl font-bold text-gray-800 mb-4">Cadastro</h2>
 
       <form>
         <div class="mb-4">
           <label for="nome" class="block text-gray-700 font-bold mb-2">Nome completo:</label>
           <input type="text" id="nome" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
         </div>
         <div class="mb-4">
           <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
           <input type="email" id="email" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
         </div>
         <div class="mb-4">
           <label for="telefone" class="block text-gray-700 font-bold mb-2">Telefone:</label>
           <input type="tel" id="telefone" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
         </div>
         <div class="mb-4">
           <label for="password" class="block text-gray-700 font-bold mb-2">Senha:</label>
           <input type="password" id="password" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
         </div>
         <div class="mb-4">
           <label for="confirma_senha" class="block text-gray-700 font-bold mb-2">Confirmar Senha:</label>
           <input type="password" id="confirma_senha" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
         </div>
         <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md w-full">Cadastrar</button>
       </form>
 
       <div class="text-center mt-4">
        <router-link to="/login" class="text-gray-600 hover:text-blue-500">
          Já possui uma conta? Faça login.
        </router-link>
       </div>
 
     </div>
 </template>
 
 <script lang="ts" setup></script>
 