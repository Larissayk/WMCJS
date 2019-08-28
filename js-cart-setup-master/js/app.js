//Mostrando ou escondendo o menu do carrinho
const  botaoCarrinho = document.getElementById('cart-info');
const menuCarrinho = document.getElementById('cart');
console.log(menuCarrinho);
botaoCarrinho.addEventListener('click', function() {
    menuCarrinho.classList.toggle('show-cart');
});

const botaoAddProduto = document.querySelectorAll('.store-item-icon');
botaoAddProduto.forEach(function(botao){
    
    botao.addEventListener('click', function(event) {
        //Pegando o caminho da imagem do elemento pai
        if(event.target.parentElement.classList.contains('store-item-icon')) {
            let caminhoImagemCompleto = event.target.parentElement.previousElementSibling.src;
            const caminhoImagem = tratarCaminhoImagem(caminhoImagemCompleto);

            const precoProduto = event.target.parentElement.parentElement.parentElement;
            //console.log(precoProduto);

            const precoProdutoSelecionado = tratarPrecoProduto(precoProduto);
            //console.log(precoProdutoSelecionado);

            //enviando dados da imagem e preço dos produtos clicados para minha função
            inserirProdutoCarrinho(caminhoImagem, precoProdutoSelecionado);

        }
       
    });

});

//Tratando o caminho da imagem
tratarCaminhoImagem = function(caminhoImagemCompleto) {
    const indexCaminhoCompleto = caminhoImagemCompleto.indexOf('img') + 3;
    const caminhoReduzidoImagem = caminhoImagemCompleto.slice(indexCaminhoCompleto);
    return caminhoReduzidoImagem;
}

//Tratando o valor do produto comprado a partir de um elemento que eu cliquei
tratarPrecoProduto = function(precoProduto) {
    //console.log(precoProduto.dataset.price);
    const precoDataProduto = parseInt(precoProduto.dataset.price);
    //console.log(precoDataProduto);
    return precoDataProduto;
};

inserirProdutoCarrinho = function(caminhoImagem, precoProduto) {
    const divProdutoInserido = document.createElement('div');
    divProdutoInserido.classList.add(
        'cart-item',
        'd-flex',
        'justify-content-between',
        'text-capitalize',
        'my-3'
    );

    const templateProdutoCarrinho = `
            <img src="img-cart${caminhoImagem}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">preço</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${precoProduto}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`
            //console.log(divProdutoInserido);

            divProdutoInserido.innerHTML = templateProdutoCarrinho;
            const carrinho = document.getElementById('cart');
            const totalcarrinho = document.querySelector('.cart-total-container');
            carrinho.insertBefore(divProdutoInserido, totalcarrinho);

            const quantidadeProdutosCarrinho = document.getElementById('item-count');
            const quantidadeProdutosCarrinhoNumber = parseInt(quantidadeProdutosCarrinho.innerText) + 1;
            
            console.log(quantidadeProdutosCarrinhoNumber);
            quantidadeProdutosCarrinho.innerHTML = quantidadeProdutosCarrinhoNumber;
            alert('inseriu!');
}

