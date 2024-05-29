<template>
    <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Detalhes da Reserva</h2>
      
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Imóvel:</label>
            <p class="text-gray-600">Apartamento Moderno - Rua dos Pinheiros, 123</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Data de Início:</label>
            <p class="text-gray-600">01/01/2024</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Data de Fim:</label>
            <p class="text-gray-600">15/01/2024</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Nome do Hóspede:</label>
            <p class="text-gray-600">João Silva</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Email do Hóspede:</label>
            <p class="text-gray-600">joao.silva@email.com</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Telefone do Hóspede:</label>
            <p class="text-gray-600">(11) 99999-9999</p>
          </div>
      
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Status:</label>
            <p class="text-green-500 font-bold">Confirmada</p>
          </div>
        </div>
      
        <!-- Se a reserva estiver pendente, adicione botões para confirmar ou rejeitar -->
        <div class="flex justify-end mt-4">
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" disabled>
            Confirmar
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" disabled>
            Rejeitar
          </button>
        </div>
      </section>
</template>

<script lang="ts" setup></script>
