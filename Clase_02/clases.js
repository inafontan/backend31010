class Auto {
    constructor(marca, modelo, color, puertas, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.puertas = puertas;
        this.patente = patente;
    }
}

let auto1 = new Auto("Ford", "Fiesta", " Azul", 4, "ABC123");
let auto2 = new Auto("Renault", "Clio", " VIoleta", 4, "ABC124");

console.log(auto1);
console.log(auto2);
