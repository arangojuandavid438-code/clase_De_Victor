#!funciones especiales son __init__ y __srt__ 

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
         #artista.__init__(self, talento)
         
         self.salario = salario
         self.empresa = empresa
    
    def hablar (self):
        return f"hola soy {self.nombre}, {self.mostrar_talento()} y trabajo en {self.empresa}"
    
santiago = empleadoArtista("santiago", 26, 1.80, "cantar", "$17'000.000", "caleñas VIP")
print(santiago.hablar())