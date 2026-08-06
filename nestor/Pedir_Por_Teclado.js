/*------------------------------------------------*/
/*JUAN   DAVID   ESTRADA   ARANGO   -   ESTUDIANTE*/
/* ESTUDIANTE DEL SENA   -   ANALISIS DE SOFTWARE */
/* +57 3170988838  - arangojuandavid438@gmail.com */
/*------------------------------------------------*/


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*ESTRUCTURA 

rl.question("LA PREGUNTA PARA EL USUARIO?",(VARIBALE_USUARIO) =>{
    //CODIGO A EJECUTAR
    //rl.close()
})
*/

console.log("----------------------------------------------------------------------------")

/*
rl.question("ingrese su nombre: ",(Nombre_Del_Usuario) => {
    console.log(`hola ${Nombre_Del_Usuario} estas muy lindx`)
    rl.close()
})
*/

console.log("-----------------------------------------------------------------------------")

/*
rl.question("ingresa tu edad: ", (Ingresa_Tu_edad) => {
    console.log(`hola tienes ${Ingresa_Tu_edad} estos años`)
    rl.close()

})
*/

console.log("------------------------------------------------------------------------------")

/*
rl.question("ingresa tu edad: ",(Edad_De_Tu_Cumple) => {
    Edad_De_Tu_Cumple = parseInt(Edad_De_Tu_Cumple) +1
    console.log(`hola feliz cumple tienes ${Edad_De_Tu_Cumple}`)
    rl.close()
})
*/

console.log("-------------------------------------------------------------------------------")

/*
rl.question("ingrese su edad: ", (Edad_Del_Usuario) => {
    let Edad_Numero = parseInt(Edad_Del_Usuario)
    console.log(`hola tienes ${Edad_Numero +1} feliz cumple`)
    console.log(Edad_Numero, typeof Edad_Numero)
    rl.close
})
*/
console.log("-------------------------------------------------------------------------------")


/*
rl.question("ingrese una edad: ", (Edad_Del_Usurio) => {
    if (Edad_Del_Usurio <= 0){
        console.log("ingresa un valor correcto")
    }else if (Edad_Del_Usurio <=14){
        console.log("eres un niño")
    }else if (Edad_Del_Usurio >14 &&Edad_Del_Usurio <=18){
        console.log("eres adolecente")
    }else if (Edad_Del_Usurio >18 &&Edad_Del_Usurio <=60){
        console.log("eres un adulto")
    }else{
        console.log("eres un adulto mayor")
    }
    rl.close()
})
*/
rl.question("ingrese su nombre: ",(Nombre_Del_Usuario) => {
rl.question("ingrese una edad: ", (Edad_Del_Usurio) => {
    console.log(`tu nombre es ${Nombre_Del_Usuario} y tu edad es ${Edad_Del_Usurio}`)
    if (Edad_Del_Usurio <= 0){
        console.log("ingresa un valor correcto")
    }else if (Edad_Del_Usurio <=14){
        console.log("eres un niño")
    }else if (Edad_Del_Usurio >14 &&Edad_Del_Usurio <=18){
        console.log("eres adolecente")
    }else if (Edad_Del_Usurio >18 &&Edad_Del_Usurio <=60){
        console.log("eres un adulto")
    }else{
        console.log("eres un adulto mayor")
    }
    rl.close()
})})

