export interface Event {
  id: number;
  title: string;
  day: number;
  month: string;
  location: string;
  campus: "Recife" | "Garanhuns";
  availableSeats: number;
  description?: string;
  registered?: boolean;
}