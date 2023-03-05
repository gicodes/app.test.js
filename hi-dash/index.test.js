const { forEach, map } = require('./index');
const assert = require('assert');

const test = (desc, fn) => {
  console.log('-->', desc);
  try {
    fn();
    console.log('Completed');
  } catch (err) {
    console.log('Error:', err.message)
  }
};

// testing forEach function
test('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  })

  assert.strictEqual(sum, 6,
    'Expected summing array to be equal to 6');
})


// testing map function
test('The map function', () => {
  const result = map([1, 2, 3], value => {
    return value * 2;
  })

  assert.deepStrictEqual(result, [2, 4, 6],)
})