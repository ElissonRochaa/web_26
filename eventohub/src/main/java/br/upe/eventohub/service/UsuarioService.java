package br.upe.eventohub.service;

import br.upe.eventohub.dtos.UsuarioRequestDTO;
import br.upe.eventohub.dtos.UsuarioResponseDTO;
import br.upe.eventohub.entity.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UsuarioService {
    public UsuarioResponseDTO cadastrarUsuario(UsuarioRequestDTO dto);
    public UsuarioResponseDTO buscarPorEmail(String email);
    public Page<UsuarioResponseDTO> buscarTodos(Pageable pageable);
}
