<template>
  <div class="bg-white rounded-md shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Pesquise por Imóveis</h2>

    <div class="flex items-center mb-4">
      <div class="flex-grow">
        <input
          type="text"
          placeholder="Digite o endereço ou bairro"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
        Pesquisar
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white rounded-md shadow-md p-4">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Filtros</h3>
        <!-- Adicione os filtros aqui -->
        <div class="mb-2">
          <label for="tipo" class="block text-gray-700 font-bold mb-2"
            >Tipo de Imóvel:</label
          >
          <select
            id="tipo"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Todos</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="studio">Studio</option>
          </select>
        </div>
        <div class="mb-2">
          <label for="quartos" class="block text-gray-700 font-bold mb-2"
            >Quartos:</label
          >
          <input
            type="number"
            id="quartos"
            min="1"
            max="10"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div class="mb-2">
          <label for="banheiros" class="block text-gray-700 font-bold mb-2"
            >Banheiros:</label
          >
          <input
            type="number"
            id="banheiros"
            min="1"
            max="5"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div class="mb-2">
          <label for="preco" class="block text-gray-700 font-bold mb-2"
            >Preço:</label
          >
          <input
            type="range"
            id="preco"
            min="1000"
            max="10000"
            step="100"
            class="w-full"
          />
        </div>
      </div>

      <div
        class="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <!-- Aqui vão os cards com as informações dos imóveis -->
        <div v-for="(imovel, index) in imoveis" :key="index" class="bg-white rounded-md shadow-md p-4">
          <img
            :src="imovel.imageUrl"
            alt="Imóvel"
            class="w-full rounded-md"
          />
          <h3 class="text-lg font-bold text-gray-800 mt-2">
            {{ imovel.title }}
          </h3>
          <p class="text-gray-600 mt-1">
            {{ imovel.address }}
          </p>
          <p class="text-gray-600 mt-1">
            {{ imovel.description }}
          </p>
          <router-link :to="`/details/${index + 1}`">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
              Ver Detalhes
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Seções adicionais da página -->
    <div class="bg-white rounded-md shadow-md p-6 mt-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Imóveis Recentes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(imovel, index) in recentes" :key="index" class="bg-white rounded-md shadow-md p-4">
          <img
            :src="imovel.imageUrl"
            alt="Imóvel"
            class="w-full rounded-md"
          />
          <h3 class="text-lg font-bold text-gray-800 mt-2">
            {{ imovel.title }}
          </h3>
          <p class="text-gray-600 mt-1">
            {{ imovel.address }}
          </p>
          <p class="text-gray-600 mt-1">
            {{ imovel.description }}
          </p>
          <router-link :to="`/details/${index + 1}`">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
              Ver Detalhes
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-md shadow-md p-6 mt-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Imóveis Destacados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(imovel, index) in destacados" :key="index" class="bg-white rounded-md shadow-md p-4">
          <img
            :src="imovel.imageUrl"
            alt="Imóvel"
            class="w-full rounded-md"
          />
          <h3 class="text-lg font-bold text-gray-800 mt-2">
            {{ imovel.title }}
          </h3>
          <p class="text-gray-600 mt-1">
            {{ imovel.address }}
          </p>
          <p class="text-gray-600 mt-1">
            {{ imovel.description }}
          </p>
          <router-link :to="`/details/${index + 1}`">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
              Ver Detalhes
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imoveis = ref([
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Apartamento Moderno',
    address: 'Rua dos Pinheiros, 123 - São Paulo, SP',
    description: '2 quartos, 2 banheiros - R$ 2.500/mês',
  },
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Casa com Jardim',
    address: 'Rua das Flores, 456 - Rio de Janeiro, RJ',
    description: '3 quartos, 2 banheiros - R$ 3.000/mês',
  },
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Studio Aconchegante',
    address: 'Avenida Paulista, 789 - São Paulo, SP',
    description: '1 quarto, 1 banheiro - R$ 1.800/mês',
  },
]);

const recentes = ref([
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Casa Térrea',
    address: 'Rua dos Girassóis, 123 - São Paulo, SP',
    description: '3 quartos, 2 banheiros - R$ 3.500/mês',
  },
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Apartamento de Luxo',
    address: 'Avenida da Liberdade, 456 - São Paulo, SP',
    description: '4 quartos, 3 banheiros - R$ 5.000/mês',
  },
]);

const destacados = ref([
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Cobertura com Vista',
    address: 'Rua da Praia, 789 - Rio de Janeiro, RJ',
    description: '2 quartos, 2 banheiros - R$ 4.000/mês',
  },
  {
    imageUrl: 'https://picsum.photos/800/600',
    title: 'Casa em Condomínio',
    address: 'Rua das Palmeiras, 101 - São Paulo, SP',
    description: '4 quartos, 3 banheiros - R$ 4.500/mês',
  },
]);

</script>