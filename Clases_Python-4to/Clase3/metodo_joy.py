

#help(str.join)

tupla_str = ('Hola', 'alumnos', 'Tecnicatura', 'Univeristaria')
mensaje = ' '.join(tupla_str)
print(f'Mensaje: {mensaje}')

lista_curso = ['java', 'python', 'angular', 'spring']
mensaje = ' , '.join(lista_curso)
print(f'Mensaje: {mensaje}')

diccionario = {'nombre': 'juan', 'apellido': 'perez', 'edad': '18'}
llaves = '_'.join(diccionario.keys())
valores = '_'.join(diccionario.values())
print(f'Llaves: {llaves}, Type: { type(llaves)}')
print(f'Valores : {valores}, Type: {type(valores)}')


