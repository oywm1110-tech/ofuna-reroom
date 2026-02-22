export interface EventData {
  date: string;
  day: string;
  title: string;
  dj: string;
  badge: string;
  badgeColor: string;
  type: string;
}

export const eventMonthLabel = "FEB 2026";

export const events: EventData[] = [
  {
    date: "02.14",
    day: "FRI",
    title: "VALENTINE ROCK NIGHT",
    dj: "Resident DJ",
    badge: "SPECIAL",
    badgeColor: "bg-brand-red",
    type: "DJ EVENT",
  },
  {
    date: "02.21",
    day: "FRI",
    title: "90s UK ROCK SPECIAL",
    dj: "Guest DJ Select",
    badge: "GUEST",
    badgeColor: "bg-brand-gold text-black",
    type: "DJ EVENT",
  },
  {
    date: "02.28",
    day: "SAT",
    title: "VINYL ONLY SESSION",
    dj: "BYOR — Bring Your Own Records",
    badge: "",
    badgeColor: "",
    type: "OPEN DECK",
  },
];
