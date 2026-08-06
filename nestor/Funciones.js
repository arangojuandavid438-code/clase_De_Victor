/*----------------------------------------*/
/*              FUNCIONES                 */
/*----------------------------------------*/

//reutilizar o reciclar bloques de codigo

/*
function nombre_funcion(parametros){
    //codigo a ejecutar
}
*/
    
//sin parametros iniciales
function saludar_usuario(){
    console.log('hola, buenas tardes estrellitas💫')
}
saludar_usuario()
saludar_usuario()
saludar_usuario()
saludar_usuario()
saludar_usuario()
saludar_usuario()
saludar_usuario()

console.log("--------------------------------------------------------------------")

/*saludar_usuario()
saludar_usuario()
saludar_usuario()*/

// si lo espameo impime de nuevo el console.log

function Saludo_Personalizado(Nombre_Del_Usuario){
    console.log(`hola buenas tardes ${Nombre_Del_Usuario} estas muy lindx😁`)
}

Saludo_Personalizado(`nataly`)
Saludo_Personalizado(`nataly`)
Saludo_Personalizado(`nataly`)

console.log("---------------------------------------------------------------------")

//FUNCIONES QUE SUME 2 NUMEROS
function Suma_De_Dos_Numeros(Numero_Uno, Numero_Dos){
    let resultado = Numero_Uno + Numero_Dos
    console.log("resulltado",resultado)
}
Suma_De_Dos_Numeros(5,25)
Suma_De_Dos_Numeros(100, 10)
// return Numero_Uno + Numeor_Dos

console.log("--------------------------------------------------------------------")

//FUNCION PARA CALCULAR PORCENTAJE DE DESCUENTO

function Calcular_Descuento(Precio_Real, Descuento){
    const Precio_Con_El_Descuento = Precio_Real * (Descuento)/100
    const PrecioConDescuento = Precio_Real - Descuento
    
    return Precio_Real - ((Precio_Real *Descuento))/100
}

console.log("PRECIO FINAL:", Calcular_Descuento(100,70))
console.log("PRECIO FINAL:", Calcular_Descuento(79000000, 74.7))
console.log("PRECIO FINAL:", Calcular_Descuento(6999000, 81.9))


console.log("------------------------------------------------------------")
const Precio_Original = 1000000
const Porcentaje_Del_Descuento = 10
const Precio_Final = Calcular_Descuento(Precio_Original, Porcentaje_Del_Descuento)
console.log("ORIGINAL:", Precio_Original)
console.log("descuento:", Porcentaje_Del_Descuento,"%")
console.log("PRECIO FINAL:", Precio_Final)

/*------------------------*/
/*FUNCIONES PURA E IMPURAS*/
/*------------------------*/

/*
1. SIDE EFFECT O EFECTO SECUNDARIO 

    a: MODIFICAN CARIABLES GLOBALES
    b: SOLICITUDES HTTP
    c: IMPRIMIREN PANTALLA O EN CONSOLA
    d: MANIPULACION EL DOM
    e: OBTENER LA HORA ACTUAL
    f: ENVIAR CORREOS
    g: GENERAR NUMEROS ALEATORIOS
    h: MANIPULACION BASE DE DATOS
*/

//ESTRUCRA DE UNA FUNCION PURA E IMPURA


function suma(a,b){ //pura
    return a + b
}

function sumar(a,b){ //impura
    console.log(a + b)
}

let total = 0 //variable global

function Suma_Con_Algo(a,b){ //impura
    total += a 
    return b 
}

function Elevar_Al_Cuadrado(x){//pura 
    return x * x
}

function Suma_Diez(y){//pura
    return y + 10
}

console.log("--------------------------------------------------------------------")

const Number_One = 5
const Final_Result = Suma_Diez(Elevar_Al_Cuadrado(Number_One))//pura
console.log(Final_Result)

