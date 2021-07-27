/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const assert = require('assert');

const average = (array) => {
  if (array.length === 0) return undefined;
 if (typeof array !== 'object') return undefined;
    let counter = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (typeof array[i] !== 'number') return undefined;
      sum += array[i];
      counter += 1;
    }
    return Math.round(sum / counter); // Formula de arredondamento de número para o inteiro mais próximo.
};

module.exports = average;

let parameter = [-1, -2, -3, -4, -5];
let output = average(parameter);
assert.strictEqual(typeof average, 'function');

parameter = ['1', '2', '3', '4', '5'];
output = average(parameter);
assert.deepStrictEqual(output, undefined);

parameter = [];
output = average(parameter);
assert.deepStrictEqual(output, undefined);
