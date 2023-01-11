//Carrousel

//lorsqu'on clique sur une image une autre apparaît
//Méthode : Remplacer le lien de destination au click
//=> Set attribute
//=> Créer un événement au click

//Comment passer d'une image à l'autre au clic ?



// let flecheGauche=document.querySelector("flecheGauche")

let image=document.querySelector("img");
console.log(image)

let flecheGauche = document.querySelector(".flecheGauche")
console.log(flecheGauche);

let flecheDroite = document.querySelector(".flecheDroite")
console.log(flecheDroite);



function carrouselClick(){

    let linkImage=image.getAttribute('src')
    //let linkImage=document.querySelector('img').getAttribute('src')

    console.log(linkImage)

    //avec else if

    // if (linkImage=="img/a.jpg"){
    //     image.setAttribute('src',"img/b.jpg");
    // } else if (linkImage=="img/b.jpg"){
    //     image.setAttribute('src',"img/c.jpg");
    // } else if (linkImage=="img/c.jpg"){
    //     image.setAttribute('src',"img/a.jpg");
    // }

    //avec switch

    switch(linkImage){
        case "img/a.jpg":
            image.setAttribute('src',"img/b.jpg")
            break
        case "img/b.jpg":
            image.setAttribute('src',"img/c.jpg")
            break
        case "img/c.jpg":
            document.querySelector('img').setAttribute('src',"img/a.jpg")
            break
    }
}

image.onclick=()=>{
    carrouselClick()
}


function carrouselTimer(){

    let linkImage=image.getAttribute('src')

switch(linkImage){
    case "img/a.jpg":
        image.setAttribute('src',"img/b.jpg")
        break
    case "img/b.jpg":
        image.setAttribute('src',"img/c.jpg")
        break
    case "img/c.jpg":
        document.querySelector('img').setAttribute('src',"img/a.jpg")
        break
}
}

let timerCarrousel=setInterval(carrouselTimer, 10000)
console.log(timerCarrousel)








// function carrouselClick(){

//     let linkImage=document.querySelector('src');

//     if (linkImage=="img/a.jpg"){
//         image.setAttribute('src','img/b.jpg');
//     } else if (linkImage=="img/b.jpg"){
//         image.setAttribute('src','img/c.jpg');
//     } else if (linkImage=="img/c.jpg"){
//         image.setAttribute('src','img/a.jpg');
//     }
//     console.log(linkImage);
// }

function flecheG(){

    let linkImage=image.getAttribute('src')

    console.log(linkImage)

    if (linkImage=="img/a.jpg"){
        image.setAttribute('src',"img/c.jpg");
    } else if (linkImage=="img/c.jpg"){
        image.setAttribute('src',"img/b.jpg");
    } else if (linkImage=="img/b.jpg"){
        image.setAttribute('src',"img/a.jpg");
    }
}

flecheGauche.onclick=()=>{
    flecheG()
}

function flecheD(){

    let linkImage=image.getAttribute('src')

    console.log(linkImage)

    if (linkImage=="img/a.jpg"){
        image.setAttribute('src',"img/b.jpg");
    } else if (linkImage=="img/b.jpg"){
        image.setAttribute('src',"img/c.jpg");
    } else if (linkImage=="img/c.jpg"){
        image.setAttribute('src',"img/a.jpg");
    }
}

flecheDroite.onclick=()=>{
    flecheD()
}

