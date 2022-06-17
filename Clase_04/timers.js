// Timeout
function miSaludo() {
    console.log("Buenas comisión 31010");
}

const miTImepo = setTimeout(miSaludo, 3000);

// Set Interval
setInterval(function () {
    console.log("Este es el clima!!!")
}, 10000);
setInterval(miSaludo, 10000);
