package br.upe.eventohub.service;

import br.upe.eventohub.entity.Evento;

import java.util.List;

public interface EventoService {

    //cadastrarEvento
    public Evento cadastrarEvento(Evento evento);
    //BuscarEventoPorID
    public Evento buscarEventoPorId(Integer id);
    //BuscarTodosEventos
    public List<Evento> buscarTodosEventos();

}
