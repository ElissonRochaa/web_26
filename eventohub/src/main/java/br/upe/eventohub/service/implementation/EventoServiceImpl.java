package br.upe.eventohub.service.implementation;

import br.upe.eventohub.entity.Evento;
import br.upe.eventohub.repository.EventoRepository;
import br.upe.eventohub.service.EventoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventoServiceImpl implements EventoService {

    private final EventoRepository eventoRepository;

    @Override
    public Evento cadastrarEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    @Override
    public Evento buscarEventoPorId(Integer id) {
        return eventoRepository.findById(id).get();
    }

    @Override
    public List<Evento> buscarTodosEventos() {
        return eventoRepository.findAll();
    }
}
