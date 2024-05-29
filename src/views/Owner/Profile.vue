<template>
   <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Meu Perfil</h2>
    
      <div class="flex items-center mb-4">
        <div class="avatar avatar-lg">
          <img src="https://picsum.photos/300/200" alt="Foto do Proprietário" />
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-bold text-gray-800">João da Silva</h3>
          <p class="text-gray-600">joao.silva@email.com</p>
        </div>
      </div>
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Nome Completo:</label>
          <p class="text-gray-600">João da Silva</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">CPF:</label>
          <p class="text-gray-600">123.456.789-00</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Email:</label>
          <p class="text-gray-600">joao.silva@email.com</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Telefone:</label>
          <p class="text-gray-600">(11) 99999-9999</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Endereço:</label>
          <p class="text-gray-600">Rua ABC, 123 - São Paulo, SP</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Data de Nascimento:</label>
          <p class="text-gray-600">01/01/1980</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Senha:</label>
          <p class="text-gray-600">••••••••</p>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Foto de Perfil:</label>
          <p class="text-gray-600">
            <a href="#" class="text-blue-500 hover:text-blue-600">Alterar Foto</a>
          </p>
        </div>
      </div>
    
      <div class="flex justify-end">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Editar Perfil
        </button>
      </div>
    </section>
</template>

<script lang="ts" setup></script>
