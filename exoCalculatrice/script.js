//Créer des variables pour récupérer les nombres des input 1 et 2

//Créer une variable pour récupérer la string du select. 

//Affecter à chaque string une valeur arthmétique : +, -, /

//Créer une condition à trois temps : si "+", additionner input 1&2

//créer une variable pour stocker le résultat

//mettre la condition dans une fonction

//déclencher la fonction lorsqu'on clique sur valider

//afficher le résultat de l'opération dan l'input 3

//préciser qu'on ne peut pas diviser par 0







let submitOperation = document.querySelector('.submitOperation')


function calcul(){

    let nombreUn = parseInt(document.querySelector(".nombreUn").value);
    let nombreDeux= parseInt(document.querySelector('.nombreDeux').value);
    let operationSelect= document.querySelector('#operationSelect').value;

    console.log(result)

    

    console.log(operationSelect)

    
    if (operationSelect=="plus"){
        document.querySelector('#result').value = nombreUn+nombreDeux;

    }else if (operationSelect=="moins"){
        document.querySelector('#result').value =nombreUn-nombreDeux;

    }else if (operationSelect=="diviser"&&nombreDeux=='0'){
        alert("Veuillez choissir un nombre différent de 0");
    }else if (operationSelect=="diviser"){
        document.querySelector('#result').value =nombreUn/nombreDeux;
    }else if (operationSelect=="multiplier"){
        document.querySelector('#result').value =nombreUn*nombreDeux;
    }

}

submitOperation.addEventListener('click',calcul)

