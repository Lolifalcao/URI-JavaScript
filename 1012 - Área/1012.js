let numA = parseFloat(prompt('Digite o valor de A'));
let numB = parseFloat(prompt('Digite o valor de B'));
let numC = parseFloat(prompt('Digite o valor de C'));
console.log(numA.toFixed(1),' ',numB.toFixed(1),' ',numC.toFixed(1));

let triangulo = (numA*numC)/2;
console.log('TRIÂNGULO: '+triangulo.toFixed(3));

let pi = 3.14159;
let circulo = pi*(numC*numC);
console.log('CÍRCULO: '+circulo.toFixed(3));

let trapezio = (numA+numB)*numC/2;
console.log('TRAPÉZIO: '+trapezio.toFixed(3));

let quadrado = numB*numB;
console.log('QUADRADO: '+quadrado.toFixed(3));

let retangulo = numA*numB;
console.log('RETÂNGULO: '+retangulo.toFixed(3));
