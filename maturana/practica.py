import random 

def numeros_aleatorios():
    numeros = set()
    while len(numeros) < 10:
        numeros.add(random.randint(1, 50))
    print("tus numero son:", numeros)
numeros_aleatorios()

def loterias():
    loteria = set()
    while len (loteria) < 6:
        loteria.add(random.randint(1, 45))
    print("tu loteria es:", sorted(loteria))
loterias()

def adivina_el_numero():
    numero_adivinador = set()
    intentos = 0
    while len (numero_adivinador):
        numero_adivinador.add(random.randint(1, 20))
    intentos += 0
    print