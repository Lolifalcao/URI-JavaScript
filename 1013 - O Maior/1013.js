let numA = parseInt(prompt('digite o primeiro valor'));
let numB = parseInt(prompt('digite o segundo valor'));
let numC = parseInt(prompt('digite o terceiro valor'));
console.log(numA+' '+numB+' '+numC);

let maiorAB = (numA+numB+Math.abs(numA-numB))/2;
let maior = (maiorAB+numC+Math.abs(maiorAB-numC))/2;
console.log(maior+' eh o maior');
