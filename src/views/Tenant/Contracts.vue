<template>
   <section class="bg-white rounded-md shadow-md p-6 w-3/4 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Visualizar Contratos</h2>

      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left text-gray-500 font-bold">Imóvel</th>
              <th class="px-4 py-2 text-left text-gray-500 font-bold">Data de Início</th>
              <th class="px-4 py-2 text-left text-gray-500 font-bold">Valor do Aluguel</th>
              <th class="px-4 py-2 text-left text-gray-500 font-bold">Ações</th>
            </tr>
          </thead>
          <tbody>
            <!-- Linha do contrato 1 -->
            <tr>
              <td class="px-4 py-2">Apartamento Moderno - Rua dos Pinheiros, 123</td>
              <td class="px-4 py-2">01/01/2023</td>
              <td class="px-4 py-2">R$ 2.500,00</td>
              <td class="px-4 py-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
                <button class="px-4 py-2 bg-red-500 text-white rounded-md">Download</button>
              </td>
            </tr>
            <!-- Linha do contrato 2 -->
            <tr>
              <td class="px-4 py-2">Casa com Jardim - Avenida Paulista, 456</td>
              <td class="px-4 py-2">15/03/2023</td>
              <td class="px-4 py-2">R$ 4.000,00</td>
              <td class="px-4 py-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Visualizar</button>
                <button class="px-4 py-2 bg-red-500 text-white rounded-md">Download</button>
              </td>
            </tr>
            <!-- Adicione mais linhas de contratos conforme necessário -->
          </tbody>
        </table>
      </div>

    </section>
</template>

<script lang="ts" setup></script>
