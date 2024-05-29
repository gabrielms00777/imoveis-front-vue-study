<template>
  <div class="bg-white rounded-md shadow-md p-6">

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">

  <div>
    <img src="https://picsum.photos/800/600" alt="Imóvel" class="w-full rounded-md">
  </div>

  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Apartamento Moderno</h2>
    <p class="text-gray-600 mb-2">Rua dos Pinheiros, 123 - São Paulo, SP</p>

    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.914a2 2 0 01-2.828 0L9.214 16.657m0 0l-2.828-2.829a2 2 0 00-2.828 0L5.343 13.83m4.242-4.241a2 2 0 01-2.828 0L9.214 9.214m0 0l2.829 2.828a2 2 0 002.828 0l2.828-2.829m4.242 4.241L21.457 16.657a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828 0l-2.829-2.829m4.242-4.241L21.457 9.214a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828 0l-2.829-2.829m-2.829-2.83a2 2 0 00-2.828 0L13.414 5.343m0 0l2.829 2.829a2 2 0 002.828 0l2.828-2.829m-2.829-2.83a2 2 0 00-2.828 0L9.214 2.543m0 0l-2.829 2.829a2 2 0 000 2.828l2.828 2.829m2.83 2.83a2 2 0 002.828 0L13.414 10.786m0 0l-2.829 2.829a2 2 0 000 2.828l2.828 2.829" />
      </svg>
      <span class="text-gray-600">2 quartos</span>
    </div>
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13.042a2 2 0 01-2 2H5.707L5 20.505V13.5a2 2 0 012-2h9.293l.707-.707z" />
      </svg>
      <span class="text-gray-600">2 banheiros</span>
    </div>
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0-8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
      </svg>
      <span class="text-gray-600">1 vaga de garagem</span>
    </div>
    <p class="text-gray-600 mb-2">Condomínio com área de lazer completa: piscina, academia, salão de festas, playground.</p>
    <p class="text-gray-600 mb-2">Próximo a mercados, escolas, transporte público.</p>
    <p class="text-gray-600 mb-4">Valor do aluguel: R$ 2.500/mês</p>

    <div class="flex items-center mb-4">
      <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Agendar Visita</button>
      <button class="px-4 py-2 bg-gray-400 text-gray-700 rounded-md">Favoritar</button>
    </div>

  </div>
</div>

<div class="mt-6">
  <h3 class="text-xl font-bold text-gray-800 mb-2">Descrição Completa</h3>
  <p class="text-gray-600">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh nec varius fermentum, elit justo tristique sapien, sit amet lacinia dolor eros eget urna. Donec faucibus felis vel nisl ultrices, id elementum mauris scelerisque. Sed eget felis non elit semper tincidunt. In hac habitasse platea dictumst. Integer euismod elit non ex posuere, a faucibus ligula porttitor.
  </p>
</div>

<div class="mt-6">
  <h3 class="text-xl font-bold text-gray-800 mb-2">Mapa</h3>
  <!-- Inserir mapa interativo -->
  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14885.863565323772!2d-46.64311794580166!3d-23.557357072144916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20dos%20Pinheiros%2C%20123%2C%20S%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1692024272174!5m2!1spt-BR!2sbr" 
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

</div>
</template>

<script lang="ts" setup></script>
