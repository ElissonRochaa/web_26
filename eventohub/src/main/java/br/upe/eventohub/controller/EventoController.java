package br.upe.eventohub.controller;

import br.upe.eventohub.entity.Evento;
import br.upe.eventohub.repository.EventoRepository;
import br.upe.eventohub.service.EventoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@RequiredArgsConstructor
public class EventoController {

    private final EventoService eventoService;

    //cadastrarEvento
    //POST
    //api/eventos
    @PostMapping
    public Evento cadastrarEvento(@RequestBody Evento evento){
        return eventoService.cadastrarEvento(evento);
    }

    //buscarEventoPorID
    //GET
    //api/eventos/{id}
    @GetMapping("/{id}")
    public Evento buscarPorId(@PathVariable Integer id){
        return eventoService.buscarEventoPorId(id);
    }

    //buscarTodos
    //GET
    //api/eventos
    @GetMapping
    public List<Evento> buscarTodos(){
        return eventoService.buscarTodosEventos();
    }

}
