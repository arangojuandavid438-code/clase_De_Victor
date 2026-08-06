/*--------------------------------*/
/*EJERCICIOS DE CICLOS FOR CLASICO*/
/*--------------------------------*/


const Nombres = ['Miguel','Juan','Nataly','Jhon','jose']

for (let i = 0; i < Nombres.length; i++){
    console.log(Nombres[i])
}

console.log("----------------------------------------------------")



/*-----------------------------*/
/*EJERCICIOS DE CICLOS FOR - OF*/
/*-----------------------------*/


let Frase_Del_Las_Personas = "Los hombres no mienten"

for (frase of Frase_Del_Las_Personas){
    console.log(frase)
}


/*--------------------------------------*/
/*EJERCICIOS DE CICLOS for - OF - ARRAYS*/
/*--------------------------------------*/

console.log("------------------------------------------------------")

const Frutas_De_Compras = ["Mango","Pera","Manza verde","Papaya","Uva","Banano"]

for (frutas of Frutas_De_Compras){
    console.log("Te gusta estas frutas:",frutas)
}

console.log("------------------------------------------------------")

/*---------------------------------------*/
/*EJERCICIOS DE CICLOS FOR - IN - OBJECTO*/
/*---------------------------------------*/

const Tienda_De_Bebidas_Energeticas ={
    producto:"Monsters",
    precio:9000,
    categoria:"energetica"
}

for (energia in Tienda_De_Bebidas_Energeticas){
    console.log(energia, ":"+ Tienda_De_Bebidas_Energeticas[energia])
}

/*----------------------*/
/*COMPARACION DE CICLOS */
/*----------------------*/

console.log("------------------------------------------------------")

const Lista_De_Numero = [1,2,3,4,5,6,7,8,9,10]

for (let numero = 0; numero <Lista_De_Numero.length; numero++ ){
    console.log(Lista_De_Numero[numero])
}

console.log("-----------comparacion con el of---------------")

const Listas_De_Los_Numeros = [1,2,3,4,5,6,7,8,9,10]

for (let numeral of Listas_De_Los_Numeros){
    console.log(numeral)
}

//me parece mas facil el of ya q es mas practico y mas rapido 