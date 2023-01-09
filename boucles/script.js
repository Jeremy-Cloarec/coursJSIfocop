"use strict"

//for

//syntaxe

//for(compteur;test;variation du compteur){instruction}

for(let i = 0; i<= 10; i++){
    console.log(i)
}

//faire ressortir les chiffres pairs

for (let i = 1;i<=30;i++){
    if(i%2 !=0)continue;{
        console.log(`${i} chiffres pairs`)
        //console.log(i +" chiffre pairs")
    }
}

// table de multiplication de 2

// let choixTable = prompt("Choisissez votre table")
let choixTable = 3

if (isNaN(choixTable)){
    console.log("Choisissez un nombre !")
}else{
    for (let i = 0; i<=10; i++){ 
        let result = i*choixTable;   
        console.log(`${choixTable} x ${i} = ${result}`);
    }
}

for (let i = 10; i>= 0; i--){
    if(i !=0){
        console.log(i); 
        
    } else {
        console.log("Bonne année !")
    }
}


//Message d'alerte : alert, confirm, prompt

//While

let compteur = 0;//on initialise le compteur à l'extérieur de la boucle
while(compteur<10) {
    //ici on teste compteur : est ce qu'il est plus petit que 10. Si compteur est plus petit que 10, alors on execute les instructions. 

    if(compteur>4 && compteur<8)
    console.log(compteur);
    compteur ++ ;
}

// do while

let compteur2=5;
do{
    console.log(compteur2)
    compteur2++;
} while(compteur2<10);










