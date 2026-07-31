export const PI = 3.1415;

export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function calculate(a, b, operation) {
    return operation(a, b);
}