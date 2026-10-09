package br.upe.eventohub.controller;

import br.upe.eventohub.entity.Usuario;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {


    @PostMapping
    public ResponseEntity<?> cadatrarUsuario(Usuario usuario){
        return ResponseEntity.badRequest().build();
    }

}
