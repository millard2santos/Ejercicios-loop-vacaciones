let angulo1 = 91;
let angulo2 = 36;
let angulo3 = 53;

if (angulo1 + angulo2 + angulo3 === 180 && (angulo1 > 0 && angulo2 > 0 && angulo3 > 0)){
    if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90 ){
        console.log("Es un triangulo recto")
    } 
    else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90 ){
        console.log("Es un tringulo acutangulo")
    }
    else{
        console.log("Es un triangulo obtusangulo")
    }

}
else{
    console.log("No es un triangulo valido")
}