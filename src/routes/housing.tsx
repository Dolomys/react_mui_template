import HousingScreen from "src/features/housing/Housing.screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/housing")({
  component: () => <HousingScreen />,
});
