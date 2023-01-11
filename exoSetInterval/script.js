//sélectionner l'élément qu'on veut modifier
//Une variable pour stocker une valeur de number correspondant à la valeur de départ de la hauteur.
//Besoin d'une concaténation pour assembler les valeurs ensembles

let hauteur=0;
let div=document.querySelector('div')

function ouverture(){
    hauteur+=5;
    div.setAttribute("style",`height:${hauteur}px`);
    console.log(hauteur);
    if(hauteur==500){
        clearInterval(timer);
    }
}

let timer=setInterval(ouverture,100); 