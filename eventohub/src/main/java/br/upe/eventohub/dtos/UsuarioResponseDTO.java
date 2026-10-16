package br.upe.eventohub.dtos;

import br.upe.eventohub.entity.Usuario;
import br.upe.eventohub.entity.enums.Perfil;

public record UsuarioResponseDTO(
        Integer id,
        String nome,
        String email,
        String telefone,
        Perfil perfil
) {

    public static UsuarioResponseDTO fromEntity(Usuario usuario){
        return new UsuarioResponseDTO(
                usuario.getID(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getTelefone(),
                usuario.getPerfil()
        );
    }

}
