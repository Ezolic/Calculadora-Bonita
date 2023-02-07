

function Calculo(enunciado) {
  
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
      if (caractere == "x") {
        operacoes.unshift(caractere);
      } else if (caractere == "/")
      {
        operacoes.unshift(caractere);
      } else {
        operacoes.push(caractere);
      }
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
  let tamanhoonumeros = numeros.length
  let tamanhooperoes = operacoes.length
  for (let i = 0, a = 0, b = 1; i < tamanhooperoes; i++, a++, b++) {
    if (a > 0) {
      if (operacoes[a] == "+") {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 + valor2
      } else if (operacoes[a] == "-") {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 - valor2
      } else if (operacoes[a] == "x") {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 * valor2
      } else if (operacoes[a] == "/") {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 / valor2
      }
    } else {
      if (operacoes[a] == "+") {
        valor1 = parseInt(numeros[a]) + parseInt(numeros[b])
      } else if (operacoes[a] == "-") {
        valor1 = parseInt(numeros[a]) - parseInt(numeros[b])
      } else if (operacoes[a] == "x") {
        valor1 = parseInt(numeros[a]) * parseInt(numeros[b])
      } else if (operacoes[a] == "/") {
        valor1 = parseInt(numeros[a]) / parseInt(numeros[b])
      }
    }
  }

  console.log(numeros)
  console.log(operacoes)


  return valor1;
}

function atualizaNumero(num) {
  valorantigo = document.getElementById("numero").value;

  if(valorantigo == 0) {
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
  }  else {
    valornovo = valor.length - 1;

    document.getElementById("numero").value = valor.slice(0, valornovo);

  }
}

function atualizaOperacao(operacao) {

  enunciado = document.getElementById("numero").value;

  caractere = enunciado.slice(enunciado.length - 1, enunciado.length)

  if(isNaN(caractere) || enunciado.length == 1) {
    return false;
  } else {
    enunciado = enunciado + operacao;
    document.getElementById("numero").value = enunciado;
  }
}

function realizarConta() {

  enunciado = document.getElementById("numero").value;

  if(isNaN(enunciado.slice(enunciado.length - 1, enunciado.length))) {
    return false;
  } else {
    Calculo(enunciado);

    enunciado = document.getElementById("numero").value = valor1;
  }
}





