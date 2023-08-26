package UTN.datos;

import UTN.dominio.Estudiante;
import com.mysql.cj.xdevapi.PreparableStatement;

import static UTN.Conexion.Conexion.getConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {

    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();

        PreparedStatement ps; //introduce la sentencia de la bd
        ResultSet rs; //obtiene los resultados de la bd

        //obj de conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));

                estudiantes.add(estudiante);
            }
        }catch(Exception e){
            System.out.println("Ocurrio un error al seleccionar datos de tipo: "+ e.getMessage());
        }
        finally{
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la coneccion de tipo: " + e.getMessage());
            }
        }
        return estudiantes;
    }

    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            }
        }catch (Exception e){
            System.out.println("Ocurrio un error al buscar estudiante de tipo: " + e.getMessage());
        }
        finally{
            try{
                con.close();
            }catch(Exception e){
                System.out.println("Ocurrio un error al cerrar la conexion de tipo: " + e.getMessage());
            }

        }
        return false;
    }

    //agregar estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?,?,?,?);";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        }catch(Exception e){
            System.out.println("Ocurrio un error al agregar el estudiante de tipo: " + e.getMessage());
        }
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Error al cerrar conexion de tipo: " + e.getMessage());
            }
        }
        return false;
    }
    //modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?,email=? WHERE idestudiantes=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(2,estudiante.getNombre());
            ps.setString(3,estudiante.getApellido());
            ps.setString(4,estudiante.getTelefono());
            ps.setString(5,estudiante.getEmail());
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Error al modificar estudiante de tipo: " + e.getMessage());

        }
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Error al cerrar la conexion de tipo: " + e.getMessage());
            }
        }
        return false;
    }
    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2022 WHERE idestudiantes=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Error al eliminar estudiante: " + e.getMessage());
        }
        finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Error al cerrar la conexión: " + e.getMessage());
            }
        }
        return false;
    }

    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();


        //modificar estudiante

        //var estudinateModificado = new Estudiante(1,"Lucas","Salinas","2604345678", "lsalinas@gmail.com");
        //var modificado = estudianteDao.modificarEstudiante(estudinateModificado);
        //if(modificado)
        //    System.out.println("Estudiante modificado"+estudinateModificado);
        //else
        //    System.out.println("No se a modificado el estudiante " + estudinateModificado);
        //Agregar estudiante
        //var nuevoEstudiante = new Estudiante("Jeremias", "Riquero", "2604546789", "jriquero@gmail.com");
        //var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        //if (agregado)
        //    System.out.println("Estudiante agregado: "+nuevoEstudiante);
        //else System.out.println("No se agregado estudiante "+nuevoEstudiante);

        //buscar por id

       // var estudiante1 = new Estudiante(1);
        //System.out.println("Estudiante antes de la busqueda" + estudiante1);
        //var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        //if (encontrado)
        //    System.out.println("estudiante encontrado: " + estudiante1);
        //else
        //    System.out.println("no se encontro el estudiante " + estudiante1.getIdEstudiante());

        //Eliminnar estudiante

        //var estudianteEliminar = new  Estudiante(4);
        //var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
        //if (eliminado)
        //    System.out.println("Estudiante eliminado: " + estudianteEliminar );
        //else
        //    System.out.println("No se elimino estudiante:  " + estudianteEliminar);

        //System.out.println("Listado de estudiantes:");
        //List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        //estudiantes.forEach(System.out::println);
    }
}
