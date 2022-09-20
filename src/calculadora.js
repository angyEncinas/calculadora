function sumar(cadena) {
  let cadenaTrans = []
  if(cadena == ""){
    return 0;
  }
  cadenaTrans = separarPorDelimitador(cadena);
  let suma =0;
    for(var i=0;i<cadenaTrans.length;i++){
      suma = suma + Number(cadenaTrans[i]);
    }
  return suma;
}
function separarPorDelimitador(cadena){
  let suma = [];
  if(cadena[0] == '/') {
    var delimitador = encontrarDelimitador(cadena);
    var parte = cadena.split(' ');
    suma = parte[1].split(delimitador);
  }else{
    var regx = new RegExp(',|-');
    suma = cadena.split(regx);
  }
  
  return suma;
}
function encontrarDelimitador(cadena){
  let delimitadores = [];
  let conjunto = cadena.match(/\[([^\]]+)]/g);
  for(var i=0; i<conjunto.length; i++){
    delimitadores[i]= conjunto[i].replace(/[\[\]]/g, '');
  }
  return delimitadores[0];
}
export {sumar,encontrarDelimitador,separarPorDelimitador};
