//Créer un tableau dans lequel il y a Google, Ecosia et Qwant
//second tableau avec leurs url

//But : écrire dans les balise <a> les moteurs de recherche et dans les href leurs url




//créer les deux tableaux
let tableauMoteurRecherche=["Google", "Ecosia", "Qwant"]

let tableauUrl=["https://www.google.com", "https://www.ecosia.org/", "https://www.qwant.com/"]

console.log(tableauMoteurRecherche)
console.log(tableauUrl)



let a=document.querySelectorAll("a") //On récupère l'ensemble des balises a dans une Nodelist (une sorte de tableau)

//On sélectionne juste google dans dans le premier tableau

console.log(tableauMoteurRecherche[0])


//On sélectionne la première balise a de la Nodelist 

console.log(tableauUrl[0]);




a[0].textContent=tableauMoteurRecherche[0]; //On met la première valeur du moteur de recherche dans la première balise a

console.log(a[0]);


    for (let i= 0 ; i < tableauMoteurRecherche.length; i++){
        console.log(tableauMoteurRecherche[i]);
        a[i].textContent=tableauMoteurRecherche[i];
        a[i].setAttribute("href", tableauUrl[i])
    } 
    
    
    // for (let i= 0 ; i < tableauUrl.length; i++){
    //     console.log(tableauUrl[i]);
    //     a[i].setAttribute("href", tableauUrl[i])
    // }  

    














