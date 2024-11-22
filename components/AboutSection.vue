<template>
  <div id="aboutSection" >
    <About
      :title="'Qui suis-je ?'"
      :description="'Salut, moi c’est Max ! Coach sportif et ancien comédien, je mélange sport et humour pour te faire transpirer avec le sourire. Mon objectif : te motiver à fond tout en rendant chaque séance fun et mémorable. Pour moi, progresser, c’est bien, mais si on peut rigoler en même temps, c’est encore mieux  !'"
      :img="'/img/tibo_accroupi.png'"
      :isTextLeft="true"
      :bgColor="'bg-orange-500'"
    />

    <About
      :title="'Quelques anecdotes'"
      :description="'Impro totale : J’ai déjà coaché une séance avec des bancs publics et des bouteilles d’eau… en pleine rue.<br/><br/>Chute mémorable : Ma première séance ? J’ai glissé sur ma bouteille d’eau en faisant un burpee. Fous rires garantis !<br/><br/>Un rôle marquant : Sur scène, j’ai joué un coach tyrannique… aujourd’hui, je préfère la bienveillance et les blagues ! Tu es prêt(e) à écrire ta propre histoire avec moi ? 😊'"
      :img="'/img/tibo5.png'"
      :isTextLeft="false"
      :bgColor="'bg-blue-500'"
    />
  </div>
</template>

