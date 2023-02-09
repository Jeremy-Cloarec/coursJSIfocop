//IIFE  : fonction sans nom, pemret d'éviter les interférences. Permet d'isoler les variables
(function(){

    //On récupère les éléments HTML

        const listNumber = document.querySelectorAll("button:not(.operator):not(.equalSign)")
        const listOperators = document.querySelectorAll("button.operator");
        const listOptions = document.querySelectorAll("span.action");
        const resultElem = document.querySelectorAll("#inner-result");

        console.log(resultElem);
        
        const quitButton = document.querySelectorAll(".quit")[0];
        const reduceButton = document.querySelectorAll(".reduce")[0];
        const increaseButton = document.querySelectorAll(".increase")[0];
        
        const equalSign = document.querySelectorAll(".equalSign")[0];


    //On initialise les calculs

    let firstNumber= "";
    let currentOperator = "";
    let secondNumber = "";
    let result = 0;

    //création d'un objet

    const calcul = {
        "x" : function(a, b) {return a*b}, 
        "-" : function(a, b) {return a-b}, 
        "+" : function(a, b) {return a+b}, 
        "%" : function(a, b) {return a%b}, 
        "/" : function(a, b) {return a/b}, 
    }

    //Animation on hover
    //Animation on mouseout

    for (let i =0; i <listOptions.length; i++){
        listOptions[i].addEventListener("mouseover", function(){
            showOptions(this);
        });
        listOptions[i].addEventListener("mouseout", function(){
            hideOptions(this);
        });
    }

    function showOptions(elemHTML){
        elemHTML.children[0].classList.add("text-opacity");
    }

    function hideOptions(elemHTML){
        elemHTML.children[0].classList.remove("text-opacity");
    }

    //Quit

    quitButton.addEventListener("click", quit); 
    function quit(){
        document.querySelector("#calculatrice").style.display="none";
    }

    //Reduce

    reduceButton.addEventListener("click", reduce);

    function reduce (){
        document.querySelector(".buttons").classList.add("hide");
        reduceButton.style.display="none";
        increaseButton.style.display="block";
    }

    //Increase

    increaseButton.addEventListener("click", increase);

    function increase (){
        document.querySelector(".buttons").classList.remove("hide");
        reduceButton.style.display="block";
        increaseButton.style.display="none";
    }


    //Animation on click

    for (let i = 0; i <listNumber.length; i++){
        listNumber[i].addEventListener("click", function(){
            animationOnButton(this);
            showValueOnScreen(this.innerHTML);
            console.log(firstNumber);
            console.log(typeof(firstNumber));
        });
    }

    for (let i =0; i <listOperators.length; i++){
        listOperators[i].addEventListener("click", function(){
            animationOnButton(this);
        });
    }

    function animationOnButton (button) {
        button.style.opacity = 0.6;

        setTimeout(function () {
            button.style.opacity = 1;
        }, 200)
    }


    //Calcul

    function makeCalculation (){
        if(firstNumber !="" && currentOperator !="" && secondNumber != "") {
            result = calcul [currentOperator](parseFloat (firstNumber.replace(",",".")), parseFloat (secondNumber.replace(",",".")));
            resultElem.innerHTML = result;
            firstNumber = result.toString();
            secondNumber = "";
        }
    }

    function showValueOnScreen(value) {
        if (currentOperator == ""){
            firstNumber += value;
            resultElem.innerHTML = firstNumber;
        } else {
            secondNumber += value; 
            resultElem.innerHTML = secondNumber;
        }
    }






    //Animation on over
    //Reset avec btn AC


}())