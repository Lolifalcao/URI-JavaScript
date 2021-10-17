let nota1 = parseFloat(prompt('Digite a nota1'))
let nota2 = parseFloat(prompt('Digite a nota2'))
let nota3 = parseFloat(prompt('Digite a nota3'))
console.log(nota1.toFixed(1)+'\n',nota2.toFixed(1)+'\n',nota3.toFixed(1))

let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
console.log(media)

document.write('MEDIA = ',media.toFixed(1))
