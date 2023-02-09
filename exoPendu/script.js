
<<<<<<< HEAD

let randomWord = "chien"
let essaiRestant = document.querySelector('#essaiRestant')
let compteurEssais=5
let lettresEssayees = document.querySelector('#lettresEssayees')


function essaiPendu(){

    let lettreEssai = document.querySelector('#lettreEssai').value
    console.log(lettreEssai);

    if (lettreEssai == randomWord){
        console.log("Bravo !!");
        essaiRestant.textContent = "Bravo !!!"
        lettresEssayees.textContent = `Vous avez essayés les lettres suivantes${lettreEssai}`


    }else if (lettreEssai != randomWord){
        console.log("Dommage ! ");
        compteurEssais -= 1
        console.log(compteurEssais);
        essaiRestant.textContent = `Il vous reste ${compteurEssais}/5 essais`
        lettresEssayees.textContent = lettreEssai

    }

}

let validerPendu = document.querySelector('#validerPendu')

validerPendu.addEventListener('click', essaiPendu)
=======
// let inputClass = document.querySelector(".classe")
// console.log(inputClass);

let motCache = "chat"

let lettre = document.querySelector("#lettre")

let essaisRestants = document.querySelector(".essaisRestants")

let essai = 5

let validerPendu = document.querySelector(".validerPendu")

let messageInstruction = document.querySelector("#messageInstruction")

essaisRestants.textContent=`Il vous reste ${essai} essais sur 5`

let inputGenerator = document.querySelector("#inputGenerator")




for (let i in motCache){
    let newInput = document.createElement("input")
    inputGenerator.parentNode.insertBefore(newInput, inputGenerator)
    console.log(motCache[i]);
    newInput.classList.add("classe")
}

function validerLettre(){
    for (let i in motCache){
        let inputValue = document.querySelectorAll(".classe")[i].value
        console.log(inputValue);
    }   
}

validerPendu.addEventListener('click', validerLettre)
>>>>>>> 89fb69ae849b60607d56e8524191b78c545c75f7




<<<<<<< HEAD
=======







// function validerLettre(){
    

//     let entreeLettre1 = document.querySelector("#entreeLettre1").value
    

//     if (entreeLettre1 == "" ){
//         messageInstruction.textContent= "Veuillez saisir une lettre"

//     }else if (!isNaN(entreeLettre1)){
//     messageInstruction.textContent= "Veuillez saisir une lettre"
//     entreeLettre1 = document.querySelector("#entreeLettre1").value=""

    
//     }else if (entreeLettre1== motCache){
//         lettre.textContent += entreeLettre1.toLowerCase();
//         messageInstruction.textContent="Bravo !!"
//         entreeLettre1 = document.querySelector("#entreeLettre1").value=""

//     }else if (entreeLettre1!=motCache){
//         lettre.textContent += entreeLettre1.toLowerCase();
//         messageInstruction.textContent ="Raté !"
//         entreeLettre1 = document.querySelector("#entreeLettre1").value=""
//         essai-=1
//         console.log(essai);
//         console.log(typeof essai );
//         essaisRestants.textContent=`Il vous reste ${essai} essais sur 2`

//     }
// }


// validerPendu.addEventListener('click', validerLettre)



>>>>>>> 89fb69ae849b60607d56e8524191b78c545c75f7
