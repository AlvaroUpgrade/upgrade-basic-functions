// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array
// - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

let userValue = "Bruce";

function finderName(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log("El valor se encuentra en la posición: " + array.indexOf(value));
    } else {
      console.log("No se encuentra el valor " + value + " dentro del array");
    }
  }
}

finderName(nameFinder, userValue);
