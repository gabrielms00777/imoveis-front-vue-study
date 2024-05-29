<template>
    <section class="bg-white rounded-md shadow-md p-6 w-4/5 ml-4">
       <h2 class="text-2xl font-bold text-gray-800 mb-4">Cadastrar Novo Imóvel</h2>
     
       <ul class="flex mb-4 space-x-4" role="tablist">
         <li role="presentation">
           <button class="py-2 px-4 rounded-t-md bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">
             Informações Básicas
           </button>
         </li>
         <li role="presentation">
           <button class="py-2 px-4 rounded-t-md bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold" id="photos-tab" data-bs-toggle="tab" data-bs-target="#photos" type="button" role="tab" aria-controls="photos" aria-selected="false">
             Fotos
           </button>
         </li>
       </ul>
     
       <div class="tab-content" id="myTabContent">
         <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
           <form>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div class="mb-4">
                 <label for="address" class="block text-gray-700 font-bold mb-2">Endereço:</label>
                 <input type="text" id="address" name="address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rua, número, bairro, cidade, estado">
               </div>
     
               <div class="mb-4">
                 <label for="type" class="block text-gray-700 font-bold mb-2">Tipo de Imóvel:</label>
                 <select id="type" name="type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                   <option value="apartamento">Apartamento</option>
                   <option value="casa">Casa</option>
                   <option value="studio">Studio</option>
                   <option value="kitnet">Kitnet</option>
                   <!-- Adicione outras opções conforme necessário -->
                 </select>
               </div>
     
               <div class="mb-4">
                 <label for="description" class="block text-gray-700 font-bold mb-2">Descrição:</label>
                 <textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descreva seu imóvel com detalhes"></textarea>
               </div>
     
               <div class="mb-4">
                 <label for="price" class="block text-gray-700 font-bold mb-2">Valor do Aluguel:</label>
                 <input type="number" id="price" name="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="R$">
               </div>
     
               <div class="mb-4">
                 <label for="city" class="block text-gray-700 font-bold mb-2">Cidade:</label>
                 <input type="text" id="city" name="city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               </div>
     
               <div class="mb-4">
                 <label for="state" class="block text-gray-700 font-bold mb-2">Estado:</label>
                 <input type="text" id="state" name="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               </div>
     
               <div class="mb-4">
                 <label for="bedrooms" class="block text-gray-700 font-bold mb-2">Quartos:</label>
                 <input type="number" id="bedrooms" name="bedrooms" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               </div>
     
               <div class="mb-4">
                 <label for="bathrooms" class="block text-gray-700 font-bold mb-2">Banheiros:</label>
                 <input type="number" id="bathrooms" name="bathrooms" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               </div>
     
               <div class="mb-4">
                 <label for="parking_spaces" class="block text-gray-700 font-bold mb-2">Vagas de Garagem:</label>
                 <input type="number" id="parking_spaces" name="parking_spaces" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               </div>
     
               <div class="mb-4">
                 <label for="features" class="block text-gray-700 font-bold mb-2">Recursos Adicionais:</label>
                 <textarea id="features" name="features" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ex: Piscina, Área de Lazer, Churrasqueira"></textarea>
               </div>
     
               <div class="mb-4">
                 <label for="status" class="block text-gray-700 font-bold mb-2">Status:</label>
                 <select id="status" name="status" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                   <option value="disponível">Disponível</option>
                   <option value="alugado">Alugado</option>
                   <option value="indisponível">Indisponível</option>
                 </select>
               </div>
             </div>
           </form>
         </div>
     
         <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
           <form>
             <div class="mb-4">
               <label for="photos" class="block text-gray-700 font-bold mb-2">Envie as Fotos do Imóvel:</label>
               <input type="file" id="photos" name="photos[]" multiple class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
             </div>
             <div class="flex justify-end">
               <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                 Salvar Fotos
               </button>
             </div>
           </form>
         </div>
       </div>
     
       <div class="flex justify-end mt-4">
         <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
           Cadastrar Imóvel
         </button>
       </div>
     </section>
 </template>
 
 <script lang="ts" setup></script>
 