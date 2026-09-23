import type { Event } from "../types/Event";

interface MinhasInscricoesProps {
  events: Event[];
}

export default function MinhasInscricoes({
  events,
}: MinhasInscricoesProps) {
  const registeredEvents = events.filter(
    (event) => event.registered
  );

  return (
    <main className="events-container">
      <div className="page-title">
        <h2>Minhas inscrições</h2>
        <p>
          Confira os eventos nos quais você está inscrita.
        </p>
      </div>

      {registeredEvents.length === 0 ? (
        <div className="empty-state">
          Você ainda não possui inscrições.
        </div>
      ) : (
        <section className="events-list">
          {registeredEvents.map((event) => (
            <div
              className="registered-event"
              key={event.id}
            >
              <div>
                <h3>{event.title}</h3>

                <p>
                  {event.day} {event.month} ·{" "}
                  {event.location} · Campus{" "}
                  {event.campus}
                </p>
              </div>

              <span>✓ Inscrito</span>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}