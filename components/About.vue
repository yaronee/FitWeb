<template>
  <section class="bg-lime-100 flex flex-col md:flex-row items-center p-8 md:p-16">
    <div
      :class="[
        'flex flex-col md:flex-row items-center w-full',
        isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse',
      ]"
    >
      <!-- Section de texte -->
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl font-bold text-black mb-6">{{ title }}</h1>
        <p class="text-lg text-gray-700 mb-6">
          {{ description }}
        </p>
      </div>

      <!-- Section d'image -->
      <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          :src="img"
          alt="Image illustration"
          class="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkoutSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isTextLeft: {
      type: Boolean,
      default: true, // Définit l'ordre : texte à gauche par défaut
    },
  },
};
</script>