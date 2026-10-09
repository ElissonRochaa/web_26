package br.upe.eventohub.repository;

import br.upe.eventohub.entity.Usuario;
import br.upe.eventohub.entity.enums.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    public Usuario findByEmail(String email);
    public boolean existsByEmail(String email);
    public List<Usuario> findByPerfil(Perfil Perfil);

}
