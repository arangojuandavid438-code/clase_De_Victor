import random

#!CONDICIONALES

#!Numero positivo, negativo o cero
"""
ingresa_numero = int(input("hola ingresa un numero:"))
if ingresa_numero <0:
    print("negativo")
elif ingresa_numero >0:
    print("positivo")
else:
    print("es cero:")

#!Descuento en una compra

tienda_Con_Descuento = float(input("ingrese el valor del producto:"))
if tienda_Con_Descuento >=120000:
    descuento = tienda_Con_Descuento * 0.15
    Valor_Final = tienda_Con_Descuento - descuento
    print("se te aplico el descuento:", Valor_Final)
else:
    print("no se te aplico:", tienda_Con_Descuento)   


#!CICLOS WHILE

#!suma de numeros

Numero_De_Usuario = int(input("ingrese el valor en cual quieres hacer la suma:"))
suma = 0 
while Numero_De_Usuario !=0:
    suma+=Numero_De_Usuario
    Numero_De_Usuario = int(input("ingresa otro numero:"))
print("esta es tu suma", suma)
  

#!Adivina el numero 

Numero_Aleatorio = random.randint(1,20)
Intentos = 0
while True:
    Numero_Del_Usuario = int(input("adivina un nuemro entre el 1 y 20:"))
    Intentos +=1
    if Numero_Del_Usuario != Numero_Aleatorio:
        print("no adivinaste sigue intentado")
    else:
        print("adivinaste el numero")
        break
"""    
#!CICLOS FOR 

#!Tabla de multiplicar 

numero_De_La_Tabla = int(input("ingresa un numero del 1 al 10:"))
Multiplicar = 0
for numero_De_La_Tabla in range(1,10):
    print