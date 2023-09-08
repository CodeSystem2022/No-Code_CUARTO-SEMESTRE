
# Bool contiene los valores de True y False
# Los tipos numericos, es false para 0 (cero), True para los demas valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 0.1
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo string -> faLse '', True demas valores
valor = []
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacias
# Tipo colecciones -> True para todas las demas
# Lista
valor =
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor =[2, 3, 4]
resultado = bool(valor)
print(f'valor de una lista con elementos:{valor}, Resultado {resultado}')

# Tupla
valor =()
resultado = bool(valor)
print(f'valor de una tupla vacia :{valor}, Resultado {resultado}')

valor =(5,)
resultado = bool(valor)
print(f'valor de una tupla con elementos:{valor}, Resultado {resultado}')

# Diccionario
valor ={}
resultado = bool(valor)
print(f'valor de un diccionario vacio:{valor}, Resultado {resultado}')

valor ={'Nombre': 'Juan', 'Apellido': 'Perez'}
resultado = bool(valor)
print(f'valor de un diccionario con elementos :{valor}, Resultado {resultado}')

# Sentencia de control
if (1,):
    print('Regresa verdadero')
else:
    print('Regresa falso')

# ciclos
variable = 17
while variable:
    print('Regresa vardadero')
    break
else:
    print('Regresa falso')

