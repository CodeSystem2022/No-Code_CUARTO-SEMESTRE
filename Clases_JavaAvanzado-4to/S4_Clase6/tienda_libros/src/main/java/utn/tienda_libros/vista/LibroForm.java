package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

@Component
public class LibroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField idTexto;
    private JTextField libroTextoTextField;
    private JTextField autorTextoTextField;
    private JTextField precioTextoTextField;
    private JTextField existenciasTextoTextField;
    private JButton agregarButton;
    private JButton modificarButton;
    private JButton eliminarButton;
    private JButton eliminarButton1;
    private DefaultTableModel tablaModeloLibros;


    @Autowired
    public LibroForm(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());
        tablaLibros.addMouseListener(new MouseAdapter() {
        });
        tablaLibros.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                cargarLibroSeleccionado();
            }
        });
        modificarButton.addActionListener(e -> modificarLibro());



    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamaniopantalla = toolkit.getScreenSize();
        int x = (tamaniopantalla.width - this.getWidth())/2;
        int y = (tamaniopantalla.height - this.getHeight())/2;
        setLocation(x, y);
    }

    private void agregarLibro() {
        if(libroTextoTextField.getText().equals("")) {
            mostrarMensaje("Ingrese el nombre del libro");
            libroTextoTextField.requestFocusInWindow();
            return;
        }
        var nombreLibro = libroTexto.getText();
        var autor = autorTexto.getText();
        var precio = Double.parseDouble(precioTexto.getText());
        var existencias = Integer.parseInt(existenciasTexto.getText());
        //Creamos el objeto libro
        var libro = new Libro(null, nombreLibro, autor, precio, existencias);
        //libro.setNombreLibro(nombreLibro);
        //libro.setAutor(autor);
        //libro.setPrecio(precio);
        //libro.setExistencias(existencias);
        this.libroServicio.guardarLibro(libro);
        mostrarMensaje("Libro guardado con éxito");
        limpiarFormulario();
        listarLibros();
    }

    private void cargarLibroSeleccionado(){
        //los indices de las columnas comienzan en CERO
        var renglon = tablaLibros.getSelectedRow();
        if (renglon == -1) {
            String idLibro = tablaLibros.getModel().getValueAt(renglon, 0).toString();
            idTexto.setText(idLibro);
            String nombreLibro = tablaLibros.getModel().getValueAt(renglon, 1).toString();
            libroTexto.setText(nombreLibro);
            String autor = tablaLibros.getModel().getValueAt(renglon, 2).toString();
            autorTexto.setText(autor);
            String precio = tablaLibros.getModel().getValueAt(renglon, 3).toString();
            precioTexto.setText(precio);
            String existencias = tablaLibros.getModel().getValueAt(renglon, 4).toString();
            existenciasTexto.setText(existencias);
    }

    private void  modificarLibro(){
        if(idTexto.getText().equals("")){
            mostrarMensaje("Debe seleccionar un registro en la tabla");
        }
        else {
            //Verificamos que el nombre no sea nulo
            if (libroTexto.getText().equals("")) {
                mostrarMensaje("Ingrese el nombre del libro");
                libroTexto.requestFocusInWindow();
                return;
            }
            // Llenamos el objeto libro a actualizar
            int idLibro = Integer.parseInt(idTexto.getText());
            var nombreLibro = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());
            var libro = new Libro(idLibro, nombreLibro, autor, precio, existencias);
            libroServicio.guardarLibro(libro);
            mostrarMensaje("Libro actualizado con éxito");
            limpiarFormulario();
            listarLibros();
        }

        }

    private void eliminarLibro(){
            var renglon = tablaLibros.getSelectedRow();
            if (renglon == -1) {
                String idLibro =
                        tablaLibros.getModel().getValueAt(renglon, 0).toString();
                var libro = new Libro();
                libro.setIdLibro(Integer.parseInt(idLibro));
                libroServicio.eliminarLibro(libro);
                mostrarMensaje("Libro "+idLibro+" eliminado con éxito");
                limpiarFormulario();
                listarLibros();
            } else {
                mostrarMensaje("Debe seleccionar un registro en la tabla");
                }
            }

    private void limpiarFormulario() {
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }

    private void mostrarMensaje(String mensaje) {
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {

        idTexto = new JTextField("");
        idTexto.setVisible(false);
        this.tablaModeloLibros = new DefaultTableModel(0,5)
        {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
                }
            };

        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        // Instanciar el objeto de Jtable
        this.tablaLibros =new JTable(tablaModeloLibros);
        //Evitamos que se seleccionen varios registros
        tablaLibros.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        listarLibros();
    }

    private void listarLibros() {
        //limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener la lista de libros de la BD
        libroServicio.listarLibros().forEach(libro -> {
            var libros = libroServicio.listarLibros();
            libros.forEach(libro)-> {
                //Creamos cada registro para el modelo de la tabla
                Object[] renglonLibro = {
                        libro.getIdLibro(),
                        libro.getNombreLibro(),
                        libro.getAutor(),
                        libro.getPrecio(),
                        libro.getExistencias()
                };
                this.tablaModeloLibros.addRow(renglonLibro);
            }


        });
    }
}

        eliminarButton.addActionListener(e -> eliminarLibro());


