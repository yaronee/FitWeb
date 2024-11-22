<template>

    <section class="bg-neutral-900 	text-white py-12">
        
          <h2 class="text-4xl font-bold text-center mb-4">Ils sont passés entre les mains de Max (et ont survécu) !</h2>
          <p class="text-center text-gray-400 mb-12">
            Parce qu’après chaque séance, c’est soit la fierté, soit les courbatures qui parlent.
          </p>
          
          <div class="flex flex-wrap justify-center gap-6">
            
            <TestymonyCard 
              :name="'Alex'"  
              :text="'Depuis que Max m’entraîne, mes haltères me supplient d’arrêter. J’ai des muscles dans des endroits où je ne savais même pas qu’ils existaient.'" 
              :img="'/img/homme4.jpeg'"
            />
            
            <TestymonyCard 
              :name="'Théo'"  
              :text="'Max m’a promis un six-pack, mais tout ce que j’ai pour l’instant, c’est une douleur abdo permanente… Ça doit marcher, non ?'" 
              :img="'/img/homme2.jpeg'" 
            />
    
            <TestymonyCard 
              :name="'Tibo'"  
              :text="'Grâce à Max, je peux enfin ouvrir les bocaux de cornichons tout seul. Un coach qui change des vies !'" 
              :img="'/img/homme3.jpeg'" 
            />
            
          </div>
    </section>
    
    </template>