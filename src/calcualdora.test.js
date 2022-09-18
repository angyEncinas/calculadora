import sumar from "./calculadora";

describe("Sumar", () => {
  it("deberia devolver 0 al recibir una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia devolver solo un numero", () => {
    expect(sumar("4")).toEqual(4);
  });
});
