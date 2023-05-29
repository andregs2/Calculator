
export function startButtons()
    {
    let resultElement = new Array();
    const buttonData = ["7","8","9","/","4","5","6","-","1","2","3","+","C","0","*","="]
    const buttonList = document.getElementById("buttons");
    const displayText = document.querySelector(".display-text");
    let displayValue = '';

    //Create the buttons procedurally according the buttonData lenght
    for(let i = 0; i < buttonData.length; i++){

        resultElement[i] = new ButtonElement();
        resultElement[i].valor = buttonData[i]; 

    //Check if is operator and set true
        if(/^[-/*+C=]+$/.test(resultElement[i].valor)){
            resultElement[i].isOperator = true;
        }  

        var newButton = document.createElement("div");
        var newParagraph = document.createElement("p");

        newParagraph.textContent = resultElement[i].valor;
        newButton.classList.add("button");
        resultElement[i].htmlElement = newButton;
        buttonList.appendChild(newButton);
        newButton.appendChild(newParagraph);
        }


        for(let i = 0; i < resultElement.length; i++){
        
            //Check if is number or operator
            if(/[0-9]/.test(resultElement[i].valor))
            { 
                resultElement[i].htmlElement.addEventListener('click', function() 
                {
                    if(displayText.textContent.length >= 7) return;
                    const char = resultElement[i].valor;
                    displayValue = displayValue + char;
                    displayText.textContent = displayValue;            
                })
            }
            else
            {
                resultElement[i].htmlElement.addEventListener('click', function() 
                {
                    if(resultElement[i].valor == "C")
                    {
                        displayText.textContent = "";
                        displayValue = '';
                    } 
                })
            }
    
    
        }

        return resultElement;

    }

    class ButtonElement{
        constructor(){
            this.valor = 0;
            this.isOperator = false;
            this.htmlElement = undefined;
        }
    }