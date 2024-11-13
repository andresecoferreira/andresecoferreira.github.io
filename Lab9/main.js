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
    button.addEventListener("click", adicionarCesto());

    return article;

}
function carregarProdutos(produtos){
    produtos.forEach(produto => {
        const section =document.getElementById("produtos");   
        section.append(criarProduto(produto));  
    });
}

function adicionarCesto(){}
addEventListener("DOMContentLoaded",carregarProdutos(produtos));


