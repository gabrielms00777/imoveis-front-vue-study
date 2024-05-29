<template>
  <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Card 1: Número de Imóveis -->
    <div class="bg-blue-100 rounded-md shadow-md p-4">
      <h3 class="text-lg font-bold text-blue-600 mb-2">Meus Imóveis</h3>
      <p class="text-3xl font-bold text-blue-800">5</p>
    </div>
    <!-- Card 2: Número de Reservas -->
    <div class="bg-green-100 rounded-md shadow-md p-4">
      <h3 class="text-lg font-bold text-green-600 mb-2">Reservas Pendentes</h3>
      <p class="text-3xl font-bold text-green-800">2</p>
    </div>
    <!-- Card 3: Valor Total Recebido -->
    <div class="bg-yellow-100 rounded-md shadow-md p-4">
      <h3 class="text-lg font-bold text-yellow-600 mb-2">Valor Total Recebido</h3>
      <p class="text-3xl font-bold text-yellow-800">R$ 10.000,00</p>
    </div>
  </div>

  <div class="mt-8">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Últimas Reservas</h3>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left text-gray-500 font-bold">Imóvel</th>
          <th class="px-4 py-2 text-left text-gray-500 font-bold">Data</th>
          <th class="px-4 py-2 text-left text-gray-500 font-bold">Status</th>
          <th class="px-4 py-2 text-left text-gray-500 font-bold">Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- Linha de reserva 1 -->
        <tr>
          <td class="px-4 py-2">Apartamento Moderno - Rua dos Pinheiros, 123</td>
          <td class="px-4 py-2">01/01/2023</td>
          <td class="px-4 py-2">Pendente</td>
          <td class="px-4 py-2">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
            <button class="px-4 py-2 bg-green-500 text-white rounded-md">Confirmar</button>
            <button class="px-4 py-2 bg-red-500 text-white rounded-md">Rejeitar</button>
          </td>
        </tr>
        <!-- Adicione mais linhas de reservas conforme necessário -->
      </tbody>
    </table>
  </div>

</section>
</template>

<script lang="ts" setup></script>
