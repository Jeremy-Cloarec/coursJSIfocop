//préciser qu'on ne peut pas diviser par 0

//Créer des variables pour récupérer les nombres des input 1 et 2

//Créer une variable pour récupérer la string du select. 

//Affecter à chaque string une valeur arthmétique : +, -, /

//Créer une condition à trois temps : si "+", additionner input 1&2

//créer une variable pour stocker le résultat

//mettre la condition dans une fonction

//déclencher la fonction lorsqu'on clique sur valider

//afficher le résultat de l'opération dan l'input 3




// let nombreUn = document.querySelector(".nombreUn").value;
// let nombreDeux= document.querySelector('.nombreDeux').value;



let submitOperation = document.querySelector('.submitOperation')




function calcul(){

    let nombreUn = parseInt(document.querySelector(".nombreUn").value);
    let nombreDeux= parseInt(document.querySelector('.nombreDeux').value);

    let operation = nombreUn + nombreDeux;
    console.log(operation)
}


submitOperation.addEventListener('click',calcul)











// console.log(nombreUn)
// console.log(nombreDeux)


