// Store necessary elements
const buttonList = document.getElementById("buttons");
const displayText = document.querySelector(".display-text");

console.log(buttonList);

let displayValue = '';
let buttonData = ["7","8","9","/","4","5","6","-","1","2","3","+","C","0","*","="]
let createdButtons = new Array();


document.addEventListener("DOMContentLoaded", function(){
    startButtons();
});

function startButtons(){
    for(let i = 0; i < buttonData.length; i++){

        createdButtons[i] = new ButtonElement();
        createdButtons[i].valor = buttonData[i]; 

        if(/^[-/*+C=]+$/.test(createdButtons[i].valor)){
            createdButtons[i].isOperator = true;
        }  

        var newButton = document.createElement("div");
        var newParagraph = document.createElement("p");

        newParagraph.textContent = createdButtons[i].valor;
        newButton.classList.add("button");
        createdButtons[i].htmlElement = newButton;
        buttonList.appendChild(newButton);
        newButton.appendChild(newParagraph);
    }
}

class ButtonElement{
    constructor(){
        this.valor = 0;
        this.isOperator = false;
        this.htmlElement = undefined;
    }
}
/*
for(let i = 0; i < buttonList.length; i++){
    
    buttonList[i].addEventListener('click', function() 
    {

        if(displayText.textContent.length >= 7) return;

        const char = buttonList[i].textContent.trim();
        if(/[0-9]/.test(char)){ 
            displayValue = displayValue + char;
            displayText.textContent = displayValue;
        }
        
    })
}*/