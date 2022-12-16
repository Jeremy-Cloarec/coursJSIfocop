"use strict"

//fonction : permet de regrouper un ensemble d'instructions. 


//fonction sans paramètre :

let prenom = "Jeremy"
function saluer (){
    console.log("Salut "+ prenom);
}

saluer();

//fonction avec paramètres entre (parenthès)

function saluerQuqun(nom){
    console.log("Salut "+nom);
}

let nom="Dylan"
saluerQuqun(nom)//on ajoute un argument dynamique
saluerQuqun("Tony")//remplace l'argument


//pas de rapport entre le paramètre et l'argument

function saluerQuqunDeux(n,f){
    console.log("Salut "+n +" "+f);
}
saluerQuqunDeux("Bob", "moranne");

//function avec valeur de retour

function addition(nbr1,nbr2,nbr3){
    if(arguments.length==2){
        return nbr1+nbr2;
    }
    else if(arguments.length==3){
        return nbr1+nbr2+nbr3;
    }
}
console.log(addition(2,2));
console.log(addition(2,2,2));


//exo

let prenomExo = "Gilette";
let ageExo = "45 ans";

function bonjour(pren,age){
    console.log("Bonjour M/Mme "+pren+" vous avez "+age+" ; félicitations !")
}

bonjour(prenomExo,ageExo);