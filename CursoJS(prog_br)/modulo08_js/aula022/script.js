//criar data passando: year, month, day, hours, minutes, seconds, milliseconds

//o mês é em formato de número no estilo de um array onde o 0 é janeiro e o 11 é dezembro

var d = new Date("jan 19 2015 18:06");

//outra maneira de criar uma data é passando o número de milisegundos passado desde  31 de dezembro de 1969 as 16:00 no Pacific Time 


//outra forma é com string: "jan 01 2022"
//var d = new Date("jan 19 2022 18:06");

console.log(d.getFullYear());//mostra o ano


console.log(d.getDate());//mostr o dia

console.log(d.getDay()); //pega o dia da semana que vai de 0(domingo) a 6(sabado)


console.log(d.getHours());

//getSeconds(). 
//getMilliseconds().
//getMonth().
//getTime() retorna o valor de milisegundos

console.log(d.setFullYear(2022));
console.log(d)

//setFullYear para modificar o ano, ou qualquer outro elemento usando o set 
