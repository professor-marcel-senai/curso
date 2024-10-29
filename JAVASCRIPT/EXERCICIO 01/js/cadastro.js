 //Comentário em linha
/*
    Comentário em bloco
*/

//Variavel criada no escopo global do javascript para ser utilizada na função colocarDadosTable(), essa variavel permite existir até o navegador ser finalizado
//O ideal para uma variavel global é ser criada com o var ou o const
var contador = 1

function interacao_usuario(){
    //Exibe uma mensagem no navegador para o usuário    
    alert('Testando a linguagem JS.')

    //Exibe uma mensagem na área de console do navegador (Para o programador)
    console.log('Testando o JS na área de consoloe do navegador')

    //Exibe uma mensagem de confirmação, esperando duas respostas (Sim / Não)
    confirm('Deseja realmente sair da aplicação')

    //Ebie uma mensagem com entrada de dados para o usuário
    prompt('Digite seu nome:')
}

function pegarDadosForm (){
    //Cria uma variável nomeCliente que irá receber o elemento da caixa de texto do nome
    let nomeCliente = document.getElementById('nome')
    let emailCliente = document.getElementById('email')

    //typeof() -> permite identificar o tipo de dados de uma variável
    // console.log(typeof(nomeCliente.value))

    // let soma = nomeCliente.value + 2
    // console.log(soma)

    // let testeNumero = Number(nomeCliente.value)
    // let soma2 = testeNumero + 2
    // console.log(soma2)
    // console.log(typeof(testeNumero))

    /** Comandos para fazer conversão de tipos de dados
     * Number() - converte para numero
     * String() - converte para String
     * Boolean() - converte para booleano
     * Object() - converte para objeto
     */
    
    /*
        Operadores de comparação
        == Valida a igualdade entre dois conteúdos
        != Valida a diferença entre dois conteúdos
        <  Valida se o número é menor do que o outro
        >  Valida se o número é maior do que o outro
        <= Valida se o número é menor ou igual ao outro
        >= Valida se o número é maior ou igual ao outro
    
    */
    if(validarDados(nomeCliente, emailCliente)){
    //  Chama a função que escreve os dados na tebela, e encaminha os conteudos
    //  pela área de argumento da função
        colocarDadosTable(nomeCliente, emailCliente)
    }       

}

function colocarDadosTable (clienteNome, clienteEmail) {

    //Limtando a enytrada de apenas 4 clientes
    if(contador <= 4){
        //Recebendo no JS as colunas da tabela referente a linha 1
        let nome = document.getElementById('nome'+contador)
        let email = document.getElementById('email'+contador)
        //colocando dos dados do nome e do email das caixas de texto dentro das colunas 
        //da tabela referente a linha 01
        nome.innerText = clienteNome.value
        email.innerText = clienteEmail.value

        contador=contador +1
    }else{
        alert('Limite de dados excedido.')
    }
}

function validarDados (nome, email) {
    
    //Definindo as cores das caixas para branco (padrão)
    definirCorPadraoForm(nome, email)

    //Varivael do tipo booleana para definir se os dados foram validados
    let status = true

    //Validação de entrada de dados vazio
    if(nome.value == ''){
        status = false
        alert('É obrigatório o preenchimento dos dados do nome')
        nome.focus() //Coloca o cursor do mouse piscando na caixa
        //Através da propriedade style, podemos manipular qualquer comando de css
        nome.style.backgroundColor = '#f2bab6'
    }else{
        if(email.value == ''){
            status = false
            alert('É obrigatório o preenchimento dos dados do email')
            email.focus() //Coloca o cursor do mouse piscando na caixa
            email.style.backgroundColor = '#f2bab6'
        }
    }  
    return status  
}

function limparDados (){
    //Recebe as caixas do HTML
    let nomeCliente = document.getElementById('nome')
    let emailCliente = document.getElementById('email')

    //Estrutura para limpar todos os elementos da tabela
    for(let cont = 1; cont <=4; cont++){
        let nome = document.getElementById('nome'+cont)
        let email = document.getElementById('email'+cont)

        nome.innerText = ''
        email.innerText = ''
    }

    // //Exemplo da Repetição pelo While
    // let cont = 0 //start
    //         //stop
    // while(cont <= 50){
    //     console.log(cont)
    //     cont = cont +1 //incremento
    // }

    // //Exemplo da Repetição pelo FOR
    // for(let cont = 100; cont <= 200; cont++){
    //     console.log(cont)
    // }



    //Apaga os dados das caixas
    nomeCliente.value = ''
    emailCliente.value = ''

    //Irá definir a cor padrão das caixas de texto
    definirCorPadraoForm(nomeCliente, emailCliente)

    //Coloca o focu da digitação na caixa do nome
    nomeCliente.focus()

    //Restart no contador para inserir na tabela
    contador = 1
}

function definirCorPadraoForm (nome, email) {
   
    //Definir a cor de fundo das caixas para o branco
    nome.style.backgroundColor = '#ffffff'
    email.style.backgroundColor = '#ffffff'
}