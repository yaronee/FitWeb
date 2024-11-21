<template>
  <section :class="['flex flex-col md:flex-row items-center p-12 pb-0', bgColor]">
    <div
      :class="[
        'flex flex-col md:flex-row items-center justify-between w-full',
        isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse',
      ]"
    >
      <!-- Texte -->
      <div class="md:w-1/2 text-center md:text-left">
        <h2 class="text-4xl font-bold mb-8 text-white">{{ title }}</h2>
        <p class="text-lg text-gray-200 mb-6" v-html="description"></p>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          :src="img"
          alt="Image illustration"
          class="max-w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
      default: true, // Par défaut, le texte est à gauche.
    },
    bgColor: {
      type: String,
      required: true,
    },
  },
};
</script>