var nombres = ["Antonio", "Manuel", "Francisco", "David", "Javier", "José", "Carlos", "Miguel", "Juan", "Pedro", 
"Alejandro", "Ángel", "Daniel", "Fernando", "Luis", "Alberto", "Diego", "Rafael", "Pablo", "Sergio", 
"Adrián", "Enrique", "Rubén", "Jorge", "Víctor", "Ricardo", "Eduardo", "Óscar", "Mario", "Andrés"];
var apellidos = ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez", "Muñoz", "Romero", "Alonso", "Navarro"];
var apellidos2 = ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez", "Muñoz", "Romero", "Alonso", "Navarro"];
// Función para generar un nombre y apellido aleatorio
function generarNombreCompleto() {
    var nombresRestantes = nombres.slice();

    // Seleccionar el primer nombre aleatoriamente
    var primerNombreIndex = Math.floor(Math.random() * nombresRestantes.length);
    var primerNombre = nombresRestantes[primerNombreIndex];

    // Quitar el primer nombre de la lista
    nombresRestantes.splice(primerNombreIndex, 1);

    // Seleccionar el segundo nombre aleatoriamente
    var segundoNombreIndex = Math.floor(Math.random() * nombresRestantes.length);
    var segundoNombre = nombresRestantes[segundoNombreIndex]

    document.getElementById('name').setAttribute('value', primerNombre);
    var apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    document.getElementById('surname1').setAttribute('value', apellido);
    var apellido2 = apellidos2[Math.floor(Math.random() * apellidos2.length)];
    document.getElementById('surname2').setAttribute('value', apellido2);
    var nombre_completo = primerNombre + " " + apellido + " " + apellido2;
    document.getElementById('complete_name').setAttribute('value', nombre_completo);
    var nombre_compuesto = primerNombre + " " + segundoNombre
    document.getElementById('name2').setAttribute('value', nombre_compuesto);
}