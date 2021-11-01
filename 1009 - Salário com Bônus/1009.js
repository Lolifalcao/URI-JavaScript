let nome = prompt('Digite o nome do vendedor:');
let salario = parseFloat(prompt('Informe o salário fixo:'));
let vendas = parseFloat(prompt('Informe o montante de vendas:'));
console.log(nome+'\n',salario.toFixed(2)+'\n',vendas.toFixed(2));

let comissao = vendas.toFixed(2)*0.15;
console.log(comissao.toFixed(2));

let total = salario + comissao;
console.log(total.toFixed(2));

document.write('TOTAL = R$ ',total.toFixed(2));