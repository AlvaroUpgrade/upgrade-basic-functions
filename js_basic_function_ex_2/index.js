// **Iteración #2: Buscar la palabra más larga**
// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

let avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(array) {
  let words = [];

  for (let i = 0; i < array.length; i++) {
    words.push(array[i].length);
  }
  // for (let word of array) {
  //   words.push(word.length);
  // }

  let maximum = Math.max.apply(null, words);
  // for (let word of array) {
  //   if (word.length === maximum) {
  //     console.log(word);
  //   }
  // }

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === maximum) {
      // console.log(array[i]);
      return array[i];
    }
  }
}

console.log(findLongestWord(avengers));
