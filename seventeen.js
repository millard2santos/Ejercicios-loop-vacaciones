let string = 'Esto es una Prueba de lo que se puede llegar a hacer con JavaScript';
let palabra = '';
if (typeof string === typeof ' ') {
    for (i = 0; i < string.length; i++) {
        if (i % 2 !== 0){
            palabra += string[i].toUpperCase()
        }else{
            palabra += string[i].toLowerCase()
        }
    
    }
}else{
    console.log('No es una palabra')
}

console.log(palabra)