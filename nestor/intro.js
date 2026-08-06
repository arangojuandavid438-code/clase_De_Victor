/*------------------------------------------------*/
/*JUAN   DAVID   ESTRADA   ARANGO   -   ESTUDIANTE*/
/* ESTUDIANTE DEL SENA   -   ANALISIS DE SOFTWARE */
/* +57 3170988838  - arangojuandavid438@gmail.com */
/*------------------------------------------------*/

//una sola linea de codigo//

/* para 
varias
lineas
de 
codigo */

//como imprimir en consola o en pantalla - js//
console.log('hoy pelaron a jhon')

/*----------------------------------*/
/* VARIABLES Y CHIMBAS DE PRACTICAS */
/*----------------------------------*/

//SE DIVIDE EN DOS FASES// 
/* DECLARACION-ASIGNACION*/
let cofreDeAndy = 'rex'

//NO ESTA PERMITIDO//
let c ='rex'
let cda ='rex' 
let cDeAndy = 'rex'

//SI ESTA PERMITIDO//
//una variale bien declara es aquella que al leer el nombre se identifica
let Primer_Juguete_De_Andy = 'woody'
let Url_Perfil_Del_Pepe_El_Gallo = 'https://www.google.com/search?client=opera-gx&q=node+dowload+js&sourceid=opera&ie=UTF-8&oe=UTF-8'
let Id_Del_Usuario = '1234567'

//PARA QUE SIRVE let y const

//let = cosas que pueden cambiar durante el tiempo. 
let Contador_Del_Metro = 0
//const = cosas que NO se pueden cambiar durante el tiempo. 
const Volts_Desfibrilador = 240

/*-----------------------------------------*/
/* TIPOS DE DATOS - PRIMITIVOS Y COMPLEJOS */
/*-----------------------------------------*/

/* 
PRIMITIVOS:
number
string
boolean
null 
underfined
symbol
bigint

COMPLEJOS:
Array
object
function

*/

//primirivos
let Edad_Del_Usuario = 17 //number
let Nombre_De_Usuario = 'juan david' //string
let Es_Mayor_De_Edad = false //boolean 
let Dirrecion_Del_Usuario = null //null
let Indefinido = undefined // undefined
let Simbolo_Unico = Symbol('unico') //symbol
let Nuemo_Grande = 2n //bigint

console.log('------------------------------------------------')
console.log(Edad_Del_Usuario, typeof Edad_Del_Usuario)
console.log(Nombre_De_Usuario, typeof Nombre_De_Usuario)
console.log(Es_Mayor_De_Edad, typeof Es_Mayor_De_Edad)
console.log(Dirrecion_Del_Usuario, typeof Dirrecion_Del_Usuario)
console.log(Indefinido, typeof Indefinido)
console.log(Simbolo_Unico, typeof Simbolo_Unico)
console.log(Nuemo_Grande, typeof Nuemo_Grande)

// COMPLEJOS

//Array
let Lista_De_Mi_Compras = ['manzana', 'banano', 'mango','fresa','sandia'] //Array (es una lista de elementos ordenados)
//Array => Tamaño
//Array => Posiciones 

//OBJECT
//un objeto es una coleccion de propiedades o calves y valores puede tener metodos

const Super_Profe_Nestor = {  //OBJECT
        //PROPIEDAD (O CLAVE) : VALOR
        nombre: 'Nestor',
        fuerza: -50,
        fortaleza: 'Enseñar con amor',
        nivel_Del_Perreo: 'Extremo',
} 

//function 

const saludar = function (){} //FUNCTION 

console.log('------------------------------------------------')
console.log(Lista_De_Mi_Compras, typeof Lista_De_Mi_Compras)
console.log(Super_Profe_Nestor, typeof Super_Profe_Nestor)
console.log(saludar, typeof saludar)

//MANIPULACION DE STRINGS
const string_Uno = 'hola'
const string_Dos = "El viernes"
const string_tres = `para nebula`
// CONCATENACION
console.log(string_Uno +'  '+string_Dos +'  '+string_tres)
console.log(string_Uno,string_Dos,string_tres)
console.log(`${string_Uno} ${string_Dos} ${string_tres} full perro obsceno a poca luz y dandole duro a la pared`)

let frase = 'si hay sol, hay playa, si hay playa, hay alcohol, hay guayabo'
console.log(frase.length)//length es una propiedad que nos dice la cantidad de caracteres que tiene un string, icluyendo espacion y simbolos
console.log('MAYUSCULAS:', frase.toUpperCase()) //MAYUSCULAS
console.log('minusculas:', frase.toLowerCase()) //minusculas
// extraer un segmento en string
console.log('SEGMENTO:', frase.substring(53, 87 )) //extrae los primero caracteres