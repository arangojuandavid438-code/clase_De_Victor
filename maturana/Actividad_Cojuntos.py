import random 
#! 1.Numenro aleatorio sin repetir 
def numero_aleatorio():
    
    numeros = set()#conjunto vacio
    while len(numeros) < 10:
        numeros.add(random.randint(1,50))
    print("los numeros aleatorios:", numeros)
numero_aleatorio()
      
print("---------------------------------------------------")
          
#! 2. Lotería de 6 números
def loteria():
    
    Numero_Loteria = set()
    while len(Numero_Loteria) <6:
        Numero_Loteria.add(random.randint(1,45))
    print("tu loteria es:",sorted(Numero_Loteria))
    
loteria()

print("---------------------------------------------------")

#! 3.Adivina el numero

def adivina_numero():
    Numero_Encubierto = random.randint(1, 20)
    intentos = set()
    while True:
        intento = int(input("adivina el numero (1-20): "))
        intentos.add(intento)
        if intento == Numero_Encubierto:
            print("adivinastes")
            break  
    print("intentos diferentes:", len(intentos))
    print("numeros probados:", intentos)
adivina_numero()

print("---------------------------------------------------")

#! 4. Cartas únicas
def cartas_Unicas():
    Carta = set()#conjunto vacio
    while len(Carta) < 5:
        Carta.add(random.randint(1,13))
    print("las cartas son:", Carta)
cartas_Unicas()

print("---------------------------------------------------")

#! 5. Dados sin repetir
def dados_sin_repetir():
    caras = set()
    contador = 0
    while len(caras) < 6:
        tirada = random.randint(1, 6)
        caras.add(tirada)
        contador += 1
    print("numero de lanzamientos:", contador)
    print("caras obtenidas:", caras)
dados_sin_repetir()

print("---------------------------------------------------")

#! 6. bingo personal 

def bingo_personal():
    carton = set()
    while len(carton) < 15:
        carton.add(random.randint(1, 75))
    sorteos = set()
    contador = 0
    while not carton.issubset(sorteos):
        sorteos.add(random.randint(1, 75))
        contador += 1
    print("sorteos necesarios:", contador)
bingo_personal()

print("---------------------------------------------------")
#! 7.recolectando tesoros 

def tesoros():
    coleccion = set()
    while len(coleccion) <10:
        coleccion.add(random.randint(1,20))
    print("tesoros descubierto:", coleccion)
tesoros()

print("---------------------------------------------------")
#! 8. Concurso de preguntas 
def ejercicio_concurso_preguntas():
    preguntas = random.sample(range(1, 21), 5)
    print("Preguntas seleccionadas (5):", preguntas)
ejercicio_concurso_preguntas
    
print("---------------------------------------------------")

#! 9. Carrera de Colores
def carrera_Colores():
    Colores = ["Rojo", "Azul", "Verde", "Amarillo", "Negro", "Blanco", "Morado", "Naranja"]
    seleccion = set()
    orden = []
    while len(seleccion) < 5:
        c = random.choice(Colores)
        if c not in seleccion:
            seleccion.add(c)
            orden.append(c)
    print("Colores obtenidos (orden de aparición):", orden)
carrera_Colores()
    
