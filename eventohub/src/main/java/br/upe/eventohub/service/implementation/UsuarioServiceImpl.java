package br.upe.eventohub.service.implementation;

import br.upe.eventohub.entity.Usuario;
import br.upe.eventohub.repository.UsuarioRepository;
import br.upe.eventohub.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Override
    public Usuario cadastrarUsuario(Usuario usuario) {
        if(verificarEmail(usuario.getEmail())){
            return null;
        }

        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public boolean verificarEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }
}

