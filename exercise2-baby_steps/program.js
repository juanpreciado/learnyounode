//Exercise2.
//BABY STEPS

var acumulador = 0;
for (var i = 2; i < process.argv.length; i++) {
  acumulador += Number(process.argv[i]);
}
console.log(acumulador);