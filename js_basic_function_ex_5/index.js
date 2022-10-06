// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y
// de lo contrario cuente la longitud del string y lo sume.  Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
let sumNum = 0;
let sumString = 0;

function averageWord(array) {
  for (let i = 0; i < array.length; i++) {
    let ourArray = array[i];
    if (typeof ourArray === "number") {
      sumNum += array[i];
    } else {
      sumString += array[i].length;
    }
  }
  console.log("Resultado de la suma de los numeros: " + sumNum);
  console.log("Resultado de la suma de los numeros: " + sumString);
}
averageWord(mixedElements);
