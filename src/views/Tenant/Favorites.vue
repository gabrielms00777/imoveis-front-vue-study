<template>
   <section class="bg-white rounded-md shadow-md p-6 w-3/4 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Favoritos</h2>

      <div class="flex mb-4">
        <label for="tipo" class="block text-gray-700 font-bold mb-2 mr-2">Tipo:</label>
        <select id="tipo"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
          <option value="">Todos</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="terreno">Terreno</option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/800/600" alt="Imóvel" class="w-full rounded-md">
          <h3 class="text-lg font-bold text-gray-800 mt-2">Apartamento Moderno</h3>
          <p class="text-gray-600 mt-1">Rua dos Pinheiros, 123 - São Paulo, SP</p>
          <p class="text-gray-600 mt-1">2 quartos, 2 banheiros - R$ 2.500/mês</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">Ver Detalhes</button>
        </div>
        <!-- Card 2 -->
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/800/600" alt="Imóvel" class="w-full rounded-md">
          <h3 class="text-lg font-bold text-gray-800 mt-2">Casa com Jardim</h3>
          <p class="text-gray-600 mt-1">Avenida Paulista, 456 - São Paulo, SP</p>
          <p class="text-gray-600 mt-1">3 quartos, 3 banheiros - R$ 4.000/mês</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">Ver Detalhes</button>
        </div>
        <!-- Card 3 -->
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/800/600" alt="Imóvel" class="w-full rounded-md">
          <h3 class="text-lg font-bold text-gray-800 mt-2">Terreno para Construção</h3>
          <p class="text-gray-600 mt-1">Rua da Consolação, 789 - São Paulo, SP</p>
          <p class="text-gray-600 mt-1">200m² - R$ 500.000</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">Ver Detalhes</button>
        </div>
      </div>

    </section>
</template>

<script lang="ts" setup></script>
