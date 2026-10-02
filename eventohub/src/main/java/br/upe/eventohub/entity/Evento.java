package br.upe.eventohub.entity;

import br.upe.eventohub.entity.enums.TipoEvento;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "evento")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer ID;
    @Column(nullable = false)
    private String titulo;
    @Column(length = 2048)
    private String descricao;
    private LocalDate data;
    private LocalTime hora;
    private String local;
    private int capacidade_max;
    @Enumerated(EnumType.STRING)
    private TipoEvento tipoEvento;
    @ManyToOne
    @JoinColumn(name = "id_organizador")
    private Usuario organizador;


}
