# ==========================
# CLASE DISPOSITIVO
# ==========================

class Dispositivo:

    def __init__(self, tipo, marca, modelo, año_compra):
        self.tipo = tipo
        self.marca = marca
        self.modelo = modelo
        self.año_compra = año_compra
        
 

    def mostrar_info(self):
        print("Tipo:", self.tipo)
        print("Marca:", self.marca)
        print("Modelo:", self.modelo)
        print("Año de compra:", self.año_compra)

    def actualizar_año(self, nuevo_año):
        self.año_compra = nuevo_año
    
    def __str__(self,):
            return(f"el tipo es: {self.tipo}, y la marca es un: {self.marca} y el modelo es un: {self.modelo} y lo compre en el año: {self.año_compra} ")


# ==========================
# CLASE ESTUDIANTE
# ==========================

class Estudiante:

    def __init__(self, nombre, edad, grado):
        self.nombre = nombre
        self.edad = edad
        self.grado = grado
        self.lista_dispositivos = []

    def agregar_dispositivo(self, dispositivo):
        self.lista_dispositivos.append(dispositivo)

    def mostrar_dispositivos(self):

        if len(self.lista_dispositivos) == 0:
            print("No tiene dispositivos registrados.")
        else:
            for i, dispositivo in enumerate(self.lista_dispositivos, 1):
                print("\nDispositivo", i)
                dispositivo.mostrar_info()

    def contar_dispositivos(self):
        return len(self.lista_dispositivos)


# ==========================
# FUNCIONES
# ==========================

def crear_dispositivo():

    print("\nRegistrar nuevo dispositivo")

    tipo = input("Tipo: ")
    marca = input("Marca: ")
    modelo = input("Modelo: ")
    año = int(input("Año de compra: "))

    return Dispositivo(tipo, marca, modelo, año)


def mostrar_todos_los_estudiantes(lista_estudiantes):

    print("\n========== ESTUDIANTES ==========")

    for estudiante in lista_estudiantes:

        print("\nNombre:", estudiante.nombre)
        print("Edad:", estudiante.edad)
        print("Grado:", estudiante.grado)
        print("Cantidad de dispositivos:", estudiante.contar_dispositivos())

        estudiante.mostrar_dispositivos()


def buscar_por_grado(lista_estudiantes, grado):

    encontrados = []

    for estudiante in lista_estudiantes:

        if estudiante.grado == grado:
            encontrados.append(estudiante)

    return encontrados


# ==========================
# CREAR DISPOSITIVOS
# ==========================

d1 = Dispositivo("Celular", "Samsung", "Galaxy S21", 2021)
d2 = Dispositivo("Tablet", "Apple", "iPad Air", 2022)

d3 = Dispositivo("Laptop", "HP", "Pavilion", 2023)
d4 = Dispositivo("Celular", "Xiaomi", "Redmi Note 10", 2022)

d5 = Dispositivo("Tablet", "Lenovo", "Tab P11", 2023)


# ==========================
# CREAR ESTUDIANTES
# ==========================

dylan = Estudiante("Dylan Hinestroza", 12, "6to")
dylan.agregar_dispositivo(d1)
dylan.agregar_dispositivo(d2)

salome = Estudiante("Salome Jimenez", 13, "7mo")
salome.agregar_dispositivo(d3)
salome.agregar_dispositivo(d4)

alejandro = Estudiante("Alejandro Varela", 11, "5to")
alejandro.agregar_dispositivo(d5)

lista_estudiantes = [dylan, salome, alejandro]


# ==========================
# MOSTRAR ESTUDIANTES
# ==========================

mostrar_todos_los_estudiantes(lista_estudiantes)


# ==========================
# BUSCAR POR GRADO
# ==========================

grado = input("\nIngrese el grado que desea buscar: ")

resultado = buscar_por_grado(lista_estudiantes, grado)

print("\nEstudiantes encontrados:")

if len(resultado) == 0:
    print("No hay estudiantes de ese grado.")
else:
    for estudiante in resultado:
        print(estudiante.nombre)


# ==========================
# CREAR NUEVO ESTUDIANTE
# ==========================

print("\nRegistrar nuevo estudiante")

nombre = input("Nombre: ")
edad = int(input("Edad: "))
grado = input("Grado: ")

nuevo_estudiante = Estudiante(nombre, edad, grado)

lista_estudiantes.append(nuevo_estudiante)

print("Estudiante registrado correctamente.")


# ==========================
# AGREGAR DISPOSITIVO A UN ESTUDIANTE
# ==========================

nombre_buscar = input("\n¿A qué estudiante desea agregar un dispositivo? ")

encontrado = False

for estudiante in lista_estudiantes:

    if estudiante.nombre.lower() == nombre_buscar.lower():

        nuevo_dispositivo = crear_dispositivo()

        estudiante.agregar_dispositivo(nuevo_dispositivo)

        print("Dispositivo agregado correctamente.")

        encontrado = True

        break

if encontrado == False:
    print("El estudiante no existe.")


# ==========================
# ACTUALIZAR AÑO DE UN DISPOSITIVO
# ==========================

respuesta = input("\n¿Desea actualizar el año de un dispositivo? (si/no): ")

if respuesta.lower() == "si":

    nombre_buscar = input("Nombre del estudiante: ")

    for estudiante in lista_estudiantes:

        if estudiante.nombre.lower() == nombre_buscar.lower():

            estudiante.mostrar_dispositivos()

            numero = int(input("\nNúmero del dispositivo a actualizar: "))

            if numero >= 1 and numero <= estudiante.contar_dispositivos():

                nuevo_año = int(input("Nuevo año: "))

                estudiante.lista_dispositivos[numero-1].actualizar_año(nuevo_año)

                print("Año actualizado correctamente.")

            else:
                print("Número de dispositivo incorrecto.")

            break


# ==========================
# CONTAR ESTUDIANTES CON MÁS DE 2 DISPOSITIVOS
# ==========================

contador = 0

for estudiante in lista_estudiantes:

    if estudiante.contar_dispositivos() > 2:
        contador += 1

print("\nEstudiantes con más de 2 dispositivos:", contador)


# ==========================
# MOSTRAR INFORMACIÓN FINAL
# ==========================

mostrar_todos_los_estudiantes(lista_estudiantes)


#!funciones especiales son __init__ y __srt__ 
"""
class persona: #clase
    def __init__(self, nombre, edad, altura): # atributos
        self.nombre = nombre
        self.edad = edad
        self.altura = altura

    def hablar(self):
            print("Hola parcero soy una persona ") #accion

    def __str__(self):
            return f"Nombre: {self.nombre}\n Edad: {self.edad}\n Altura: {self.altura}"

class empleado (persona):
    def __init__(self, nombre, edad, altura,trabajo,salario):
        super().__init__(nombre, edad, altura)#los datos los saca de la clase padre la herencia 
        self.trabajo = trabajo
        self.salario = salario

    def hablar(self):
        print("Hola parcero soy un empleado")

    def __str__(self):
        return f" {super().__str__() }\n Trabajo: {self.trabajo} \n Salario: {self.salario}"

class artista:
    def __init__ (self, talento):
        self.talento = talento
        
    def mostrar_talento(self):
        return f"mi talento es {self.talento:}"

    def __str__(self):
                return f"estoy desde artista"
    
class empleadoArtista(persona, artista):
    def __init__(self, nombre, edad, altura,talento,salario,empresa):
         super().__init__(nombre, edad, altura)
         artista.__init__(self, talento)
         
         self.salario = salario
         self.empresa = empresa
    
    def hablar (self):
        return f"hola soy {self.nombre}, {self.mostrar_talento()} y trabajo en {self.empresa}"
    
santiago = empleadoArtista("santiago", 26, 1.80, "cantar", "$17'000.000", "caleñas VIP")
print(santiago.hablar())"""


""""""
class persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def __str__(self):
        return f"  nombre:{self.nombre} \n edad:{self.edad} "

class mentor:
    def __init__ (self, exeriencia):
        self.experiencia = exeriencia
    def __str__(self):
        return f"esta es mi experiencia {self.experiencia}"
                  
class profesor(persona):
    def __init__(self, nombre, edad, materia):
        super().__init__(nombre, edad)
        self.materia = materia
    
    def __str__(self):
        return f"{super().__str__()} \n materia:{self.materia}"
    
class estudiante(persona, mentor):
    def __init__(self, nombre, edad, experiencia, grado):
        super().__init__( nombre, edad)
        mentor. __init__ (self, experiencia)
        self.grado = grado
    
            
    def hablar (self):
     return f"hola soy {self.nombre}, y tengo esperiencia de {self.experiencia} y estoy en el grado {self.grado}"

santiago = estudiante ("santiago", 20, "11 años", "10mo")
print(santiago.hablar())