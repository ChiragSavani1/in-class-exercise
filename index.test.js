// index.test.js - Jest Unit Test for Calculator

const { add, subtract, multiply, divide } = require('./index');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

// Students must complete these tests:
test('multiplies 3 * 4 to equal 12', () => {
    // Fill this test
});

test('divides 10 / 2 to equal 5', () => {
    // Fill this test
});

test('throws error when dividing by zero', () => {
    // Fill this test
});
