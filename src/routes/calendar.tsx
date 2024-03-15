import CalendarScreen from "src/features/calendar/Calendar.screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calendar")({
  component: () => <CalendarScreen />,
});
