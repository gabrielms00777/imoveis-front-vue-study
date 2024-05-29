<template>
    <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Agendamentos de Visita</h2>

      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Data</th>
              <th class="px-4 py-2">Hora</th>
              <th class="px-4 py-2">Imóvel</th>
              <th class="px-4 py-2">Proprietário</th>
              <th class="px-4 py-2">Status</th>
              <th class="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">2023-10-27</td>
              <td class="px-4 py-2">14:00</td>
              <td class="px-4 py-2">Apartamento Moderno - Rua dos Pinheiros, 123</td>
              <td class="px-4 py-2">Maria Silva</td>
              <td class="px-4 py-2">Confirmado</td>
              <td class="px-4 py-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Ver Imóvel</button>
                <button class="px-4 py-2 bg-gray-400 text-gray-700 rounded-md">Ver Perfil</button>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2">2023-10-28</td>
              <td class="px-4 py-2">16:30</td>
              <td class="px-4 py-2">Casa com Jardim - Rua das Flores, 456</td>
              <td class="px-4 py-2">João Santos</td>
              <td class="px-4 py-2">Pendente</td>
              <td class="px-4 py-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Ver Imóvel</button>
                <button class="px-4 py-2 bg-gray-400 text-gray-700 rounded-md">Ver Perfil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
</template>

<script lang="ts" setup></script>
