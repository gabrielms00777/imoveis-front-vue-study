<template>
   <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Chat com João Silva</h2>
    
      <div class="overflow-y-auto max-h-96 rounded-md border border-gray-200 p-4"> 
        <ul class="space-y-4">
          <li class="p-4 bg-gray-100 rounded-md">
            <p class="text-gray-600">Olá, gostaria de saber mais informações sobre o apartamento na Rua dos Pinheiros.</p>
          </li>
          <li class="p-4 bg-blue-100 rounded-md text-white">
            <p class="text-white">O apartamento possui 2 quartos, 2 banheiros e uma varanda. Você pode encontrar mais detalhes na página do imóvel.</p>
          </li>
          <li class="p-4 bg-gray-100 rounded-md">
            <p class="text-gray-600">Ok, obrigado pela informação. E sobre o valor do aluguel, ele já inclui condomínio e IPTU?</p>
          </li>
          <li class="p-4 bg-blue-100 rounded-md text-white">
            <p class="text-white">Sim, o valor do aluguel já inclui condomínio e IPTU. Você tem outras dúvidas?</p>
          </li>
          <li class="p-4 bg-gray-100 rounded-md">
            <p class="text-gray-600">Não, por enquanto é só. Obrigado pela atenção.</p>
          </li>
          <li class="p-4 bg-blue-100 rounded-md text-white">
            <p class="text-white">Disponha! Qualquer dúvida, pode entrar em contato novamente.</p>
          </li>
          <!-- Adicione mais mensagens aqui -->
        </ul>
      </div>
    
      <div class="mt-4">
        <form>
          <div class="flex">
            <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Escreva sua mensagem...">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
</template>

<script lang="ts" setup></script>
