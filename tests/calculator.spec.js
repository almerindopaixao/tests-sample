import { test, expect } from "vitest"
import { add, subtract, multiply, divide } from '../src/calculator';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('divides by zero should throw error', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});
