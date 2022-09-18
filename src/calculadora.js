function sumar(cadena) {
  let cadenaTrans = []
  if(cadena == ""){
    return 0;
  }
  if(cadena.includes(',')){
    cadenaTrans = separarPorDelimitador(cadena, ',');
    let suma =0;
    for(var i=0;i<cadenaTrans.length;i++){
      suma = suma + Number(cadenaTrans[i]);
    }
    return suma;
  }
  if(cadena.includes('-')){
    cadenaTrans = separarPorDelimitador(cadena, '-');
    let suma =0;
    for(var i=0;i<cadenaTrans.length;i++){
      suma = suma + Number(cadenaTrans[i]);
    }
    return suma;
  }
  return Number(cadena);
}
function separarPorDelimitador(cadena,delimitador){
  let suma = []
  suma = cadena.split(delimitador);
  return suma;
}
export default sumar;
