
//clases en javascript

class Producto {
    
    //constructor de la clase
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    //metodo dentro de la clase
    formatearProducto(){
        return `el nombre del producto es ${this.nombre} 
        con un precio de ${this.precio}`;
    }

    mostrarPrecio(){
        return `el precio del producto es ${this.precio}`
    }

}

const producto1 = new Producto('monitor curvo', 2820);
const producto2 = new Producto('teclado mecanico', 823);

console.log(producto1);
console.log(producto2.mostrarPrecio());

// => Herencia de Clases

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    mostrarISBN(){
        return `el isbn del libro es ${this.isbn}`
    }
}

const libro = new Libro('Python', 500, '569874');
console.log(libro.mostrarISBN());