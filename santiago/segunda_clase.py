#!funciones especiales son __init__ y __srt__ 

"""class persona: #clase
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

santiago = empleado("santiago", 32, 1.80, "striper","$2000")
print(santiago)"""

class persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def __str__(self):
        return f"  nombre:{self.nombre} \n edad:{self.edad} "
    
class estudiante(persona):
    def __init__(self, nombre, edad, grado):
        super().__init__(nombre, edad)
        self.grado = grado
    
    def actualizar_Edad(self,nueva_edad):
        self.edad = nueva_edad  
            
    def __srt__ (self):
        return f"{super().__str__()} \n grado:{self.grado}"
    
                  
class profesor(persona):
    def __init__(self, nombre, edad, materia):
        super().__init__(nombre, edad)
        self.materia = materia
    
    def __str__(self):
        return f"{super().__str__()} \n materia:{self.materia}"

class limpieza(persona):
    def __init__(self, nombre, edad, materiales):
        super().__init__(nombre, edad)
        self.materiales = materiales
    
    def nuevo_material(self, material_nuevo):
        self.material_nuevo = material_nuevo
        
    def __str__(self):
        return f"{super().__str__()} \n los materiales son:{self.materiales}"

rodolfo = limpieza("rodolfo", 34, "escoba")
pepe = estudiante("pepe", 21, "11ce")
santiago = profesor("santiago", 37,"español")
print(santiago)

rodolfo.nuevo_material("trapeador")
print(rodolfo)

pepe.actualizar_Edad(53)
print(pepe)

