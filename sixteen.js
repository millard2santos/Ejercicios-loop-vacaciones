let string = 'Millard';
let letra = 'b';

if (string.includes(letra)) {
    console.log(`${string} contiene la letra ${letra}`)
    for (i = 0; i < string.indexOf(letra); i++){
        console.log(string[i])
    }
}else{
    console.log(`No incluye la letra ${letra}`)
}

