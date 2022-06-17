var fs = require('fs');

// CREAR ARCHIVO

fs.appendFileSync('primerTexto.txt', 'Hola!!!', function (err) {
    if (err) 
        throw err;
    

    console.log('Archivo creado');
});

// Escribir un archivo con contenido

fs.open('./segundoTexto.txt', 'w', function (err, file) {
    if (err) 
        throw err;
    

    console.log('Guardado');
});

// CREAR ARCHIVO USANDO WRITE

fs.writeFile('tercerTexto.txt', 'Hola Contenido', function (err) {
    if (err) 
        throw err;
    

    console.log('Archivo creado');
})

// MODIFICAR UN ARCHIVO CON APPEND

fs.appendFileSync('./primerTexto.txt', 'Son las 20.50', function (err) {
    if (err) 
        throw err;
    

    console.log('Archivo modificado');
});
