// ⚠️ No cambiar nada en este archivo

const EnhancedArray = require('../Desafios/JSII');

test('returns the last element of non-empty array', () => {
  const nums = [1, 2, 3];
  expect(nums.last()).toBe(3);
});

test('returns -1 for an empty array', () => {
  const emptyArr = [];
  expect(emptyArr.last()).toBe(-1);
});
