"use strict";


//tableau

let tableauFruit=["fraises","bananes","pommmes"]
let ananas = "ananas"

console.log(tableauFruit);
console.log(typeof tableauFruit);
console.log(tableauFruit.length);//Pour connaître la taille du tableau
console.table(tableauFruit);

tableauFruit [2] ="Pêche" //Remplace l'index 2 par pêche

console.table(tableauFruit);

tableauFruit.push(`cerises`)//Rajoute un élément à la fin du tableau

console.table(tableauFruit);

tableauFruit.unshift(`abricots`,`mangues`, ananas)//rajoute un élément à l'index 0


console.table(tableauFruit)

//EXO


//Afficher les éléments un par un



for (let i = 0; i < tableauFruit.length; i++){
        console.log(tableauFruit[i])   
}




