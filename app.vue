<template>
  <Header/>
  <body class="bg-black">
    <Hero/>

    <Badge :number="'500+'" :description="'Vidéos gratuites'" :bgColor="'bg-orange-500'" :rightPosition="'right-[100px]'" :bottomPosition="'bottom-[150px]'" />
    
    <Badge :number="'1000+'" :description="'Clients satisfaits'" :bgColor="'bg-blue-500'" :rightPosition="'right-[100px]'" :bottomPosition="'bottom-[260px]'" />
   
    <Badge :number="'50+'" :description="'Coachs disponibles'" :bgColor="'bg-lime-400'" :rightPosition="'right-[470px]'" :bottomPosition="'bottom-[460px]'" />
    <Banner/>


  
  </body>
</template> 