<template>
   <section class="bg-white rounded-md shadow-md p-6 w-3/4 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Contrato - Apartamento Moderno</h2>

      <div class="mb-4">
        <label for="nome-locatario" class="block text-gray-700 font-bold mb-2">Locatário:</label>
        <p id="nome-locatario" class="text-gray-600">João da Silva</p>
      </div>
      <div class="mb-4">
        <label for="imovel" class="block text-gray-700 font-bold mb-2">Imóvel:</label>
        <p id="imovel" class="text-gray-600">Apartamento Moderno - Rua dos Pinheiros, 123 - São Paulo, SP</p>
      </div>
      <div class="mb-4">
        <label for="data-inicio" class="block text-gray-700 font-bold mb-2">Data de Início:</label>
        <p id="data-inicio" class="text-gray-600">01/01/2023</p>
      </div>
      <div class="mb-4">
        <label for="valor-aluguel" class="block text-gray-700 font-bold mb-2">Valor do Aluguel:</label>
        <p id="valor-aluguel" class="text-gray-600">R$ 2.500,00</p>
      </div>
      <div class="mb-4">
        <label for="cláusulas" class="block text-gray-700 font-bold mb-2">Cláusulas:</label>
        <p id="cláusulas" class="text-gray-600">
          Aqui você pode inserir o conteúdo das cláusulas do contrato.
          <br>
          Pode ser um texto extenso com várias informações relevantes.
        </p>
      </div>
      <div class="mb-4">
        <label for="assinaturas" class="block text-gray-700 font-bold mb-2">Assinaturas:</label>
        <div class="flex">
          <img src="https://via.placeholder.com/100" alt="Assinatura Locatário" class="mr-4">
          <img src="https://via.placeholder.com/100" alt="Assinatura Locador">
        </div>
      </div>
</section>
</template>

<script lang="ts" setup></script>
