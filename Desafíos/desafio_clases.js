class Usuario {
    constructor(name, lastName, libros, mascotas) {
        this.name = name;
        this.lastName = lastName;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`Hola! Soy ${
            this.name
        } ${
            this.lastName
        }`);
    }

    addmascotas(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }

    addBook(titulo, autor) {
        this.libros.push({titulo: titulo, autor: autor});
    }

    countmascotas() {
        console.log(this.mascotas.length);
    }

    getnombresLibros() {
        const nombresLibros = this.libros.map(book => {
            return book.titulo
        })
        console.log(nombresLibros);
    }
}

const usuario = new Usuario('Ina', 'Fontán', [
    {
        titulo: 'Juego de Tronos',
        autor: 'George R. R. Martin'
    }, {
        titulo: 'El Símbolo Perdido',
        autor: 'Dan Brown'
    }
], ['Gato']);

usuario.getFullName();
usuario.addmascotas('Gato');
usuario.countmascotas();
usuario.addBook('Cazadores de Sombras');
usuario.getnombresLibros();

// OTRO EJEMPLO

class Usuario1 {
    constructor(nombre, apellido, libros, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascota = mascota;
    }

    getFullName() {
        return `Usuario: ${
            this.nombre
        } ${
            this.apellido
        }.`;
    }

    addMascota(mascota,) {
        this.mascota.push({"nombre": mascota});
    }

    getMascota() {
        let nombreMascota = []
        this.mascota.forEach(item => nombreMascota.push(item.nombre));
        return nombreMascota;
    }

    addLibro(libro) {
        this.libros.push({"nombre": libro});
    }

    getLibros() {
        let nombresLibros = []
        this.libros.forEach(item => nombresLibros.push(item.nombre));
        return nombresLibros;
    }
}

let mascota = [{
        "nombre": "Wanchope"
    },];
let libros = [
    {
        "nombre": "El Origen"
    }, {
        "nombre": "Correr o Morir"
    }
]

let usuario1 = new Usuario1("Ina", "Fontán", libros, mascota);
console.log(usuario1.getFullName());

usuario1.addMascota("NN")
console.log(usuario1.getMascota());
usuario1.addLibro("Juego de Tronos")
console.log(usuario1.getLibros());
