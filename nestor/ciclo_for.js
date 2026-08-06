/*------------------------------------------------*/
/*JUAN   DAVID   ESTRADA   ARANGO   -   ESTUDIANTE*/
/* ESTUDIANTE DEL SENA   -   ANALISIS DE SOFTWARE */
/* +57 3170988838  - arangojuandavid438@gmail.com */
/*------------------------------------------------*/

/*---------------------------------------*/
/*CICLO FOR CALSICO - ITERACION DE LISTA */
/*---------------------------------------*/

//ITERAR --> RECORRER
//ITERAR --> DE FORMA SECUENCIAL.

/*
ESTRUCTURA: 
FOR (INICIALIZACION; CONDICION; INCREMENTO){
    //CODIGO A EJECUTAR 
}
*/

//EJEMPLO

let Lista_De_Computadores = ["ACER","LENOVO","ASUS","HP","MAC"]
// la "i" es una declaracion en el for y es universal

for (let i = 0; i < Lista_De_Computadores.length; i++ ){
    console.log (Lista_De_Computadores[i])
}

/*--------------*/
/*CICLO FOR - OF*/
/*--------------*/

//for of --> sirve para cosas ITERABLES 
//for of --> sirven para ARRAY y STRINg

/*
ESTRUCTURA 

for (VARIABLE of ARRAY/STRING)
    //CODIGO A EJECUTAR 
*/

//si necesitas que tenga en una posicion exacta es mejor que utilices el for clasico 
//pero si quieres q apareca todos utiliza el for of 
 
console.log("--------------------------------------------------------------")
let Listas_De_Colores = ["rojo","verde","azul","naranja","rosita","negro"]

for (color of Listas_De_Colores){
    console.log(color)
}

/*---------------*/
/*CICLO FOR - IN */
/*---------------*/

// FOR IN --> sirve para cosas ENUMERABLES 
// FOR IN --> OBJECT  

/*
ESTRUCTURA

for (VARIABLE in OBJECT){
    //CODIGO A EJECUTAR 
}
*/

console.log("-----------------------------------------------")
const Tienda_De_Celulares = {
    //propiedad (CLAVE): VALOR
    sanmsug: 10,
    xiaomi: 100,
    oppo: 20,
    iphone: 2
}

for(celular in Tienda_De_Celulares){
    console.log(celular,":"+ Tienda_De_Celulares[celular])
}