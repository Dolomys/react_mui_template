import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { COLORS } from "@utils/constants/colors.constant";
import { Link } from "@tanstack/react-router";

export interface SidebarItemProps {
  icon: ReactElement;
  label: string;
  to: string;
  isExpended?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, label, to, isExpended } = props;

  return (
    <Stack
      direction={isExpended ? "row" : "column"}
      alignItems={"center"}
      spacing={2}
      sx={{
        width: "100%",
        borderRadius: "12px",
        padding: isExpended ? "10px" : "10px 0px",
        textDecoration: "none",
        color: COLORS.grey[500],
      }}
      component={Link}
      to={to}
      activeProps={{
        style: {
          backgroundColor: COLORS.primary,
          color: COLORS.white,
        },
      }}
    >
      {icon}
      {isExpended && <Typography fontSize={"1rem"}>{label}</Typography>}
    </Stack>
  );
};

export default SidebarItem;
