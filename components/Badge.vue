<template>
  <div :class="['absolute px-4 py-2 rounded-lg shadow-lg', bgColor,bottomPosition,rightPosition,'text-black']">
    <span class="text-2xl font-bold">{{ number }}</span>
    <p class="text-sm">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: { 
      type: String,
      required: true 
    },
    description: { 
      type: String,
      required: true 
    },
    bgColor: {
      type: String,
      required: true
    },
    bottomPosition: {
      type: String,
      required: true,
    },
    rightPosition: {
      type: String,
      required: true,
    }
  }
}
</script>

