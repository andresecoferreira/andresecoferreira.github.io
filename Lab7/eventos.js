let lakers = document.querySelector("#lakers");
lakers.addEventListener("click",changeColorToYellow)
function changeColorToYellow (){
    lakers.style.backgroundColor = "yellow"
}

let gsw = document.querySelector("#golden");
gsw.addEventListener("dblclick",changeText)
function changeText (){
    gsw.textContent = "World Champions"
}

let bulls = document.querySelector("#bulls");
bulls.addEventListener("mouseover",mouseOverJordan)
bulls.addEventListener("mouseout",mouseOut)
function mouseOverJordan(){
    bulls.textContent="JORDAN GOAT"
    bulls.style.backgroundColor = "black"
    bulls.style.color = "red"
}
function mouseOut(){
    bulls.textContent="East Kings"
    bulls.style.backgroundColor = "red"
    bulls.style.color = "white"
}

let area= document.querySelector("header")
area.addEventListener("mousemove",changeCursor)
function changeCursor(){
    area.textContent="I LOVE THIS GAME"
}