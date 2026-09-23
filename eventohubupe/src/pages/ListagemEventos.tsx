import { useState } from "react";
import CampusFilter from "../components/CampusFilter";
import EventCard from "../components/EventCard";
import EventDetails from "../components/EventDetails";
import type { Event } from "../types/Event";

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Semana da Computação UPE",
    day: 10,
    month: "OUT",
    location: "Auditório Central",
    campus: "Recife",
    availableSeats: 28,
  },
  {
    id: 2,
    title: "Feira de Extensão UPE",
    day: 15,
    month: "OUT",
    location: "Praça de Eventos",
    campus: "Garanhuns",
    availableSeats: 24,
  },
  {
    id: 3,
    title: "Hackathon UPE",
    day: 20,
    month: "OUT",
    location: "Laboratório 3",
    campus: "Recife",
    availableSeats: 0,
  },
  {
    id: 4,
    title: "Roda de Conversa: Carreiras em Dados",
    day: 25,
    month: "OUT",
    location: "Auditório Central",
    campus: "Recife",
    availableSeats: 42,
  },
];

interface ListagemEventosProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

export default function ListagemEventos({
  events,
  setEvents,
}: ListagemEventosProps) {
  const [selectedCampus, setSelectedCampus] = useState<
    "Todos os campi" | "Recife" | "Garanhuns"
  >("Todos os campi");

  const [selectedEvent, setSelectedEvent] =
    useState<Event | null>(null);

  const filteredEvents =
    selectedCampus === "Todos os campi"
      ? events
      : events.filter(
          (event) => event.campus === selectedCampus
        );

  const handleRegister = (eventId: number) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) => {
        if (event.id !== eventId) {
          return event;
        }

        if (event.availableSeats <= 0 || event.registered) {
          return event;
        }

        return {
          ...event,
          availableSeats: event.availableSeats - 1,
          registered: true,
        };
      })
    );

    setSelectedEvent((currentEvent) => {
      if (!currentEvent || currentEvent.id !== eventId) {
        return currentEvent;
      }

      if (
        currentEvent.availableSeats <= 0 ||
        currentEvent.registered
      ) {
        return currentEvent;
      }

      return {
        ...currentEvent,
        availableSeats:
          currentEvent.availableSeats - 1,
        registered: true,
      };
    });
  };

  return (
    <>
      <main className="events-container">
        <CampusFilter
          selectedCampus={selectedCampus}
          onChange={setSelectedCampus}
        />

        <section className="events-list">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDetails={setSelectedEvent}
              onRegister={handleRegister}
            />
          ))}
        </section>

        {filteredEvents.length === 0 && (
          <div className="empty-state">
            Nenhum evento encontrado para este campus.
          </div>
        )}
      </main>

      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={handleRegister}
        />
      )}
    </>
  );
}

export { mockEvents };