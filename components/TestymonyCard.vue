<template>
    
          <div id="Testymony" 
            
            class="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center w-72"
          >
            <img
              :src="img"
              :alt="'Photo de ' + name"
              class="w-16 h-16 rounded-full object-cover mb-4"
            />
            <p class="text-gray-300 text-sm leading-relaxed text-center mb-4">
              {{ text }}
            </p>
            <span class="text-white font-semibold text-center">
              {{ name }}
            </span>
            
          </div>
        
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      text: String,
      img: String
    },
    
    };
  
  </script>