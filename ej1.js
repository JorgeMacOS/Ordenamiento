function ordenarDescendente(arreglo) {
    return arreglo.sort((a, b) => b - a);
  }
  
  const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
  const numerosOrdenados = ordenarDescendente(numeros);
  console.log(numerosOrdenados);