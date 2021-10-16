const pi = 3.14159;
let raio = prompt('Escreva o raio da circunferência')
raio = parseFloat(raio)
console.log(raio)

let area = pi * raio * raio
console.log(area.toFixed(4))

document.write('A= ', area.toFixed(4), 'm²')