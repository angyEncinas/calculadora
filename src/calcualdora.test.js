import sumar from "./calculadora";

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
});
