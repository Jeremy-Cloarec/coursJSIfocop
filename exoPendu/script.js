
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



