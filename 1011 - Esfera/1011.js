let raio = parseFloat(prompt('Digite o valor do raio'));
let pi = 3.14159;
console.log(raio);

let volume = (4/3.0) * pi * (raio*raio*raio);
console.log(volume.toFixed(3));

document.write('VOLUME = ',volume.toFixed(3));
