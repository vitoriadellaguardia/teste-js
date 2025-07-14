// for (let i=10; i >=1; i --){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = `, i * 5);
// }

// let contador = 0;
// for (let i = 1; i <= 100; i++){
//     console.log(contador += i);
// }
//     console.log(`A soma dos 100 primeiros numeros é: `, contador);

//  for (let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
    
// }   

// let nomes = ["camila", "matheus", "vitoria", "joao", "lais", "edgar", "Aquila"];
// for (let i = 0; i < nomes.length; i ++) {
//     console.log(`Seja bem vindo(a), ${nomes[i]}`);
// }

// let contador = 1;
// for (let i = 1; i <= 10; i++){
//     contador *= i;
// }
// console.log(`A multiplicação dos 10 primeiros numeros é: `, contador);

// let contador = 0;
// let numeros = [1,2,3,0]

// while(numeros[contador] != undefined){
//     contador++;
// }
// console.log(contador);

let contador = 0;
let numeros = [1,2,3,0]
let nomes = ["camila", "matheus", "vitoria", "joao", "lais", "edgar", "Aquila"];

function contar(array){
    if(array){
        let contador = 0
while(array[contador] != undefined){
    contador++;
    }
console.log(contador);
}else{
    console.log("Passe o array");
}
}

contar(numeros)
contar(nomes)