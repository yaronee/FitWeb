<template>

    <section class="bg-black text-white py-12">
        
          <h2 class="text-4xl font-bold text-center mb-8">Ce que nos clients disent</h2>
          <p class="text-center text-gray-400 mb-12">
            Découvrez les retours de nos clients satisfaits.
          </p>
          
          <div class="flex flex-wrap justify-center gap-6">
            
            <TestymonyCard 
              :name="'Marie'"  
              :text="'J\’ai enfin trouvé un coach qui me comprend et qui me motive à chaque séance. Merci Coach Tibo !'" 
              :img="'/img/perso2.jpeg'" 
            />
            
            <TestymonyCard 
              :name="'E'"  
              :text="'J\’ai enfin trouvé un coach qui me comprend et qui me motive à chaque séance. Merci Coach Tibo !'" 
              :img="'/img/perso2.jpeg'" 
            />
    
            <TestymonyCard 
              :name="'P'"  
              :text="'J\’ai enfin trouvé un coach qui me comprend et qui me motive à chaque séance. Merci Coach Tibo !'" 
              :img="'/img/perso2.jpeg'" 
            />
            
          </div>
    </section>
    
    </template>