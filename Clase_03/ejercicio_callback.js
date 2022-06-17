function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function modulo(a, b) {
    return a % b;
}

function operacion(num1, num2) {
    console.log(suma(num1, num2));
    console.log(multiplicar(num1, num2));
    console.log(resta(num1, num2));
    console.log(modulo(num1, num2));
}

console.log(operacion(4, 5));
