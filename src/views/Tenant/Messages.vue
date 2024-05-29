<template>
   <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Mensagens</h2>
    
      <div class="flex justify-end mb-4">
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Nova Mensagem
        </button>
      </div>
    
      <div class="overflow-auto max-h-96">
        <ul class="space-y-4">
          <li class="p-4 bg-gray-100 rounded-md">
            <div class="flex justify-between">
              <h3 class="text-gray-800 font-bold">João Silva</h3>
              <p class="text-gray-600">12/01/2024</p>
            </div>
            <p class="text-gray-600 mt-2">Olá, gostaria de saber mais informações sobre o apartamento na Rua dos Pinheiros.</p>
          </li>
          <li class="p-4 bg-gray-100 rounded-md">
            <div class="flex justify-between">
              <h3 class="text-gray-800 font-bold">Maria Santos</h3>
              <p class="text-gray-600">15/01/2024</p>
            </div>
            <p class="text-gray-600 mt-2">Tenho interesse na casa de praia. O valor está incluso água e luz?</p>
          </li>
          <!-- Adicione mais mensagens aqui -->
        </ul>
      </div>
    </section>
</template>

<script lang="ts" setup></script>
