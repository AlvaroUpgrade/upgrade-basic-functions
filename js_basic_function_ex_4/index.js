// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let sum = 0;
let division = 0;
function average(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  

  for (let i = 0; i < numbers.length; i++) {
    div = i + 1;
  }
  // console.log(sum);
  // console.log(div);
  console.log("Se dividen los numeros: " + sum + " / " + div)
  let result = sum / div;
  
  console.log(result + " es el promedio.");
}

average(numbers);
