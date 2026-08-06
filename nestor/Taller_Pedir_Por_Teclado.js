/*------------------------------------------------*/
/*JUAN   DAVID   ESTRADA   ARANGO   -   ESTUDIANTE*/
/* ESTUDIANTE DEL SENA   -   ANALISIS DE SOFTWARE */
/* +57 3170988838  - arangojuandavid438@gmail.com */
/*------------------------------------------------*/

/*------------------------------------------------*/
/*              TALLER POR TECLADO                */
/*------------------------------------------------*/


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const contraseña = "1234"
let intentos = 0
function Validar_Usuario(){
 rl.question ("reconociendo al usuario: ", (Contraseña_Del_Usuario) => {
        if (Contraseña_Del_Usuario === contraseña){
        console.log("acceso permitido")
        menu()
            }else{
                intentos++
            if (intentos <3){
                console.log("clave incorrecta intente de nuevo")
                Validar_Usuario()
            }else{
            console.log("contraseña incorrecta")
            Validar_Usuario()   
            rl.close()
        }
    }      
    })
}
Validar_Usuario(0)

function menu(){
    console.log("===================================================")
    console.log("MENU PRINCIPAL")
    console.log("1.Tabla de multiplicar")
    console.log("2.Verificar si un numero es par o impar")
    console.log("3.salir")
    console.log("===================================================")


    rl.question("seleccione una opcion del menu: ", (Opciones) => {
        switch(Opciones){
            case "1":
                console.log("tabla de multiplicar")
                Tabla_De_Multiplicar()
                break;
            case "2":
                console.log("verificar si es un numero par o impar")
                Numero_Par_O_Impar()
                break;
            case "3":
                console.log("salir")
                rl.close()
                break;
            default:
                console.log("seleccione una opcion correcta")
                console.log("\n")
                menu()
        }   
    }) 
}

function Tabla_De_Multiplicar(){
    console.log("bienvenido a la tabla:")
        rl.question("Ingresa un valor para mostrar :", (num) => {
            for (i = 1; i <=10; i++){
                console.log(`${num} x ${i} = ${num * i}`)   
            }
                menu()
    })
}

const Numero_Impares = 0
const Numero_Pares = 1
function Numero_Par_O_Impar(){
    console.log("hola escribe tu numero par o impar")   
    rl.question("Ingresa un numero: ", (num) => {
        if(num %2 === 0){
            console.log(`el numero ${num} par`)
        }else
            console.log(`el numero ${num} impar`)
            menu()
    })

}


Validar_Usuario()