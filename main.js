// Store necessary elements
const buttonList = document.getElementsByClassName("button");
const displayText = document.querySelector(".display-text");

let displayValue = '';

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
}
