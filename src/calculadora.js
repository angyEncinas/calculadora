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
  var regx = new RegExp(',|-');
  let suma = []
  suma = cadena.split(regx);
  return suma;
}
export default sumar;
