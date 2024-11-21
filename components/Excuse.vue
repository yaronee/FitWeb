<template>
    <div class="flex flex-col items-center justify-center p-12 bg-neutral-900 text-white rounded-lg shadow-lg">
      <h2 class="text-4xl font-bold text-center mb-4">Générateur d'excuses pour éviter le sport</h2>
      <p class="text-center text-gray-400 mb-12 w-[70%]">
          T'as la flemme d'aller t'entraîner ? Utilise mon générateur d'excuses pour trouver l'excuse ultime pour eviter ton entraînement (avec modération pour des gros bibis)
        </p>
      <p class="text-center text-xl italic max-w-2xl mb-12">
        "{{ excuse }}"
      </p>
      <button
        @click="generateExcuse"
        class="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg "
      >
        Générer une excuse
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const excuses = [
    "Je dois m'assurer que mon canapé ne s'ennuie pas.",
    "Ma bouteille d'eau est vide, ça ne sert à rien d'y aller.",
    "J'ai un rendez-vous crucial avec mon oreiller.",
    "Le coach m'a dit de me reposer... dans un rêve.",
    "Mon miroir m'a dit que j'étais déjà parfait.",
    "Les étoiles ne sont pas alignées pour faire du sport aujourd'hui.",
    "Mes vêtements de sport sont encore au lavage... depuis trois semaines.",
    "Je ne vais pas au sport, mais je pense très fort à y aller. Ça compte, non ?",
    "Je dois d'abord me réchauffer... en restant sous la couette.",
    "Le sol de la salle est trop dur pour mes articulations délicates.",
    "Le karma dit que le sport aujourd'hui, c'est risqué.",
    "Je suis trop occupé à faire du scrolling sportif sur Instagram.",
    "Ma montre a refusé de compter mes pas, alors pourquoi essayer ?",
    "J'attends la motivation, elle est coincée dans les embouteillages.",
    "Mon chien m'a regardé avec des yeux tristes, je ne peux pas le laisser seul.",
  ];
  
  const excuse = ref(excuses[0]);
  
  const generateExcuse = () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    excuse.value = excuses[randomIndex];
  };
  generateExcuse(); 
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  button:hover {
    transform: translateY(-2px);
  }
  </style>