function ordenarPorLongitud(palabras) {
    return palabras.sort((a, b) => a.length - b.length);
  }
  
  const palabras = ["adios", "hola", "maximo", "uno", "despedida"];
  const palabrasOrdenadas = ordenarPorLongitud(palabras);
  console.log(palabrasOrdenadas);