
//PRACTICA CON && - AND

/*
let Edad_Del_Usuario = 10

if (Edad_Del_Usuario <0){
    console.log ("ingrese un valor exacto")
}else if (Edad_Del_Usuario <=10){
    console.log ("puedes estar en la calle hasta las 7:30")
}else if (Edad_Del_Usuario >=11 && Edad_Del_Usuario <=16){
    console.log ("puedes estar en la calle hasta las 12:00")
}else{
    console.log ("hasta la hora que tu quieras")
}
*/

//PRACTICA CON || - O : para obtener un true, todas las condiciones deben ser true

/*
const Mi_Talla_1 = "XS".toLowerCase()
const Mi_Talla_2 = "S".toLowerCase()
const Mi_Talla_3 = "M".toLowerCase()
const Mi_Talla_4 = "L".toLowerCase()
const Mi_Talla_5 = "XL".toLowerCase()

let Tipo_De_Ropa = "Xl".toLowerCase()

if (Tipo_De_Ropa === Mi_Talla_1 || Tipo_De_Ropa === Mi_Talla_2){
    console.log (Tipo_De_Ropa === Mi_Talla_1 ? "es una talla muy pequeña" : "es una talla pequeña")
}else if (Tipo_De_Ropa === Mi_Talla_3 ){
    console.log ("es una talla mas mediana")
}else if (Tipo_De_Ropa === Mi_Talla_4 || Tipo_De_Ropa === Mi_Talla_5){
    console.log (Tipo_De_Ropa === Mi_Talla_4 ? "es una talla grande" : "es una talla mas grande")
}else{
    console.log("ingresa una talla existente")
}
*/

//PRACTICA CON ! - NOT : niega la salida de una condicion, si es true, lo vuelve false y viceversa

/*
let Es_Usuario_Registrado = ""

if (!Es_Usuario_Registrado){
    console.log ("no estas registrado")
}else{
    console.log ("entraste con exito")
}
*/

// PRACTICAS CON EL TYPEOF

/*
let Edad_Del_Usuario = 12
let Nombre_Del_Usuario = "juan david"
let Es_Mayor_De_Edad = false
let Variable_Nula = null
let Indefinido = undefined 
let Simbolo_Unico = Symbol
let Numero_grande = 2n

console.log ("-----------------------------------------------")
console.log (Edad_Del_Usuario, typeof Edad_Del_Usuario)
console.log (Nombre_Del_Usuario, typeof Nombre_Del_Usuario)
console.log (Es_Mayor_De_Edad, typeof Es_Mayor_De_Edad)
console.log (Variable_Nula,typeof Variable_Nula)
console.log (Indefinido, typeof Indefinido)
console.log (Simbolo_Unico, typeof Simbolo_Unico)
console.log (Numero_grande, typeof Numero_grande)
*/

//CUALES SON LOS PRIMITIVOS

/*
NUMBER:son para datos de tipo numericos
STRING:son datos de tipo texto que se diferencias por sus comillas y que pueden ser estas; => '',"",``
BOOLEAN: son tipos de datos para saber si algo es verdadero o falso
NULL: es un tipo de datos vacios y si aparece object no esque lo sea si no que hubo un erros en la organizadora de java script que se conoce como error faltal 
UNDEFINED: es un tipo de dato indefinido no se sabe cual es su resulatado fianl
*/

//practicas con el while y el - do while
