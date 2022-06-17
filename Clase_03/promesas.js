function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject("No se puede dividir por cero amigue :| ")
        } else {
            resolve(dividendo / divisor);
        }
    })
}


dividir(20, 0).then(resultado => {
    console.log("resultado: " + resultado)
}).catch(error => {
    console.log("error: " + error)
})
