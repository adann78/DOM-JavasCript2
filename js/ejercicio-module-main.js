// main.js
const countries = require('./ejercicio-module.js');


console.log('Countries:', countries);


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';

// Step 1: Remove all punctuations
let cleanText = text.replace(/[.,]/g, '');

// Step 2: Convert the string to an array of words
let wordsArray = cleanText.split(' ');

// Step 3: Count the number of words in the array
let wordCount = wordsArray.length;

console.log('Clean Text:', cleanText);
console.log('Words Array:', wordsArray);
console.log('Number of Words:', wordCount);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
console.log(shoppingCart)
const shoppingCart2=shoppingCart.slice(4,1)
console.log(shoppingCart2)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const median=Math.floor(ages.length/2)
console.log(ages.sort())
const min=ages[0]
console.log(min)

const max=ages.length-1
console.log(ages[max])

// Sumar los valores
let suma = ages.reduce((a, b) => a + b, 0);

// Calcular el promedio 
let promedio = suma / ages.length;

// Imprimir los resultados
console.log("Suma:", suma);
console.log("Promedio:", promedio);



  
  // Calcular el índice de la mitad
  let mitad = Math.ceil(countries.length / 2);
  
  // Dividir el arreglo en dos
  let firstHalf = countries.slice(0, mitad);
  let secondHalf = countries.slice(mitad);
  
  // Imprimir los resultados
  console.log("Primera mitad:", firstHalf);
  console.log("Segunda mitad:", secondHalf);
  