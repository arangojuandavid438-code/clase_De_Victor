#! variable
"""
Celular1_Marca = "Samsung"
Celular2_Marca = "iphone"
Celular3_Marca = "oppo"

Celular1_Modelo = "S24"
Celular2_Modelo = "iphone 17 pro"
Celular3_Modelo = "p20 pro"

Celular1_Camara = "48mp"
Celular2_Camara = "48mp"
Celular3_Camara = "12mp"

#! Objetos e intacias

#clase con atributos estaticos no cambian no se pueden modificar
#clase es lo general y la instacia es lo especifico

class Celular1():
    marca = "Samsung"
    modelo = "S24"
    camara = "48mp"
    
Celular_Del_Estudiante = Celular1()
print(Celular_Del_Estudiante.marca)

    
#! segunda clase : atributos dinamicos
#esta clase permite que cada celular tenga valores unicos
#vamos a usar el metodo contrctor __init__

class Celular2():
    def __init__(self, marca, modelo, camara):
        self.marca = marca
        self.modelo = modelo 
        self.camara = camara

celular_De_Juanda = Celular2("Samsung", "S24", "48mp")
print(celular_De_Juanda.marca)"""



class Computadores():
    def __init__(self, marca, CPU, RAM, Origen):
        self.marca = marca
        self.CPU = CPU
        self.RAM = RAM
        self.Origen = Origen
        
    def calidad(self):
        print(f"estoy comprador un portatil de la marca {self.marca} y la Cpu es es bastante buena y es {self.CPU} y la ram esta bastante bien es de {self.RAM} y su origen es de {self.Origen } ")        
    def mantenimiento(self):
            print(f"El mantenimiento del {self.marca} es bastante falcil ya que tienes varios repuestos como la Cpu que es {self.CPU} y igual la ram {self.RAM} y si me preguntan por el origen es de {self.Origen } ")             
computador_De_juanda = Computadores("Asus","core i3","32gb","taiwan")
computador_De_Nataly = Computadores("Lenovo","ryzen 7","16gb","china")
computador_De_Miguel = Computadores("apple","Serie M2","14gb","Estados unidos")
computador_De_Jhon = Computadores("Hp","intel core ultra 5","24gb","Estados unidos")
computador_De_juanda.calidad()
computador_De_Nataly.mantenimiento()


Marca_Del_Portatil = input ("ingrese la marca")
print(f"El computador que vallas a comprar es de {Marca_Del_Portatil}")
CPU_Del_Portatil = input ("ingrese la CPU")
print(f"El computador que vallas a comprar es de {CPU_Del_Portatil}")
RAM_Del_Portatil = input ("ingrese la RAM")
print(f"El computador que vallas a comprar es de {RAM_Del_Portatil}")
Origen_Del_Portatil = input ("ingrese el Origen")
print(f"El computador que vallas a comprar es de {Origen_Del_Portatil}")







