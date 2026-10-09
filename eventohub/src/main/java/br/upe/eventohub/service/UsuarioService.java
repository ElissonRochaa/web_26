package br.upe.eventohub.service;

import br.upe.eventohub.entity.Usuario;

public interface UsuarioService {
    public Usuario cadastrarUsuario(Usuario usuario);
    public Usuario buscarPorEmail(String email);
}
