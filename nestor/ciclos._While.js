/*------------------------------------------------*/
/*JUAN   DAVID   ESTRADA   ARANGO   -   ESTUDIANTE*/
/* ESTUDIANTE DEL SENA   -   ANALISIS DE SOFTWARE */
/* +57 3170988838  - arangojuandavid438@gmail.com */
/*------------------------------------------------*/

/*------------------*/
/*CICLO WHILE - LOOP*/
/*------------------*/

/*
ESTRUCTURA WHILE

while (CONDICION){
    //CODIGO A EJECUTAR
    //IMPLEMENTO
}
*/
//EJEMPLO

/*
let contador = 0

while (contador <10){
    console.log("VALOR ACTUAL:", contador)
    contador ++
}

console.log ("-------------------------------")
//decremento
let Numero_De_Drecrementado = 5
    console.log("ANTES:",Numero_De_Drecrementado--)//5
    console.log("DESPUES:",Numero_De_Drecrementado)//4

    console.log("--------------------------------------")
//LIMITE DE SEGURIDAD
let Limite_De_Seguridad = 3

while(Limite_De_Seguridad-- >0){
    console.log("VALOR ACTUAL:", Limite_De_Seguridad)
}

console.log("----------------------------------------------------")
let Limite_De_Seguridad_Dos = 10
let Contador_Dos = 0

while (Contador_Dos < 10 && Limite_De_Seguridad_Dos-- >0 ){
    console.log("VALOR ACTUAL:", Contador_Dos)
    //Contador_Dos++
}

console.log("----------------------------------------------------------")

/*----------------*/
/*CICLO DO - WHILE*/
/*----------------*/

//diferencia con el do - while hace primero y despues evalua la condicion 
//y el while hace primero la condicion y despues lo hace

/*
ESTRUCTURA

do{
    //CODIGO A EJECUTAR
    //CONTADOR
}while(CONDICION)
*/

/*
let Contador_Tres = 100000000000000
do{
    console.log ("VALOR DE MAÑANA:", Contador_Tres)
    Contador_Tres++
}while (Contador_Tres <10)
*/

//EJERCICIO - Suponer una variable Edad_Del_Usuario = 20 
//Imprimir un mensaje en consola, solo si la persona es menor de edad

//while

//do while

let Edad_Del_Usuario =20


while(Edad_Del_Usuario <18){
    console.log("while eres menor" )
    Edad_Del_Usuario++
}

console.log("------------------")

do{
    console.log("do while eres menor de edad" )
    
}while(Edad_Del_Usuario <17)