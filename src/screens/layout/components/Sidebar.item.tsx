import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { COLORS } from "@constants/colors.constant";
import { PageValues } from "@constants/routes.constants";

export interface SidebarItemProps {
  icon: ReactElement;
  label: string;
  to: PageValues;
  isExpended?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, label, to, isExpended } = props;

  const isActive: any = ({ isActive }: any) =>
    isActive ? { backgroundColor: COLORS.primary, color: COLORS.white } : undefined;

  return (
    <Stack
      direction={isExpended ? "row" : "column"}
      alignItems={"center"}
      spacing={2}
      sx={{ width: "100%", borderRadius: "12px", padding: "10px", textDecoration: "none", color: COLORS.primary }}
      component={NavLink}
      to={to}
      style={isActive}
    >
      {icon}
      {isExpended && <Typography>{label.toUpperCase()}</Typography>}
    </Stack>
  );
};

export default SidebarItem;
