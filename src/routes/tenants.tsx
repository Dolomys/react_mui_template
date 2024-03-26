import TenantsScreen from "@features/auth/tenant/Tenants.screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tenants")({
  component: () => <TenantsScreen />,
});
