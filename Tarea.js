
function fibonacci(numero){
    if (numero === 1){
      console.log("[0,1]")
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
      console.log(suma)
    }
  }
  
fibonacci(8)