<template>
    <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Meus Imóveis</h2>
        <router-link :to="{name: 'createProperty'}">
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Cadastrar Novo Imóvel
          </button>
        </router-link>
      </div>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/seed/picsum/200/150" alt="Foto do Imóvel" class="w-full rounded-md mb-2">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Apartamento Moderno - Rua dos Pinheiros, 123</h3>
          <p class="text-gray-600 mb-2">2 Quartos | 2 Banheiros | 80m² | Varanda | Piscina | Academia</p>
          <div class="flex justify-between">
            <p class="text-green-500 font-bold">Disponível</p>
            <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detalhes</a>
          </div>
        </div>
    
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/seed/picsum/200/150" alt="Foto do Imóvel" class="w-full rounded-md mb-2">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Casa de Praia - Praia da Joatinga, 456</h3>
          <p class="text-gray-600 mb-2">3 Quartos | 3 Banheiros | 120m² | Jardim | Churrasqueira | Área de Lazer</p>
          <div class="flex justify-between">
            <p class="text-red-500 font-bold">Indisponível</p>
            <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detalhes</a>
          </div>
        </div>
    
        <div class="bg-white rounded-md shadow-md p-4">
          <img src="https://picsum.photos/seed/picsum/200/150" alt="Foto do Imóvel" class="w-full rounded-md mb-2">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Loft Moderno - Rua da Consolação, 789</h3>
          <p class="text-gray-600 mb-2">1 Quarto | 1 Banheiro | 50m² | Cozinha Americana | Área de Trabalho</p>
          <div class="flex justify-between">
            <p class="text-green-500 font-bold">Disponível</p>
            <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Detalhes</a>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup></script>
