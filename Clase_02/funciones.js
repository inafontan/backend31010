// Funciones auto-invocadas o IIFEs
/*
(function(){
    console.log("Hola la 31010!!!!");
})();*/

// var nombre = "Juan";

/*(function ejemplo(){
    let nombre = "Pilar";
    console.log(nombre);
})();*/

// ejemplo();
// console.log(ejemplo());

/*function existe(){
    let probandoLET = "global" 
    console.log(probandoLET) 
}
existe() */

const nombre = "Diego";

function nombreTutor() {
    console.log("Nuestro tutor se llama: " + nombre);
    return;
}

nombreTutor();
console.log(nombre);
