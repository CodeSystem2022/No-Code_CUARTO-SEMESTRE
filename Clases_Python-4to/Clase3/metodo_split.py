
#help(str.split)

cursos = 'java javascript node python diseno'
lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}')
print(type(lista_cursos))


cursos_serparados_coma = 'java, javascript, node, python, diseno'
lista_cursos = cursos_serparados_coma.split(',', 2)
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))