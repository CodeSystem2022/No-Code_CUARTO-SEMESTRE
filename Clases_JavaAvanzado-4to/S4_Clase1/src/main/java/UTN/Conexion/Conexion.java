package UTN.Conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;

        var baseDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var usuario = "root";
        var password = "admin";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario,password);
        }catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrio en error en la conexion de tipo: "+ e.getMessage());
        }
        return conexion;

    }
}
