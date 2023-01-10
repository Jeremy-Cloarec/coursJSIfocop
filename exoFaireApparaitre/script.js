

let salut = document.querySelector(".salut");
console.log(salut);

let titre = document.querySelector(".titre");
console.log(titre);

let isShow = true;

function showHide(){
    if(isShow){
        salut.style.display="none";
        isShow=false
    } else {
        salut.style.display="block";
        isShow=true
    }
}


titre.onclick=()=>{
    showHide()
}












