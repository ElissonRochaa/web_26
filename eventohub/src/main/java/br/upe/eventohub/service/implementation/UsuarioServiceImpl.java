package br.upe.eventohub.service.implementation;

import br.upe.eventohub.dtos.UsuarioRequestDTO;
import br.upe.eventohub.dtos.UsuarioResponseDTO;
import br.upe.eventohub.entity.Usuario;
import br.upe.eventohub.entity.enums.Perfil;
import br.upe.eventohub.repository.UsuarioRepository;
import br.upe.eventohub.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Override
    public UsuarioResponseDTO cadastrarUsuario(UsuarioRequestDTO dto) {
        if(verificarEmail(dto.email())){
            return null;
        }
        //transformar em Usuario
        Usuario usuario = new Usuario(dto);
        usuario.setPerfil(Perfil.PARTICIPANTE);
        //mandar cadastrar

        return UsuarioResponseDTO.fromEntity(usuarioRepository.save(usuario));
    }

    @Override
    public UsuarioResponseDTO buscarPorEmail(String email) {
        return UsuarioResponseDTO.fromEntity(usuarioRepository.findByEmail(email));
    }

    @Override
    public Page<UsuarioResponseDTO> buscarTodos(Pageable pageable) {
        return usuarioRepository.findAll(pageable)
                .map(UsuarioResponseDTO::fromEntity);
    }

    public boolean verificarEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }
}

