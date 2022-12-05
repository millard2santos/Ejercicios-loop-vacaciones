let palabra = 'virtud'.toLowerCase();


if (typeof palabra === "string") {

    if (palabra[palabra.length - 1] === 'a' ||
        palabra[palabra.length - 1] === 'e' ||
        palabra[palabra.length - 1] === 'i' ||
        palabra[palabra.length - 1] === 'o' ||
        palabra[palabra.length - 1] === 'u') {
        console.log(`El plural de la palabra ${palabra} es ${palabra + 's'}`)
    }
    else if (palabra === 'sed' ||
        palabra === 'caos' ||
        palabra === 'salud') {
        console.log('Esta palabra no tiene forma plural')
    }
    else if (palabra === 'crisis' ||
        palabra === 'tesis' ||
        palabra === 'torax' ||
        palabra[palabra.length - 1] === 's') {
        console.log(`El plural coincide con el singular`)
    }
    else if ((palabra !== 'crisis' ||
        palabra !== 'tesis' ||
        palabra !== 'torax') &&
        palabra[palabra.length - 1] === 's') {
        console.log(`La palabra ya esta en plural`)
    }
    else {
        console.log(`El plural de la palabra ${palabra} es ${palabra + 'es'}`)
    }
}
else {
    console.log('Input invalido: solo se aceptan strings')
}

