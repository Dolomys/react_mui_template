import { Card, Divider, IconButton, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { PAGES } from "@constants/routes.constants";
import GroupIcon from "@mui/icons-material/Group";
import GridViewIcon from "@mui/icons-material/GridView";
import SidebarItem, { SidebarItemProps } from "./components/Sidebar.item";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { COLORS } from "@constants/colors.constant";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import Logo from "src/assets/images/immoLogo.png";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const sidebarItems: SidebarItemProps[] = [
  { icon: <GridViewIcon />, label: "home", to: PAGES.HOME },
  { icon: <CalendarTodayIcon />, label: "calendrier", to: PAGES.CALENDAR },
  { icon: <GroupIcon />, label: "clients", to: PAGES.TENANTS },
  { icon: <HomeWorkIcon />, label: "Housing", to: PAGES.HOUSING },
];

const Sidebar = () => {
  const [isBarExpended, setIsBarExpended] = useState(true);

  return (
    <Card sx={{ padding: "20px", height: "90dvh", borderRadius: "20px" }}>
      <Stack
        component={motion.div}
        layout
        animate={{ width: isBarExpended ? "180px" : "70px" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Stack spacing={5}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <img width="50px" height="50px" src={Logo} />
            {isBarExpended && (
              <Typography fontWeight={900} fontSize={"24px"} color={COLORS.primary}>
                ImmoFlow
              </Typography>
            )}
          </Stack>
          <Divider />
          <Stack spacing={2}>
            {sidebarItems.map((item, i) => (
              <SidebarItem key={i} {...item} isExpended={isBarExpended} />
            ))}
          </Stack>
          <Divider />
        </Stack>
        <IconButton onClick={() => setIsBarExpended(!isBarExpended)} sx={{ cursor: "pointer" }}>
          {isBarExpended ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>
      </Stack>
    </Card>
  );
};

export default Sidebar;
