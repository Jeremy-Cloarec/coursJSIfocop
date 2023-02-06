

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




