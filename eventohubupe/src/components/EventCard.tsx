import type { Event } from "../types/Event";

interface EventCardProps {
  event: Event;
  onDetails: (event: Event) => void;
  onRegister: (eventId: number) => void;
}

export default function EventCard({
  event,
  onDetails,
  onRegister,
}: EventCardProps) {
  const isFull = event.availableSeats <= 0;

  return (
    <article
      className="event-card"
      onClick={() => onDetails(event)}
    >
      <div className="event-date">
        <strong>{event.day}</strong>
        <span>{event.month}</span>
      </div>

      <div className="event-info">
        <h2>{event.title}</h2>

        <p>
          {event.location}
          <span className="separator">·</span>
          Campus {event.campus}
        </p>
      </div>

      <div className="event-action">
        {event.registered ? (
          <div className="registered">
            <strong>Inscrito</strong>
            <span>✓</span>
          </div>
        ) : isFull ? (
          <div className="sold-out">
            <strong>Lotado</strong>
            <span>0 vagas</span>
          </div>
        ) : (
          <div className="available">
            <div className="vacancies">
              <strong>{event.availableSeats}</strong>
              <span>vagas restantes</span>
            </div>

            <button
              className="register-button"
              onClick={(e) => {
                e.stopPropagation();
                onRegister(event.id);
              }}
            >
              Inscrever-se
            </button>
          </div>
        )}

        <span className="arrow">→</span>
      </div>
    </article>
  );
}