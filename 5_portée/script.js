"use strict"

//varaible globale : accessible dans l'ensemble du code. 
//variable locale : seulement dans le bloc dans lequel elle se trouve. 



let variableLet = "global";
var variableVar = "global";

console.log(variableLet);
console.log(variableVar);

if (true){
    let variableLet="local";
    var variableVar="local";

    console.log(variableLet);
    console.log(variableVar);
}

console.log(variableLet);
console.log(variableVar); //var prend la dernière valeur déclarée quelque soit le bloc. 

//Ecriture ES6

let prenom ="Bob";
let nom="Moranne";
let metier = "pro";

//ancienne 
console.log("Bonjour, je suis "+nom+" "+prenom+" et je suis "+metier);

//nouvelle méthode
console.log(`Bonjour, je suis ${nom} ${prenom} et je suis ${metier}`);


//fonction anonyme

let fonctionAnonyme=function(){
    console.log("Je suis la fonction anonyme");
}

fonctionAnonyme();

let fonctionFlechee = ()=>{
    console.log(`je suis la fonction flechée`)
}

fonctionFlechee()

