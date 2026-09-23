import type { Event } from "../types/Event";

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
  onRegister: (eventId: number) => void;
}

export default function EventDetails({
  event,
  onClose,
  onRegister,
}: EventDetailsProps) {
  return (
    <div className="details-overlay">
      <div className="details-card">
        <button
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>

        <div className="details-content">
          <span className="details-label">
            DETALHES DO EVENTO
          </span>

          <h2>{event.title}</h2>

          <div className="details-placeholder">
            <p>
              Informações detalhadas do evento serão
              apresentadas aqui posteriormente.
            </p>
          </div>

          {!event.registered && event.availableSeats > 0 && (
            <button
              className="details-register-button"
              onClick={() => onRegister(event.id)}
            >
              Inscrever-se
            </button>
          )}

          {event.registered && (
            <div className="details-registered">
              ✓ Você está inscrito neste evento.
            </div>
          )}

          {event.availableSeats <= 0 && !event.registered && (
            <div className="details-full">
              Este evento está lotado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}