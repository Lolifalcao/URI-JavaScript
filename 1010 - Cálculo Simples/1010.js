let codigo1 = parseInt(prompt('Digite o código da peça 1:'));
let quantidade1 = parseInt(prompt('Insira a quantidade de peças 1:'));
let unitario1 = parseFloat(prompt('Digite o valor da peça 1:'));
console.log(codigo1+' '+quantidade1+' '+unitario1.toFixed(2));

let codigo2 = parseInt(prompt('Digite o código da peça 2:'));
let quantidade2 = parseInt(prompt('Insira a quantidade de peças 2:'));
let unitario2 = parseFloat(prompt('Digite o valor da peça 2:'));
console.log(codigo2+' '+quantidade2+' '+unitario2.toFixed(2));

let total1 = quantidade1*unitario1;
let total2 = quantidade2*unitario2;

let valor = total1+total2;
console.log(valor.toFixed(2));

document.write('VALOR A PAGAR: R$ ',valor.toFixed(2));
