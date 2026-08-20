ingresa_nombres = set()

print("el programa finalizara cuando escribas fin")

while True:
    ingresa_nombre_De_Usuario  = input("ingrese los nombres:")
    if (ingresa_nombre_De_Usuario == "fin"):
        print (ingresa_nombre_De_Usuario)
        break
    ingresa_nombres.add (ingresa_nombre_De_Usuario)
print("estos son los nombres que ingresaste", len (ingresa_nombres))