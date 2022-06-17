// ASYNC - FUNCION ASINCRONA

async function miFuncion() {
    return "Hola";
}

// ES LO MISMO QUE ESTO

function miFuncion2() {
    return Promise.resolve("Hola");
}

// COMO SE USARIA EN UNA PROMESA

miFuncion2().then(function (value) {
    return "Exito"
}, function (error) {
    return "Error"
});

// Como usarlo con async
// let respuesta = await miFuncion();

console.log(miFuncion2);
