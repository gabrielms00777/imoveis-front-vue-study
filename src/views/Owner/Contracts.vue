<template>
   <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Contratos</h2>
    
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Imóvel</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Hóspede</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Data</th>
            <th class="px-4 py-2 text-left text-gray-500 font-bold">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Apartamento Moderno - Rua dos Pinheiros, 123</td>
            <td class="px-4 py-2">João Silva</td>
            <td class="px-4 py-2">01/01/2024</td>
            <td class="px-4 py-2">
              <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Visualizar</a>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Casa de Praia - Praia da Joatinga, 456</td>
            <td class="px-4 py-2">Maria Santos</td>
            <td class="px-4 py-2">15/01/2024</td>
            <td class="px-4 py-2">
              <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Visualizar</a>
            </td>
          </tr>
          <!-- Adicione mais contratos aqui -->
        </tbody>
      </table>
    </section>
</template>

<script lang="ts" setup></script>
