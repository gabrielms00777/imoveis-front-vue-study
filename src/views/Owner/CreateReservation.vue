<template>
   <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Criar Nova Reserva</h2>
      
        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="mb-4">
              <label for="property_id" class="block text-gray-700 font-bold mb-2">Imóvel:</label>
              <select id="property_id" name="property_id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="1">Apartamento Moderno - Rua dos Pinheiros, 123</option>
                <option value="2">Casa de Praia - Praia da Joatinga, 456</option>
                <option value="3">Loft Moderno - Rua da Consolação, 789</option>
                <!-- Adicione mais opções de imóveis -->
              </select>
            </div>
      
            <div class="mb-4">
              <label for="start_date" class="block text-gray-700 font-bold mb-2">Data de Início:</label>
              <input type="date" id="start_date" name="start_date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
      
            <div class="mb-4">
              <label for="end_date" class="block text-gray-700 font-bold mb-2">Data de Fim:</label>
              <input type="date" id="end_date" name="end_date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
      
            <div class="mb-4">
              <label for="guest_name" class="block text-gray-700 font-bold mb-2">Nome do Hóspede:</label>
              <input type="text" id="guest_name" name="guest_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
      
            <div class="mb-4">
              <label for="guest_email" class="block text-gray-700 font-bold mb-2">Email do Hóspede:</label>
              <input type="email" id="guest_email" name="guest_email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
      
            <div class="mb-4">
              <label for="guest_phone" class="block text-gray-700 font-bold mb-2">Telefone do Hóspede:</label>
              <input type="tel" id="guest_phone" name="guest_phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
      
          <div class="flex justify-end">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Criar Reserva
            </button>
          </div>
        </form>
    </section>
</template>

<script lang="ts" setup></script>
