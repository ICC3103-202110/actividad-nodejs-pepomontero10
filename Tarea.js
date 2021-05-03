var readlineSync = require('readline-sync')
var number = readlineSync.question('May I have your number?:');
number = parseInt(number);
function fibonacci(numero){
    if (numero === 1 || numero === 0){  
      console.log("F(" + numero + ") = " + numero)
    }
    else{
      var x = 2
      var nuevo = 1
      var f = 0
      var suma = 0
      while(numero !== x-1){
        suma = f + nuevo
        f = nuevo
        nuevo = suma
        x += 1
      }
      console.log("F(" + numero + ") = " + suma)
    }
  }
  
fibonacci(number)