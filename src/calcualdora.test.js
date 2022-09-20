import {sumar,separarPorDelimitador,encontrarDelimitador,crearExpresionBusqueda} from "./calculadora";

describe("Sumar", () => {
  it("deberia devolver 0 al recibir una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia devolver solo un numero", () => {
    expect(sumar("4")).toEqual(4);
  });
  it("deberia devolver una suma de dos numeros dado el 1er delimitador", () => {
    expect(sumar("7,1")).toEqual(8);
  });
  it("deberia devolver una suma de dos numeros dado el 2do delimitador", () => {
    expect(sumar("7-1")).toEqual(8);
  });
  it("deberia devolver una suma de varios numeros con ambos delimitadores", () => {
    expect(sumar("7-1,6")).toEqual(14);
  });
  it("deberia devolver una suma de varios numeros añadiendo un delimitador", () => {
    expect(sumar("//[*] 6*7*4")).toEqual(17);
  });
  it("deberia devolver una suma de varios numeros añadiendo un delimitador a la lista de delimitadores", () => {
    expect(sumar("//[;] 6-7;4,1")).toEqual(18);
  });
  it("deberia ignorar numeros mayores a 1000", () => {
    expect(sumar("//[;] 6-7;4,1,1008")).toEqual(18);
  });
  it("deberia tomar en cuenta delimitadores con mas de 1 caracter", () => {
    expect(sumar("//[***] 1***2***3")).toEqual(6);
  });
  it("deberia tomar en cuenta multiples delimitadores", () => {
    expect(sumar("//[*][%] 1*2%3,7-9")).toEqual(22);
  });
  it("deberia tomar en cuenta multiples delimitadores2", () => {
    expect(sumar("//[*][%][&] 1*2%3,7-9&1")).toEqual(23);
  });
  
});
describe("Separar por delimitador", () => {
  it("deberia separar", () => {
    expect(separarPorDelimitador("//[*][%] 1*2%3,7-9")).toEqual(["1", "2", "3", "7", "9"]);
  });
});
describe("Encontrar una cadena de delimitadores", () => {
  it("deberia encontrar cadena de delimitadores", () => {
    expect(encontrarDelimitador("//[*][%] 1*2%3,7-9")).toEqual(["*", "%"]);
  });
});

describe("Crear expresión de busqueda", () => {
  it("deberia crear expresion de busqueda", () => {
    var expresion = encontrarDelimitador("//[*][%] 1*2%3,7-9");
    expect(crearExpresionBusqueda(expresion)).toEqual(/[*%,-]/);
  });
});
