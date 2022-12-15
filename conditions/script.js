"use strict"

//let age=prompt("Quel est votre âge ?")


//syntax : 
//if(condition){instruction}

let age=17
if (age>=18){
    console.log("Bienvenue dans la boite")
}else{
    console.log("Il faut être majeur")
}

//let couleur = prompt("Choississez une couleur parmi : red, blue, yellow")

//pour tester une égalité on utilise deux signes égales
//pour tester une égalité stricte on utilise trois signes égales. 

let couleur = "rouge"
if (couleur=="rouge"){
    console.log("Vous avez choisi le rouge")
} else if (couleur =="jaune"){
    console.log("Vous avez choisi le jaune")
} else if (couleur=="bleu"){
    console.log("Vous avez choisi le bleu")
}

//EXO

//Créer trois personnes qui ont entre 15/25/35.
//Faire une condition sur les personnes et savoir s'ils peuvent entrer dans le casino. 

//let nomPrompt = prompt("Quel est votre nom?");
//let agePrompt = prompt("Quel âge avez-vous");
let agePrompt = 16
let nomPrompt = "Claude"
if (agePrompt<18) {
    console.log("Bonjour "+nomPrompt+", vous ne pouvez pas entrer car vous avez "+agePrompt+" ans");
}else if (agePrompt>=18){
    console.log("Bonjour "+nomPrompt+ ", vous pouvez entrer");
}

//Opérateur logiques

let majeur = true
let tenueCorrect = true
let tenueCorrectBis = false

//And && : les deux conditions doivent ê vraies
console.log("Majeur et tenue correct ==>"+(majeur&&tenueCorrect))//true
console.log("Majeur et tenue correct ==>"+(majeur&&tenueCorrectBis))//false

//Ou ||
console.log("Majeur ou tenue correct ==>"+(majeur||tenueCorrect))//true
console.log("Majeur ou tenue correct ==>"+(majeur||tenueCorrectBis))//true

//EXO
//Demander l'année de naissance d'une personne (prompt)
//Faire le calcul de l'age à partir de cette année de naissance
//Selon la rpse : - tu es un ado (10-20ans), -tu es un adulte (20-60), tu es à la retraite (+60)

let ageNaissance = prompt("Quel est votre année de naissance ?")
let anneeEnCours = 2022
let  ageUtilisateur = anneeEnCours-ageNaissance

if ((ageUtilisateur >=10)&&(ageUtilisateur<20)){
    console.log("Vous êtes ado")
}else if((ageUtilisateur>=20)&&(ageUtilisateur<60)){
    console.log("Vous êtes adulte")
}else if(ageUtilisateur>=60){
    console.log("Vous êtes à la retraite")
}else{
    console.log("Vous êtes un enfant")
}

