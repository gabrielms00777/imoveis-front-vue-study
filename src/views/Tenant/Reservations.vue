<template>
    <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Reservas</h2>
    
      <div class="flex justify-end mb-4">
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Criar Nova Reserva
        </button>
      </div>
    
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Imóvel</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Início</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Fim</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Status</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Apartamento Moderno - Rua dos Pinheiros, 123</td>
            <td class="px-4 py-2">01/01/2024</td>
            <td class="px-4 py-2">15/01/2024</td>
            <td class="px-4 py-2 text-green-500 font-bold">Confirmada</td>
            <td class="px-4 py-2">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Casa de Praia - Praia da Joatinga, 456</td>
            <td class="px-4 py-2">20/03/2024</td>
            <td class="px-4 py-2">30/03/2024</td>
            <td class="px-4 py-2 text-yellow-500 font-bold">Pendente</td>
            <td class="px-4 py-2">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
              <button class="px-4 py-2 bg-green-500 text-white rounded-md">Confirmar</button>
              <button class="px-4 py-2 bg-red-500 text-white rounded-md">Rejeitar</button>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Loft Moderno - Rua da Consolação, 789</td>
            <td class="px-4 py-2">10/05/2024</td>
            <td class="px-4 py-2">25/05/2024</td>
            <td class="px-4 py-2 text-red-500 font-bold">Cancelada</td>
            <td class="px-4 py-2">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
            </td>
          </tr>
          <!-- Adicione mais linhas de reservas aqui -->
        </tbody>
      </table>
    </section>
</template>

<script lang="ts" setup></script>
