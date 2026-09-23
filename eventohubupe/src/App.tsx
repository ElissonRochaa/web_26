import { useState } from "react";
import Header from "./components/Header";
import ListagemEventos, {
  mockEvents,
} from "./pages/ListagemEventos";
import MinhasInscricoes from "./pages/MinhasInscricoes";
import type { Event } from "./types/Event";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "eventos" | "inscricoes"
  >("eventos");

  const [events, setEvents] =
    useState<Event[]>(mockEvents);

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {currentPage === "eventos" ? (
        <ListagemEventos
          events={events}
          setEvents={setEvents}
        />
      ) : (
        <MinhasInscricoes events={events} />
      )}
    </div>
  );
}

export default App;