interface HeaderProps {
  currentPage: "eventos" | "inscricoes";
  onNavigate: (page: "eventos" | "inscricoes") => void;
}

export default function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand-area">
          <h1 className="logo">
            Evento<span>Hub</span> UPE
          </h1>

          <p>
            Olá, Maria Eduarda — veja o que está rolando nos campi.
          </p>
        </div>

        <nav className="main-menu">
          <button
            className={currentPage === "eventos" ? "menu-active" : ""}
            onClick={() => onNavigate("eventos")}
          >
            Eventos
          </button>

          <button
            className={currentPage === "inscricoes" ? "menu-active" : ""}
            onClick={() => onNavigate("inscricoes")}
          >
            Minhas inscrições
          </button>

          <button className="logout-button">
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
}