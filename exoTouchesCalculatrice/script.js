//récupérer les chiffres lorsque l'utilisateur clique
//1)créer un événement au clique qui active une fonction
//2)dans cette fonction, mettre toutes les variables de toute les touches et leurs valeurs. 


//https://www.youtube.com/watch?v=GpJ-kTR-crM


let selectbutton = document.querySelector('.buttonClick')

let ecran =document.querySelector('.ecran p')
ecran
let c = document.querySelector('.c').innerHTML

let cClick =document.querySelector('.c')
console.log(c)





function cButton(){

    console.log(c);
    ecran.textContent=c
}
selectbutton.addEventListener('click',cButton)


function cTouche(){
    console.log(c);
    ecran.textContent=c
}
cClick.addEventListener('click',cTouche)







