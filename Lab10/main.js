if(!localStorage.getItem('produtos-selecionados')){
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}

let produtos = [];
fetch("https://deisishop.pythonanywhere.com/products/")
.then (response=>response.json())
.then (data => {
    console.log(data);
    produtos=data;
    carregarProdutos(produtos);             
});


function criarProduto(produto){
    const article = document.createElement(`article`);    //criar article        
    const title = document.createElement (`h3`);         //criar h3 para titulo do produto
    title.textContent = produto.title;
    article.append(title);

    const image = document.createElement(`img`);          //criar imagem do produto
    image.src= produto.image;
    article.append(image);

    const price = document.createElement(`h4`);
    price.textContent = produto.price + " €";
    article.append(price);

    const description = document.createElement(`p`);
    description.textContent = produto.description;
    article.append(description);

    const button = document.createElement(`button`);
    button.textContent = "+ Adicionar ao Cesto"
    article.append(button);
    button.addEventListener("click", () =>{
        //adicionar ao local storage
        const lista = JSON.parse(localStorage.getItem('produtos-selecionados')) ;        
        lista.push(produto);
        localStorage.setItem('produtos-selecionados', JSON.stringify(lista));
        atualizaCesto();
         

    });

    return article;

}
function carregarProdutos(prod){   
        const section =document.getElementById("produtos"); 
        section.innerHTML=""
        prod.forEach(produto => {
            section.append(criarProduto(produto));  
        });      
   

}
function criarProdutoCesto (produto){
    const article = document.createElement(`article`); 

    const title = document.createElement (`h3`);         
    title.textContent = produto.title;
    article.append(title);

    const image = document.createElement(`img`);          //criar imagem do produto
    image.src= produto.image;
    article.append(image);
    
    const price = document.createElement(`h4`);
    price.textContent = produto.price + " €";
    article.append(price);

    const button = document.createElement(`button`);
    button.textContent = "- Remover do Cesto"
    article.append(button);
    button.addEventListener("click", () =>{
        //remove do localStorage
        const lista = JSON.parse(localStorage.getItem('produtos-selecionados')) ; 
        const indice = lista.findIndex(item => item.id === produto.id);
        const retirado = lista.splice(indice, 1);
        localStorage.setItem('produtos-selecionados', JSON.stringify(lista));
        //remove da section
        const section =document.getElementById("cesto");  
        section.removeChild(article);
        atualizaCesto();
    });
    return article;


}
function atualizaCesto(){
    const section =document.getElementById("cesto"); 
    section.innerHTML="";
    let somaTotal=0;
    const lista = JSON.parse(localStorage.getItem('produtos-selecionados'));
    lista.forEach(produto=> {          
        section.append(criarProdutoCesto(produto)); 
        somaTotal+=parseFloat(produto.price);
    })
    document.getElementById("custoTotal").textContent=somaTotal.toFixed(2) + " €";
}   
addEventListener("DOMContentLoaded",() => {    
    atualizaCesto();
    criarFiltros();
    ordenarPorPreco();
    pesquisar();
    comprar();
})
function criarFiltros(){    
    const filtrar = document.getElementById("filtros") 
    fetch("https://deisishop.pythonanywhere.com/categories/")
    .then (response=>response.json())
    .then (data => {
        console.log(data);
        data.forEach(categoria => {
            const option=document.createElement("option");
            option.textContent = categoria;
            option.value = categoria;
            filtrar.append(option);            
        });
        const section =document.getElementById("produtos");
        filtrar.onchange = function(){             
            if(this.value != "todas"){
                carregarProdutos(produtos.filter (produto => produto.category === this.value));  
               
            }else{
                carregarProdutos(produtos);
            }             
            
                 
            
        }
    })    
}

function ordenarPorPreco(){
    const selectOrdenar =document.getElementById("ordenar");
    selectOrdenar.onchange= function(){
        console.log(this.value)
        if (this.value === "ascendente"){
            carregarProdutos(produtos.sort((a,b) => a.price-b.price))
        }else if (this.value === "descendente"){
            carregarProdutos(produtos.sort((a,b) => b.price-a.price))
        }      

    }
}

function pesquisar(){
    const pesquisarProduto=document.getElementById("pesquisar")
    pesquisarProduto.oninput=function(){
        carregarProdutos(produtos.filter (produto => produto.title.toLowerCase().includes(this.value.toLowerCase()) ))
    }
}


function comprar(){ 
    const botaoComprar=document.getElementById("botao");
    botaoComprar.onclick = function(){
        let counter=1; 

        const checkBox = document.getElementById("alunoDeisi");
        const cupaoDesconto = document.getElementById("cupao")
        const bodyEnvio = {
            products: JSON.parse(localStorage.getItem('produtos-selecionados')),
            student: checkBox.checked, 
            coupon: cupaoDesconto.value
        };
    console.log(bodyEnvio);

    fetch('https://deisishop.pythonanywhere.com/buy/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(bodyEnvio)
        })
        .then(response => response.json()) 
        .then(data => {           
                //desconto DEISI                
                const section = document.getElementById("checkout");                                                     
                if(counter===1){
                    let newH3 = document.createElement('h3');
                    newH3.id="desconto"
                    newH3.textContent = "Valor final a pagar (com eventuais descontos) : ";
                    section.append(newH3);
                    
                }
                if(checkBox.checked){
                    let h3Alterar = document.getElementById("desconto")
                    h3Alterar.textContent = "Valor final a pagar (com eventuais descontos) : " + data.totalCost + " €"; 
                    
                }else{
                    let h3Alterar = document.getElementById("desconto")
                    h3Alterar.textContent = "Valor final a pagar (com eventuais descontos) : " + data.totalCost + " €";
                }  
                if (counter === 1){
                    let newP = document.createElement('p');
                    newP.textContent = "Referência de pagamento: " + data.reference;
                    newP.id="referencia"
                    section.append(newP)

                }                  
                let pReferencia = document.getElementById("referencia")
                pReferencia.textContent = "Referência de pagamento: " + data.reference;                
                counter++;

          })
        
    } 

 
}



