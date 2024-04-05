function splitIban() {
    var input = document.getElementById('inputString').value;
    if (input === '') { // Si el input está vacío
        input = document.getElementById('ibanInput').value; // Recoger el valor del campo con ID ibanInput
    }
    var boxLengths = [4, 4, 4, 2, 10];
    
    // Obtener referencias a los elementos de caja en el DOM
    var boxes = [];
    for (var i = 0; i < boxLengths.length; i++) {
        boxes.push(document.getElementById('box_' + i));
    }

    var currentPos = 0;
    for (var i = 0; i < boxes.length; i++) {
        var size = boxLengths[i];
        var chunk = input.substring(currentPos, currentPos + size);
        boxes[i].value = chunk; // Asignar el fragmento al valor del elemento de caja correspondiente
        currentPos += size;
    }
}


function generarIBAN() {
    // Código de país para España
    var countryCode = 'ES';

    // Generar dígitos de control aleatorios
    var controlDigits = Math.floor(Math.random() * 100);

    // Rellenar con ceros a la izquierda si es necesario
    controlDigits = controlDigits.toString().padStart(2, '0');

    // Generar códigos de entidad bancaria y oficina aleatorios
    var bankCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    var officeCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // Generar números de cuenta aleatorios
    var accountNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');

    // Calcular dígitos de control del IBAN
    var controlNumber = 98 - (parseInt(bankCode + officeCode + accountNumber + '142800') % 97);

    // Rellenar con ceros a la izquierda si es necesario
    controlNumber = controlNumber.toString().padStart(2, '0');

    // Construir el IBAN
    var IBAN = countryCode + controlDigits + bankCode + officeCode + controlNumber + accountNumber;

    // Mostrar el IBAN en el input
    document.getElementById('ibanInput').setAttribute('value', IBAN);
}