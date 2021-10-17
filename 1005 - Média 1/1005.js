let nota1 = prompt('Digite a nota1')
let nota2 = prompt('Digite a nota2')
console.log(nota1)
console.log(nota2)

let media = ((parseFloat(nota1) * 3.5) + (parseFloat(nota2) * 7.5)) / 11
console.log(media)

document.write('MEDIA = ',media.toFixed(5))
