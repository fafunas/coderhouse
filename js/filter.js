const productos = [
    {
        "titulo": "Pantalon Rojo",
        "cantidad": 2,
        "precio": 300
    },
    {
        "titulo": "Remera",
        "cantidad": 3,
        "precio": 299
    }
]

const productosEnStock = productos.filter(elem => elem.cantidad >0)

console.log ("El total del carrito es:" , productosEnStock)