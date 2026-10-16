package br.upe.eventohub.controller;

import br.upe.eventohub.dtos.UsuarioRequestDTO;
import br.upe.eventohub.dtos.UsuarioResponseDTO;
import br.upe.eventohub.entity.Usuario;
import br.upe.eventohub.service.UsuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<UsuarioResponseDTO> cadatrarUsuario(@RequestBody @Valid UsuarioRequestDTO dto){

        UsuarioResponseDTO usuarioCadastrado = usuarioService.cadastrarUsuario(dto);

        return ResponseEntity.ok().body(usuarioCadastrado);
    }

    @GetMapping
    public Page<UsuarioResponseDTO> buscarTodos(Pageable pageable){
        return usuarioService.buscarTodos(pageable);
    }

}
