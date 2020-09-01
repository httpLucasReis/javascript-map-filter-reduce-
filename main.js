// Método For

const numbers = [2,4,6,7,10];
const newNumbers = [];

for(let i = 0; i < numbers.length ; i++ ) {
    newNumbers.push(numbers[i] * 2);
}

console.log(newNumbers);

/* 
Método map(callback)
Aplica a função para cada elemento do array
Retorna um novo array
*/

const newNumbersMap = numbers.map(function(num){
    return num * 2;
})

console.log(newNumbersMap);


// Utilizando arrow functions com map

const newNumbersMapArrow = numbers.map(num => num*2);
console.log(newNumbersMapArrow)


const nomes = ['Manoel','Teshima','Teste','Fulano'];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);

// *********************************************************************

/*
método filter(callback)
retorna true ou false
se for true, ele armazena esse valor na array se não ela não armazena.
*/

let mult2 = [];

for(let i = 0; i< numbers.length; i++){
    if(numbers[i] % 2 === 0){
        mult2.push(numbers[i]);
    }
}

console.log(mult2);

// Usando o Filter

/* 
const numbersFiltered = numbers.filter(function(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}) 

*/

/* 
const numbersFiltered = numbers.filter(function(num){
    return num % 2 === 0;
}) 
 */

const numbersFiltered = numbers.filter(num => num % 2 === 0);

console.log(numbersFiltered);


// Utilizando map e filter juntos 

const numbersMapFilter = numbers
  .filter(num => num % 2 === 0)
  .map(numFiltered => numFiltered * 4); 

console.log(numbersMapFilter);


/*
Método reduce(callback);
*/

let sum = 0;
const valorInicial = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);

// Utilizando o reduce

/* 
const sumReduce = numbers.reduce(function(valorAcumulador, valorArray) {
    return valorAcumulador + valorArray;
}, 0)

console.log(sumReduce); 
*/

// O valor acumulador mantém o valor anterior até o final do reduce
// 0: valor inicial do acumulador
// Poderia ser inicializado uma string vazia '', um objeto {}, etc.

// Utilizando o reduce com arrow functions 

const sumReduce = numbers.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray, valorInicial)

console.log(sumReduce); 


// Exemplo 2 

const pessoas = [
    {
      nome: "Manoel",
      idade: 16
    }, 
    {
      nome: "Inácio",
      idade: 50
    },
    {      
      nome: "João",
      idade: 500
    }
]

const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray){
    const propMaiorOuMenor = valorArray.idade >= 18? 'maiores': 'menores';
    
    valorAcumulador[propMaiorOuMenor].push(valorArray);

    return valorAcumulador;

}, {maiores: [], menores: []})

console.log(pessoasAgrupadas);