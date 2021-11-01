let number = parseInt(prompt('Digite o número do funcionário:'));
let hour = parseInt(prompt('Informe a quantidade de horas trabalhadas:'));
let value = parseFloat(prompt('Informe o valor da hora trabalhada'));
console.log(number+'\n',hour+'\n',value.toFixed(2));

let salary = (hour*value);
console.log(salary.toFixed(2));

document.write('Funcionário = ',number,'<br>'+'Salário = R$ ',salary.toFixed(2));
