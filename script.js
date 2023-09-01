aviso = document.getElementById('aviso')

function Calculo(enunciado) {
    
    Organizar(enunciado)

    for (let i = 0; i < operacoes.length; i++) {
        switch (operacoes[i]) {
            case "x":
                v1 = operacoes.indexOf(operacoes[i], i)
                valor1 = Number(numeros[operacoes.indexOf(operacoes[i], i)])
                valor2 = Number(numeros[operacoes.indexOf(operacoes[i], i) + 1])
                resultado = valor1 * valor2

                numeros.splice(v1, 2, resultado);
                operacoes.splice(v1, 1);

                i = i - 1

                break;

            case "/":
                v1 = operacoes.indexOf(operacoes[i], i)
                valor1 = Number(numeros[operacoes.indexOf(operacoes[i], i)])
                valor2 = Number(numeros[operacoes.indexOf(operacoes[i], i) + 1])

                resultado = valor1 / valor2

                numeros.splice(v1, 2, resultado);
                operacoes.splice(v1, 1);

                i = i - 1

                break;
            default:
                break;
        }
    }
    for (let i = 0; i < operacoes.length; i++) {
        switch (operacoes[i]) {
            case "+":
                v1 = operacoes.indexOf(operacoes[i], i)

                valor1 = Number(numeros[operacoes.indexOf(operacoes[i], i)])
                valor2 = Number(numeros[operacoes.indexOf(operacoes[i], i) + 1])

                resultado = valor1 + valor2

                numeros.splice(v1, 2, resultado);
                operacoes.splice(v1, 1);

                i = i - 1
                break;

            case "-":
                v1 = operacoes.indexOf(operacoes[i], i)

                valor1 = Number(numeros[operacoes.indexOf(operacoes[i], i)])
                valor2 = Number(numeros[operacoes.indexOf(operacoes[i], i) + 1])
                resultado = valor1 - valor2

                numeros.splice(v1, 2, resultado);
                operacoes.splice(v1, 1);

                i = i - 1
                break;
            default:

                break;
        }
    }
}

function Organizar(enunciado) {

    valorInicial = ""
    valorFinal = ""
    numeros = []
    operacoes = []

    for (let i = 0; i < enunciado.length; i++) {

        if (isNaN(enunciado.slice(i, i + 1))) {

            if (enunciado.slice(i, i + 1) == ".") {
                valorInicial = enunciado.slice(i, i + 1)
                valorFinal += valorInicial
            } else {
                operacoes.push(enunciado.slice(i, i + 1));
                numeros.push(valorFinal);
                valorFinal = "";
            }
        } else if (!isNaN(enunciado.slice(i, i + 1))) {
            valorInicial = enunciado.slice(i, i + 1)
            valorFinal += valorInicial
            
            if (i + 1 == enunciado.length) {
                numeros.push(valorFinal)
            }
        }
    }
}


function atualizaNumero(numero) {
    enunciado = document.getElementById("numero").value;

    if (enunciado == 0) {
        document.getElementById("numero").value = numero;

    } else {
        numeroTeste = enunciado.slice(enunciado.length - 1, enunciado.length)
        operacao = enunciado.slice(enunciado.length - 2, enunciado.length - 1)

        if ((operacao == "+" || operacao == "-" || operacao == "x" || operacao == "/") && numeroTeste == "0") {
            MostraAviso("Não é possivel adicionar outro numero no calculo")

        } else {
            valor = enunciado + numero;
            document.getElementById("numero").value = valor;
        }
    }
}

function limpar() {
    Calculo(0);
    document.getElementById("numero").value = "0";
}

function limparCaractere() {
    valor = document.getElementById("numero").value

    if (valor.length == 1 && Number(valor) == 0)
        MostraAviso("Não é possivel apagar o digito restante.")
    else if (valor.length == 1)
        document.getElementById("numero").value = "0";
    else
        document.getElementById("numero").value = valor.slice(0, valor.length - 1);
}

function atualizaOperacao(operacao) {

    enunciado = document.getElementById("numero").value;
    caractere = enunciado.slice(enunciado.length - 1, enunciado.length)

    if (isNaN(caractere)) 
        MostraAviso("Não é possivel adicionar outra operação.")
    else {
        enunciado = enunciado + operacao;
        document.getElementById("numero").value = enunciado;
    }
}

function realizaConta() {

    enunciado = document.getElementById("numero").value;

    if (isNaN(enunciado.slice(enunciado.length - 1, enunciado.length)))
        MostraAviso("Digite outro numero para realizar o calculo.")
    else if (enunciado.length == 1)
        MostraAviso("Digite o resto da operação para realizar o calculo.")
    else {
        Calculo(enunciado)
        document.getElementById("numero").value = resultado
        resultado = 0
    }
}

function MostraAviso(texto) {
    setTimeout(function () {
        aviso.classList.remove("alerta");
        document.getElementById("texto-aviso").innerHTML = ""
    }, 3000)

    setTimeout(function () {
        document.getElementById("texto-aviso").innerHTML = texto
    }, 400)

    aviso.classList.add("alerta");
}
