"use stricte"

//DOM = Document Object Model
//Récupérer les balises par leur nom

let header=document.getElementsByTagName("p")//permet de récupérer la valeur. HTML collection
console.log(header)


let logo=document.getElementById("item1");
console.log(item1);

//recupérer par la classe
let container=document.getElementsByClassName("container");
console.log(container);

//récupération version ES6

let p=document.querySelector("p"); //récupère seulement la première balise p
console.log(p);

p=document.querySelectorAll("p");  //récupère tous les éléments : nodelist
console.log(p);

//Modifier le Dom
let h1=document.querySelector("h1")
console.log(h1);

h1.textContent="Hello world !!";

h1.append(" Je suis à côté du h1")//permet d'ajouter du texte à côté de l'écriture existante. 

//créer un élément html

let helloworld=document.createElement("div"); //ici on crée une balise DIV

helloworld.textContent="Hello World le retour" //mettre du texte dans la div

helloworld.style.backgroundColor="grey";//modifier le style

helloworld.style.textAlign="center";

document.body.insertBefore(helloworld,document.querySelector(" .container"));

//supprimer un élément
//méthode longue

//let h2=document.querySelector("h2");
//h2.remove();

//methode courte

document.querySelector("h2").remove()

//mettre un evenement en place
let button=document.querySelector('button');
button.onmouseover=()=>{
    document.body.style.background='purple';
}

button.onmouseout=()=>{
    document.body.style.background="rgb(6, 8, 20)";
}

function change(){
    document.body.style.background='yellow';
}
button.addEventListener('click',change);