/*
Metodologia de Sistema
Clase 1
16/08/23
No_Code?
 */



package UTN.presentación;

import UTN.Conexion.Conexion;
import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);
        var estudianteDao = new EstudianteDAO();
        while (!salir){
            try{
                mostrarMenu();
                salir = ejecutarOpciones(consola, estudianteDao);
            }catch (Exception e){
                System.out.println("Ocurrió un error al ejecutar la operación: " + e.getMessage() );
            }
        }
    }
    private static void mostrarMenu(){
        System.out.print("""
                ******* Sistema de Estudiantes *******
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiante 
                4. Modificar Estudiante
                5. Eliminar Estudiante
                6. Salir
                Elige una opción:  
                """);
    }
    private static  boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> {
                System.out.println("Listado de Estudiantes: ");
                var estudiantes = estudianteDAO.listarEstudiantes();
                estudiantes.forEach(System.out::println);
            }
            case 2 -> {
                System.out.print("Introduce el id_estudiante a buscar: ");
                var idEstudiate = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiate);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("Estudiante Econtrado: " + estudiante);
                else
                    System.out.println("Estudiante no Encontrado: " + estudiante);
            }
            case 3 -> {
                System.out.println("Agregar estudiante: ");
                System.out.print("Nombre: ");
                var nombre = consola.nextLine();
                System.out.print("Apellido: ");
                var apellido = consola.nextLine();
                System.out.print("Telefono: ");
                var telefono = consola.nextLine();
                System.out.print("Email: ");
                var email = consola.nextLine();

                var estudiante = new Estudiante(nombre,apellido,telefono,email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("Estudiante agregado: "+ estudiante);
                else
                    System.out.println("Estudiante No agregado" + estudiante);
            }
            case 4 -> {
                System.out.println("Modificar Estudiante: ");
                System.out.print("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.print("Nombre: ");
                var nombre = consola.nextLine();
                System.out.print("Apellido: ");
                var apellido = consola.nextLine();
                System.out.print("Telefono: ");
                var telefono = consola.nextLine();
                System.out.print("Email: ");
                var email = consola.nextLine();

                var estudiante =
                        new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: " + estudiante);
                else
                    System.out.println("Estudiante no modificado: " + estudiante);
            }
            case 5 -> {
                System.out.println("Eliminar Estudiante: ");
                System.out.print("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if(eliminado)
                    System.out.println("Estudiante  eliminado: " + estudiante);
                else
                    System.out.println("Estudiante no eliminado" + estudiante);

            }
            case 6 -> {
                System.out.println("Finalizo el programa");
                salir = true;
            }
            default -> System.out.println("Opción no reconocida, ingrese otra opción");
        }
        return salir;
    }
}
