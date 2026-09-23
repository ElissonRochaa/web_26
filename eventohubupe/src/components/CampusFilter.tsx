interface CampusFilterProps {
  selectedCampus: "Todos os campi" | "Recife" | "Garanhuns";
  onChange: (
    campus: "Todos os campi" | "Recife" | "Garanhuns"
  ) => void;
}

export default function CampusFilter({
  selectedCampus,
  onChange,
}: CampusFilterProps) {
  return (
    <div className="campus-filter">
      <button
        className={
          selectedCampus === "Todos os campi"
            ? "filter-active"
            : ""
        }
        onClick={() => onChange("Todos os campi")}
      >
        Todos os campi
      </button>

      <button
        className={
          selectedCampus === "Recife"
            ? "filter-active"
            : ""
        }
        onClick={() => onChange("Recife")}
      >
        Recife
      </button>

      <button
        className={
          selectedCampus === "Garanhuns"
            ? "filter-active"
            : ""
        }
        onClick={() => onChange("Garanhuns")}
      >
        Garanhuns
      </button>
    </div>
  );
}