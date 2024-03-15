import HomeScreen from "src/features/home/Home.screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <HomeScreen />,
});
