function Calculo(enunciado) {

    Organizar(enunciado)

    possuimultiplicacao = false
    possuidivisao = false


    multiplicacao = operacoes.find((element) => element == "x");
    divisao = operacoes.find((element) => element == "/");

    if (multiplicacao == "x")
        possuimultiplicacao = true
    else if (divisao == "/")
        possuidivisao = true
    else {
        possuimultiplicacao = false
        possuidivisao = false
    }

    while (possuimultiplicacao || possuidivisao) {
        for (let i = 0; i < operacoes.length; i++) {
            switch (operacoes[i]) {
                case "x":
                    v1 = operacoes.indexOf(operacoes[i], i)

                    valor1 = numeros[operacoes.indexOf(operacoes[i], i)]
                    valor2 = numeros[operacoes.indexOf(operacoes[i], i) + 1]

                    resultado = valor1 * valor2

                    numeros.splice(v1, 2, resultado);
                    operacoes.splice(v1, 1);

                    break;

                case "/":
                    v1 = operacoes.indexOf(operacoes[i], i)

                    valor1 = numeros[operacoes.indexOf(operacoes[i], i)]
                    valor2 = numeros[operacoes.indexOf(operacoes[i], i) + 1]

                    resultado = valor1 / valor2


                    numeros.splice(v1, 2, resultado);
                    operacoes.splice(v1, 1);
                    break;
                default:

                    break;
            }

        }

        multiplicacao = operacoes.find((element) => element == "x");
        divisao = operacoes.find((element) => element == "/");

        if (multiplicacao == "x")
            possuimultiplicacao = true
        else if (divisao == "/")
            possuidivisao = true
        else {
            possuimultiplicacao = false
            possuidivisao = false
        }

    }

    possuisoma = false
    possuisubtracao = false

    soma = operacoes.find((element) => element == "+");
    subtracao = operacoes.find((element) => element == "-");

    if (soma == "+")
        possuisoma = true
    else if (subtracao == "-")
        possuisubtracao = true
    else {
        possuisoma = false
        possuisubtracao = false
    }

    while (possuisoma || possuisubtracao) {

        for (let i = 0; i < operacoes.length; i++) {
            switch (operacoes[i]) {
                case "+":
                    v1 = operacoes.indexOf(operacoes[i], i)

                    valor1 = numeros[operacoes.indexOf(operacoes[i], i)]
                    valor2 = numeros[operacoes.indexOf(operacoes[i], i) + 1]

                    resultado = parseFloat(valor1) + parseFloat(valor2)

                    numeros.splice(v1, 2, resultado);
                    operacoes.splice(v1, 1);

                    console.log(numeros)
                    console.log(operacoes)

                    break;

                case "-":
                    v1 = operacoes.indexOf(operacoes[i], i)

                    valor1 = numeros[operacoes.indexOf(operacoes[i], i)]
                    valor2 = numeros[operacoes.indexOf(operacoes[i], i) + 1]

                    resultado = parseFloat(valor1) - parseFloat(valor2)

                    numeros.splice(v1, 2, resultado);
                    operacoes.splice(v1, 1);
                    
                    console.log(numeros)
                    console.log(operacoes)

                    break;
                default:

                    break;
            }

        }
        soma = operacoes.find((element) => element == "+");
        subtracao = operacoes.find((element) => element == "-");

        if (soma == "+")
            possuisoma = true
        else if (subtracao == "-")
            possuisubtracao = true
        else {
            possuisoma = false
            possuisubtracao = false
        }

    }

    return resultado;

}
function Organizar(enunciado) {

    valor1 = 0
    valor2 = 0
    numeros = []
    operacoes = []
    caractereantigo = ""
    caracterenovo = ""
    let tamanho = enunciado.length
    for (let i = 0, a = 1; i < tamanho; i++, a++) {
        caractere = enunciado.slice(i, a)
        if (isNaN(caractere)) {
            //letra
            operacoes.push(caractere);

            numeros.push(caracterenovo);
            caracterenovo = "";
        } else {
            //numero
            caractereantigo = caractere
            caracterenovo = caracterenovo + caractereantigo
            if (a == tamanho) {
                ultimocaractere = caracterenovo
                numeros.push(ultimocaractere);
            }
        }
    }
    return numeros, operacoes
}


function atualizaNumero(num) {
    valorantigo = document.getElementById("numero").value;

    if (valorantigo == 0) {
        document.getElementById("numero").value = num;
    } else {
        valornovo = valorantigo + num;
        document.getElementById("numero").value = valornovo;
    }
}

function limpar() {
    document.getElementById("numero").value = "0";
}

function limparCaractere() {
    valor = document.getElementById("numero").value;

    if (valor.length == 1) {
        document.getElementById("numero").value = "0";
    } else {
        valornovo = valor.length - 1;

        document.getElementById("numero").value = valor.slice(0, valornovo);

    }
}

function atualizaOperacao(operacao) {

    enunciado = document.getElementById("numero").value;

    caractere = enunciado.slice(enunciado.length - 1, enunciado.length)

    if (isNaN(caractere) || (enunciado.length == 1 && caractere == 0)) {
        return false;
    } else {
        enunciado = enunciado + operacao;
        document.getElementById("numero").value = enunciado;

    }
}

function realizarConta() {

    enunciado = document.getElementById("numero").value;

    if (isNaN(enunciado.slice(enunciado.length - 1, enunciado.length))) {
        return false;
    } else {
        Calculo(enunciado);

        document.getElementById("numero").value = resultado;
    }
}



function ordemCorreta(numeros, operacoes) {

    operadores = operacoes.filter(word => word == 'x' || word == '/');

    if (operadores.length < 1) {
        return numeros, operacoes
    }

    for (let i = 0; i < operadores.length; i++) {

        if (numeros.length == 1) {
            return numeros, operacoes
        }

        if (operacoes.filter(x => x == 'x').length) {
            posicao = operacoes.indexOf('x')
            if (posicao > 0) {
                num = numeros[posicao] * numeros[posicao + 1];

                operacoes.splice(posicao, 1)

                numeros.splice(posicao, posicao + 1, num);
            } else {
                num = numeros[posicao] * numeros[posicao + 1];

                operacoes.splice(posicao, 1)

                numeros.splice(posicao, posicao + 2, num);

            }

        } else if (operacoes.filter(x => x == '/').length) {
            posicao = operacoes.indexOf('/')

            if (posicao > 0) {
                num = numeros[posicao] / numeros[posicao + 1];

                operacoes.splice(posicao, 1)

                numeros.splice(posicao, posicao + 1, num);
            } else {
                num = numeros[posicao] / numeros[posicao + 1];
                operacoes.splice(posicao, 1)
                numeros.splice(posicao, posicao + 2, num);
            }

        } else {
            return numeros, operacoes
        }
    }
}