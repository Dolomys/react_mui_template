import TenantsScreen from "src/features/tenant/Tenants.screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tenants")({
  component: () => <TenantsScreen />,
});
