let note = 90;

if (note >= 0 && note <= 59){
    console.log("Suspenso")
}else if (note >= 60 && note <= 79){
    console.log("Aprobado")
}else if (note >= 80 && note <= 89){
    console.log("Notable")
}else if (note >= 90 && note <= 100){
    console.log("Sobresaliente")
}
else{
    console.log("Formato de nota incorrecto")
}