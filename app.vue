<template>
  <Header />

  <main class="bg-neutral-900">
    <Hero/>

    <Badge :number="'500+'" :description="'Vidéos gratuites'" :bgColor="'bg-orange-500'" :rightPosition="'right-[100px]'" :bottomPosition="'bottom-[150px]'" />

    <Badge :number="'1000+'" :description="'Clients satisfaits'" :bgColor="'bg-blue-500'" :rightPosition="'right-[200px]'" :bottomPosition="'bottom-[650px]'" />
   
    <Badge :number="'50+'" :description="'Coachs disponibles'" :bgColor="'bg-lime-400'" :rightPosition="'right-[490px]'" :bottomPosition="'bottom-[520px]'" />

    <HeroTrust/>

    <Testimony/>

    <AboutSection/>

    <AboutSection/>

  </main>
</template>