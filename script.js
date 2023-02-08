

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
  ordemCorreta(numeros, operacoes)

  if(numeros.length == 1) {
    valor1 = numeros
    return valor1
  }

  let tamanhooperoes = operacoes.length
  for (let i = 0, a = 0, b = 1; i < tamanhooperoes; i++, a++, b++) {
    if (a > 0) {
      if (operacoes[a] == "+") {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 + valor2
      } else {
        valor2 = parseInt(numeros[b])
        valor1 = valor1 - valor2

      }
    } else {
      if (operacoes[a] == "+") {
        valor1 = parseInt(numeros[a]) + parseInt(numeros[b])
      } else  {
        valor1 = parseInt(numeros[a]) - parseInt(numeros[b])
      }
    }
  }
  return valor1;


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

      enunciado = document.getElementById("numero").value = valor1;
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

        console.log("Caiu divisão " + i)


        if (posicao > 0) {
          num = numeros[posicao] * numeros[posicao + 1];

          operacoes.splice(posicao, 1)

          numeros.splice(posicao, posicao + 1, num);
        } else {
          num = numeros[posicao] * numeros[posicao + 1];

          operacoes.splice(posicao, 1)

          numeros.splice(posicao, posicao + 2, num);

        }

        console.log(numeros);
        console.log(operacoes);


      } else if (operacoes.filter(x => x == '/').length) {
        posicao = operacoes.indexOf('/')

        console.log("Caiu multiplicação " + i)


        if (posicao > 0) {
          num = numeros[posicao] / numeros[posicao + 1];

          operacoes.splice(posicao, 1)

          numeros.splice(posicao, posicao + 1, num);
        } else {
          num = numeros[posicao] / numeros[posicao + 1];

          operacoes.splice(posicao, 1)

          numeros.splice(posicao, posicao + 2, num);
        }

        console.log(numeros);
        console.log(operacoes);

      } else {
        return numeros, operacoes
      }
    }

  }

/*
numeros = [10,5,10,10,10,10,10,10]
operacoes = ['x','x','x','x','x','x','x']

operadores = operacoes.filter(word => word == 'x' || word == '/');

console.log(operadores.length)


  for (let i = 0; i < operadores.length; i++) {



    if (operacoes.filter(x => x == 'x').length) {
      posicao = operacoes.indexOf('x')

      console.log("Caiu divisão " + i)


      if (posicao > 0) {
        num = numeros[posicao] * numeros[posicao + 1];

        operacoes.splice(posicao, 1)

        numeros.splice(posicao, posicao + 1, num);
      } else {
        num = numeros[posicao] * numeros[posicao + 1];

        operacoes.splice(posicao, 1)

        numeros.splice(posicao, posicao + 2, num);
        
      }

      console.log(numeros);
      console.log(operacoes);


    } else if (operacoes.filter(x => x == '/').length) {
      posicao = operacoes.indexOf('/')

      console.log("Caiu multiplicação " + i)


      if (posicao > 0) {
        num = numeros[posicao] / numeros[posicao + 1];

        operacoes.splice(posicao, 1)

        numeros.splice(posicao, posicao + 1, num);
      } else {
        num = numeros[posicao] / numeros[posicao + 1];

        operacoes.splice(posicao, 1)

        numeros.splice(posicao, posicao + 2, num);
      }

      console.log(numeros);
      console.log(operacoes);

    } else { }
  }

*/


