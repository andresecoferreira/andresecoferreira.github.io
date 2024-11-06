let firstLine = document.querySelector("li:nth-child(1)");
firstLine.addEventListener("mouseover",() =>{
    firstLine.textContent="Obrigado por passares";
});
firstLine.addEventListener("mouseout",() => {
    firstLine.textContent="Passa por aqui!"
});

let secondLine = document.querySelector("li:nth-child(2)");
document.querySelectorAll("#color").forEach ((e) =>{
    e.addEventListener("click",() =>{
        secondLine.style.color = e.dataset.color;

    })
})

document.querySelector("select").onchange = function(){
    document.querySelector("body").style.backgroundColor = this.value;
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


if (!localStorage.getItem("countInicial")){
    localStorage.setItem("countInicial",0);
}
let fifthLine = document.querySelector("li:nth-child(5) button");
let number = document.querySelector("li:nth-child(5) span")
fifthLine.addEventListener("click",count)
let numberValue = localStorage.getItem("countInicial")
function count(){    
    numberValue++;
    number.textContent = numberValue;
    localStorage.setItem("countInicial",numberValue);
    
}
number.textContent= localStorage.getItem("countInicial")

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    document.querySelector("#mensagem").textContent = "Olá, o " + nome.value + " tem " + idade.value + " anos";
    return;
};


let counter=0;
const automatiCounter = document.querySelector("#contadorAutomatico");

function count (){
    automatiCounter.textContent = ++counter;
}

setInterval(count,1000)