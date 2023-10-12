package utn.tienda_libros.repositorio;

import org.springframework.data.jpa.repository.JoaRepository;
import utn.tienda_libros.modelo.Libro;

public interface LibroRepositorio extends JpaRepository<Libro Integer> {
}
