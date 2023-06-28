function calcularDistancia(coordenada) {
    const [x, y] = coordenada;
    return Math.sqrt(x * x + y * y);
  }
  
  function ordenarPorDistancia(coordenadas) {
    return coordenadas.sort((a, b) => calcularDistancia(a) - calcularDistancia(b));
  }
  
  const coordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
  const coordenadasOrdenadas = ordenarPorDistancia(coordenadas);
  console.log(coordenadasOrdenadas);
  