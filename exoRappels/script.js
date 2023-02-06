"use strict";

//exercice 1

function messageBienvenue(){
    let prenom = document.querySelector('#prenom').value
    console.log(prenom);

    let surname = document.querySelector('#nom').value
    console.log(surname);

    let bienvenue = document.querySelector('.bienvenue')
    bienvenue.textContent=`Bienvenue ${prenom} ${surname}`
}

let valider = document.querySelector('.valider')

valider.addEventListener('click',messageBienvenue)

//exercice 2


function messageQuantite(){

    let nombreProduit = document.querySelector('#quantiter').value
    nombreProduit = parseInt(nombreProduit);
    
    let prixProduit = 86.40;
    
    let tva = prixProduit * (1+20.6/100);

    let resultPrix = nombreProduit*tva

    let totalUtilisateur= document.querySelector('#totalUtilisateur')

    totalUtilisateur.textContent=`Vous devez ${Math.round(resultPrix)}€`

}

let selectionQuantite = document.querySelector('.selectionQuantite')
selectionQuantite.addEventListener('click',messageQuantite)

//exercice 3



function selectionCouleur(){
    let bodyCouleur = document.querySelector('#bodyCouleur').value
    console.log(bodyCouleur);

    let couleur = document.querySelectorAll('.couleur')


        for (let i = 0; i<couleur.length; i ++){

            let couleurDiv= getComputedStyle(couleur[i]).getPropertyValue('background-color');
            console.log(couleurDiv);


            if(couleurDiv=="rgb(0, 139, 139)"){
                // couleur[i].style.backgroundColor=bodyCouleur;
                couleur[i].setAttribute("style", `background:${bodyCouleur}`)
                    break;
            }
            // switch  (couleurDiv){
            //     case "rgb(0, 139, 139)": 
            //         console.log(true);
            //         couleur[i].style.backgroundColor=bodyCouleur;
            //         break;
                // case "rgb(0, 139, 139)": 
                //     console.log(true);
                //     couleur[1].style.backgroundColor=bodyCouleur;
                //     break;
                // case "rgb(0, 139, 139)": 
                //     console.log(true);
                //     couleur[2].style.backgroundColor=bodyCouleur;
                //     break;
    
            }
        }




let bodyValid = document.querySelector('.bodyValid')
bodyValid.addEventListener('click',selectionCouleur)





// // exercice 4
// function tourneImage(){

//     let monimage= document.querySelectorAll('#carousel').getAttribute('src');

//     switch(monImage){
//         case'a.jpg':
//             document.querySelector('#carousel').src=='imgCarousel/b.jpg';
//         case'b.jpg':
//             document.querySelector('carousel').src=='imgCarousel/c.jpg';
//         case'c.jpg':
//             document.querySelector('#carousel').src=='imgCarousel/d.jpg';
//         case'imgcarousel/d.jpg':
//             querySelector('#carousel').src='imgCarousel/e.jpg';
//         case'e.jpg':
//             document.querySelector('#carousel').src=='imgCarousel/a.jpg';
            
//     }
// }
// let bt=document.querySelectorAll('#carousell');
// bt.addEventListener('clik',Tourne-Image)
