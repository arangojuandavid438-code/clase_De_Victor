/*------------------------*/
/*CICLOS WHILE - CONTADOR */
/*------------------------*/

//contador de 1 al 10

let contador = 0

while (contador <=10){
    console.log("VALOR ACTUAL:", contador)
    contador ++
}

console.log("----------------------------------------------------------------------------")

//CONTADOR DECENDENTE DEL 10 AL 1 (DO...WHILE)

let Contador_Decendiente = 10
do{
    console.log ("VALOR DEL DECENDENTE:", Contador_Decendiente)
    Contador_Decendiente--
}while (Contador_Decendiente >0)

console.log("---------------------------------------------------------------------------")

//SUMA DE LOS PRIMEROS 100 NUMEROS NATURALES

let Suma = 1
let suma = 0

while(Suma <=100){
    suma += Suma
    Suma++
}
console.log("la suma es:", +suma)

console.log("--------------------------------------------------------------------------------")

//Suma de pares entre 1 y 50 (while)

let SUMA = 0
let Suma_De_Pares = 1

while (Suma_De_Pares <=50){
    if (Suma_De_Pares % 2 === 0){
     SUMA  +=  Suma_De_Pares 
    }
    Suma_De_Pares++
}
console.log("la suma de estos pares son:", SUMA)

console.log("-----------------------------------------------------------------------------------")

//Bucle con seguridad

let contador_1 = 0
while (true) {
  console.log("Repetición número: " + (contador_1 + 1))
  contador_1++
  if (contador_1 === 30) {
    break 
  }
}

//Comparar comportamiento
let x = 11;
while (x < 10) {
  console.log("Mensaje con while");
}

// Do while
do {
  console.log("Mensaje con do...while");
} while (x < 10);

//do while : y en el do while se imprime primero ya que el numero es mayor que 10; primero imprime y despues recisa la condicion 
//while : y el while primero revisa y despues mira si la condicion es correcta para impromir 