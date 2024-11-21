<template>
  <div>
    <!-- Texte à gauche, image à droite -->
    <WorkoutSection
      title="Stay fit wherever you are"
      description="With access to hundreds of free workouts, you can achieve your fitness goals right at home."
      img="/img/theo.jpg"
      :isTextLeft="true"
    />

    <!-- Texte à droite, image à gauche -->
    <WorkoutSection
      title="Your journey starts here"
      description="Discover the best online workouts and create a routine that works for you."
      img="/img/theo.jpg"
      :isTextLeft="false"
    />
  </div>
</template>

<script>
import WorkoutSection from "@/components/About.vue";

export default {
  components: {
    WorkoutSection,
  },
};
</script>