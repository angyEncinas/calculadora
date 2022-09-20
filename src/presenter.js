import {sumar} from "./calculadora";

const first = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = first.value;

  div.innerHTML = "<p>" + sumar(cadena) + "</p>";
});
