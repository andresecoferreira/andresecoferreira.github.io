let firstLine = document.querySelector("li:nth-child(1)");
function changeText(){ 
    firstLine.textContent="Obrigado por passares";
}
function reverseText(){
    firstLine.textContent="Passa por aqui!"
}
firstLine.addEventListener("mouseover",changeText);
firstLine.addEventListener("mouseout",reverseText);


let secondLine = document.querySelector("li:nth-child(2)");
const firstButton = document.querySelector("li:nth-child(2) button:nth-child(1)");
const secondButton = document.querySelector("li:nth-child(2) button:nth-child(2)");
const thirdButton = document.querySelector("li:nth-child(2) button:nth-child(3)");
firstButton.addEventListener("click",redButton)
secondButton.addEventListener("click",greenButton)
thirdButton.addEventListener("click",blueButton)
function redButton(){
    secondLine.style.color="red";
}
function greenButton(){
    secondLine.style.color="green";
}
function blueButton(){
    secondLine.style.color="blue";
}


let thirdLine = document.querySelector("li:nth-child(3) input");
thirdLine.addEventListener("input",changeBackgroundColor)
function changeBackgroundColor(e){
    if (e.target.value.length % 4 === 3){
        thirdLine.style.backgroundColor="red"
    }
    if (e.target.value.length % 4 === 2){
        thirdLine.style.backgroundColor="blue"
        
    }
    if (e.target.value.length % 4 === 1){
        thirdLine.style.backgroundColor="yellow"
        
    }
    if (e.target.value.length % 4 === 0){
        thirdLine.style.backgroundColor="green"
        
    }
    if (e.target.value.length === 0){
        thirdLine.style.backgroundColor="white"
        
    }
    

}


let fourthLineButton = document.querySelector("li:nth-child(4) button");
let fourthLineInput = document.querySelector("li:nth-child(4) input");
fourthLineButton.addEventListener("click",changeBackgroundColorAgain)
function changeBackgroundColorAgain(e){
    document.body.style.backgroundColor = fourthLineInput.value

}


let fifthLine = document.querySelector("li:nth-child(5) button");
let number = document.querySelector("li:nth-child(5) span")
fifthLine.addEventListener("click",count)
let numberValue=0;
function count(){    
    numberValue++;
    number.textContent = numberValue;
    
}