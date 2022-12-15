"use strict"; //Sans erreur possible

//variable
//permet de stocker des infos. On utilise let puis on lui donne un  nom.

let pseudo;
pseudo="Bonjour console";
console.log(pseudo);
console.log(typeof pseudo);

let age = 30;
console.log(age);
console.log(typeof age);
let nbrDecimal = 25.5;
console.log(nbrDecimal);
console.log(typeof nbrDecimal);

let annee = "1990";
console.log(annee);
console.log(typeof annee);

let ouvert = true;
console.log(ouvert);
console.log(typeof ouvert);

//opérateur arithmétique
let score=0;
let bonus=100;

score=score+bonus;
console.log(score);

let malus = 50;
score = score - malus;
console.log(score);

//multiplication et division
let price=100;
let rate=20;
let taxe=price*rate/100;
console.log(taxe);

//modulo : reste d'une division
let reste=10%3;
console.log(reste);

//les priorités mathématiques s'appliquent ici
let nbr1=5+4*2;
let nbr2=(5+4)*2;
console.log(nbr1);
console.log(nbr2);

//concaténation
score = pseudo+score;
console.log(score) //string + number : concaténation 

//une fonction importante
let anneeNumber=parseInt(annee);//pour transformer un type string en type number. Réserver aux nombres entiers.
let resultat= 2022-anneeNumber;
console.log(resultat);

let nbrDecimalBis="25.5";
let total=parseFloat(nbrDecimalBis);
console.log(total);
console.log(typeof total);

//constante
const prenom = "Bob"; //Ne peut pas être modifié
console.log(prenom);


