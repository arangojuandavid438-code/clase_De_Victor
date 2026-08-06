//condicionales en js

/*---------------------*/
/*ESTRUCTURA DE CONTROL*/
/*---------------------*/

/*-------------*/
/*CONDICIONALES*/
/*-------------*/

/*-------------------*/
/*IF - ELSE IF - ELSE*/
/*-------------------*/

/*
ESTRUCTURA

if(CONDICION){
     //CODIGO A EJECUTAR     
}else{
     //CODIGO A EJECUTAR   
}
*/

/*
let Pon_Tu_Edad = 22

if ( Pon_Tu_Edad >=18){
     console.log ("es mayor de edad");
     
}else if (Pon_Tu_Edad <0){
      console.log ("ingrese una edad valida");

}else{ (Pon_Tu_Edad <18)
      console.log ("no puedes ingresar");

} 
*/

/* 
const Edad_De_La_Persona_En_La_Discoteca = 21
const Genero_De_La_Persona = "HoMbre".toLowerCase()


if (Edad_De_La_Persona_En_La_Discoteca <0){
     console.log ("ingrese una edad valida!");
}else if (Edad_De_La_Persona_En_La_Discoteca>=18 && Genero_De_La_Persona ==="hombre"){
     console.log ("pagas todo y 50k de cover.")
}else if (Edad_De_La_Persona_En_La_Discoteca >=18 && Genero_De_La_Persona ==="damicela"){
     console.log ("no tienes que pagar + un granizado.")
}else{
     console.log("Eres un menor. Ve a tu casa a ver poco-yo")
}
*/


/*-------------*/
/*SWITCH - CASE*/
/*-------------*/

/*
switch (variable){

     case VALOR1: 
          //CODIGO A EJECUTAR
          //break;
     
     case VALOR2:
          //CODIGO A EJECUTAR
          //break; 

     case VALOR3:
          //CODIGO A EJECUTAR
          //break;

     case VALOR4:
          //CODIGO A EJECUTAR
          //break;
     
     default:
          //CODIGO A EJECUTAR
          //break;
          
}
*/

//usted utiliza un switch cuando tiene que comparar una cosa con muchas cosas de resto si n vas a comparar utiliza condicional 

/*
const Canasta_De_Frutas = "ManGO".toLowerCase()
switch(Canasta_De_Frutas){
     case "manzana":
          console.log ("La manzana cuesta $100 el kg")
          break;

     case "banano":
          console.log ("El banano cuesta $200 el kg")
          break;
     
     case "mango":
          console.log ("El mango cuesta $300 el kg") 
          break;
     
     case "piña":
          console.log ("la piña cuesta $400 el kg")
          break;
          
     default:
          console.log (`No hay ${Canasta_De_Frutas} dispobible en estos momentos`)

}
*/