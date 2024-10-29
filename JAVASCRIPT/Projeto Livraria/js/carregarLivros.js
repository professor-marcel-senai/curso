/**********************************************************************************
 * Objetivo: Criar cards de livros através de uma API
 * Data: 28/10/2024
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************/

const carregarLivrosAPI = async function(){
    //URL da API de Livros
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros'

    //Executa a URL para obter os dados da API
    let resposta = await fetch(url)

    //Converte em JSON
    let dadosLivros = await resposta.json()

    //Retorna os dados da API
    return dadosLivros
}

const criarCardsLivros = function(dadosLivros){
    let divCardProdutos = document.getElementById('cardProdutos')

    //Estrutura de repetição para pegar cada um dos livros do ARRAY e disponibilizar no CARD
    dadosLivros.books.forEach(function(livro){
       
    //Cria uma TAG no HTML
        let divCaixaProduto     = document.createElement('div')
        let h2CaixaTitulo       = document.createElement('h2') 
        let figureCaixaImagem   = document.createElement('figure')
        let img                 = document.createElement('img')
        let divCaixaTexto       = document.createElement('div')
        let pDescricaoProduto   = document.createElement('p')

        h2CaixaTitulo.innerText = livro.title //Titulo do livro do ARRAY
        pDescricaoProduto.innerText = livro.subtitle //Descrição do livro do ARRAY
    
    //Permite criar atributos em um elemento HTML
        divCaixaProduto.setAttribute('class', 'caixa_produto')
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
        figureCaixaImagem.setAttribute('class', 'caixa_imagem')
        img.setAttribute('src', livro.image) //Imagem do livro do ARRAY
        divCaixaTexto.setAttribute('class', 'caixa_texto')

    //Permite colocar um elemento HTML sendo filho de outro elemento
        divCardProdutos.appendChild(divCaixaProduto)
        divCaixaProduto.appendChild(h2CaixaTitulo)
        divCaixaProduto.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(img)
        divCaixaProduto.appendChild(divCaixaTexto)
        divCaixaTexto.appendChild(pDescricaoProduto)
    })
}

//Criando um evento de load ao carregar a janela do navegador
window.addEventListener('load', async function(){
    let dados = await carregarLivrosAPI()
    if(dados){
        criarCardsLivros(dados)
    }
})