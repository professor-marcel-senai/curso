//Recebe o botao somar, multiplicar, subtrair, dividir do HTML
var botaoSomar          = document.getElementById('somar')
var botaoSubtrair       = document.getElementById('subtrair')
var botaoMultiplicar    = document.getElementById('multiplicar')
var botaoDividir        = document.getElementById('dividir')
var botaoCE             = document.getElementById('ce')
var caixaValor1         = document.getElementById('valor1')
var caixaValor2         = document.getElementById('valor2')

function calcular (operacaoMatematica){

    if(validarDados()){

        //Recebe os valores diitados nas caixas
        let valor1 = document.getElementById('valor1')
        let valor2 = document.getElementById('valor2')

        let resultadoForm = document.getElementById('resultado')
        let resultado

        //Number() -> converte a variavel do tipo String para numero
        //toUpperCase() -> converte um variavel String para MAIUSCULO
        //toLowerCase() -> converte um variavel String para minusculo
        if(String(operacaoMatematica).toUpperCase() == 'SOMAR'){
            resultado = Number(valor1.value) + Number(valor2.value)
        }else if(String(operacaoMatematica).toUpperCase() == 'SUBTRAIR'){
            resultado = Number(valor1.value) - Number(valor2.value)
        }else if(String(operacaoMatematica).toUpperCase() == 'MULTIPLICAR'){
            resultado = Number(valor1.value) * Number(valor2.value)
        }else if(String(operacaoMatematica).toUpperCase() == 'DIVIDIR'){
            resultado = Number(valor1.value) / Number(valor2.value)
        }

        //Coloca o valor do calculo na caixa do resultado no HTML
        resultadoForm.innerText = Number(resultado).toFixed(4)
    }
}

function limpar () {
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let resultado = document.getElementById('resultado')

    valor1.value = ''
    valor2.value = ''
    valor1.focus()
    resultado.innerText = ''
}

function validarDados (){
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let status = true

    valor1.style.backgroundColor = '#ffffff'
    valor2.style.backgroundColor = '#ffffff'

    if(valor1.value == ''){
        alert('O valor 1 não pode ficar vazio.')
        valor1.focus()
        valor1.style.backgroundColor = '#f2bab6'
        status = false
    }else if (valor2.value == ''){
        alert('O valor 2 não pode ficar vazio.')
        valor2.focus()
        valor2.style.backgroundColor = '#f2bab6'
        status = false
    }

    return status
}

function bloquearLetras (caracter){
    if(caracter.charCode < 48 || caracter.charCode > 57){
        if(caracter.charCode != 45 && caracter.charCode != 46){
            return false
        }
    }
}

//Criar um evento de escuta para o botão somar no 'click', através de uma 
//função de CallBack recebemos o retorno do metodo EventListener 
botaoSomar.addEventListener('click',        function(){calcular('Somar')})
botaoSubtrair.addEventListener('click',     function(){calcular('subtrair')})
botaoMultiplicar.addEventListener('click',  function(){calcular('multiplicar')})
botaoDividir.addEventListener('click',      function(){calcular('dividir')})
botaoCE.addEventListener('click',           function(){limpar()})
caixaValor1.addEventListener('keypress',    function(event){
    if(bloquearLetras(event) == false){
        event.preventDefault() //cancelar a ação do evento
    }
})

caixaValor2.addEventListener('keypress',    function(event){
    if(bloquearLetras(event) == false){
        event.preventDefault()
    }
})