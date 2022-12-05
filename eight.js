let palabra = ''
let palabraDos = '';
for (let  i = 1; i <= palabra.length; i++){
    palabraDos += palabra[palabra.length - i]
}

if (palabra === palabraDos && palabra !== ''){
    console.log('Es una palabra palíndromo')
}
else{
    console.log('Palabra normal')
}