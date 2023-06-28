function ordenarPorValorAscii(lista) {
    return lista.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  }
  
  const caracteres = ['b', 'h', 'w', 'e', 'a'];
  const caracteresOrdenados = ordenarPorValorAscii(caracteres);
  console.log(caracteresOrdenados);