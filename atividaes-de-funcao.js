// function repetirPalavra(palavra,vezes){
// for (let i = 1; i <= vezes; i++){
//     console.log(palavra)
// }
// }

// repetirPalavra("Javascript",3)

// function contarAte(limite){
// for (let i = 1; i <= 5; i++){
//     console.log(5)
// }
// }

// contarAte(5)

// Exercícios para resolver com funções que recebem parâmetro
// 1 - Função para exibir uma mensagem personalizada
// Crie uma função chamada exibirMensagem(mensagem), que recebe um texto como parâmetro e exibe no console. Exemplo: exibirMensagem("Olá, seja bem-vindo!") → Exibe "Olá, seja bem-vindo!" no console.

// function exibirMensagem(Olá){
//     console.log("Oiiii pessoal");
// }
// exibirMensagem("eiii");

// 2 - Função para repetir uma palavra várias vezes
// Crie uma função chamada repetirPalavra(palavra, vezes), que recebe uma palavra e um número e a exibe repetida no console. Exemplo: repetirPalavra("JavaScript", 3) → Exibe "JavaScript JavaScript JavaScript".

//  function repetirPalavra(palavra,vezes){
// for (let i = 1; i <= vezes; i++){
//     console.log(palavra)
// }
// }

//  repetirPalavra("vitoria",10)

// 3 - Função para imprimir a tabuada de um número
// Crie uma função chamada mostrarTabuada(numero), que recebe um número e imprime sua tabuada de 1 a 10. Exemplo: mostrarTabuada(4) → Exibe a tabuada do 4.

function mostrarTabuada(numero){
    console.log(`Tabuada lixo do ${numero}:`);
    console.log("----");

    for(let i = 1; i <=10; i++){
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
    console.log("----");

// }

// mostrarTabuada(3)
// mostrarTabuada(8)

// 4 - Função para contar até um número específico
// Crie uma função chamada contarAte(limite), que recebe um número e imprime de 1 até esse número. Exemplo: contarAte(5) → Exibe 1, 2, 3, 4, 5.

function contarAte(limite){
 for (let i = 1; i <= 5; i++){
  console.log(5)
 }
 }

 contarAte(5)

// 5 - Função para verificar se um número é par ou ímpar
// Crie uma função chamada verificarParOuImpar(numero), que recebe um número e exibe "Par" se for par e "Ímpar" se for ímpar. Exemplo: verificarParOuImpar(7) → Exibe "Ímpar".

// function parimpar(n){
//     if (n%2 == 0){
//         return 'Par idiota!'
//     } else {
//         return 'Impar idiota"'
//     }
// }

// console.log(parimpar(20))
// 6 - Função para exibir informações de um usuário
// Crie uma função chamada exibirUsuario(nome, idade), que recebe o nome e a idade de uma pessoa e exibe "Nome: X, Idade: Y anos". Exemplo: exibirUsuario("Gleidson", 30) → Exibe "Nome: Gleidson, Idade: 30 anos".

// function exibirUsuario(nome,idade){
// console.log(`Nome:${nome}, Idade:${idade} anos`);   
// }
// (exibirUsuario)("vitoria",23);
// (exibirUsuario)("aquila",1);

// 7 - Função para somar dois números e exibir o resultado
// Crie uma função chamada somarNumeros(a, b), que recebe dois números e exibe a soma deles no console. Exemplo: somarNumeros(5, 8) → Exibe "A soma é 13".

// function somarNumeros(a,b){
// return a + b
// }

// console.log(somarNumeros(7,7))


// 8 - Função para criar uma linha de asteriscos
// Crie uma função chamada desenharLinha(quantidade), que recebe um número e imprime uma linha de asteriscos com essa quantidade. Exemplo: desenharLinha(5) → Exibe "*****".

// 9 - Função para converter Celsius para Fahrenheit e exibir o resultado
// Crie uma função chamada converterTemperatura(celsius), que recebe uma temperatura em Celsius e exibe a conversão para Fahrenheit. Fórmula: F = (C × 9/5) + 32. Exemplo: converterTemperatura(0) → Exibe "0°C é igual a 32°F".

// 10 - Função para verificar se um número está dentro de um intervalo
// Crie uma função chamada verificarIntervalo(numero, min, max), que recebe um número e dois valores limite, verificando se o número está dentro desse intervalo. Exemplo: verificarIntervalo(15, 10, 20) → Exibe "15 está dentro do intervalo de 10 a 20".