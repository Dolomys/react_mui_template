import { Divider, IconButton, Stack, Typography, alpha } from "@mui/material";
import { PAGES } from "@utils/constants/routes.constants";
import SidebarItem, { SidebarItemProps } from "./components/Sidebar.item";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { COLORS } from "@utils/constants/colors.constant";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import { TbSmartHome } from "react-icons/tb";
import { TbHome2 } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { TbSettings } from "react-icons/tb";
import { TbHelpSquareRounded } from "react-icons/tb";
import { PiUsers } from "react-icons/pi";

import { TbCalendarPin } from "react-icons/tb";

const sidebarItems: SidebarItemProps[] = [
  { icon: <RxDashboard />, label: "Dashboard", to: PAGES.HOME },
  { icon: <TbCalendarPin />, label: "Calendrier", to: PAGES.CALENDAR },
  { icon: <PiUsers />, label: "Tenants", to: PAGES.TENANTS },
  { icon: <TbHome2 />, label: "Housing", to: PAGES.HOUSING },
];

const bottomItems: SidebarItemProps[] = [
  { icon: <TbHelpSquareRounded />, label: "Get help", to: "" },
  { icon: <TbSettings />, label: "Settings", to: "" },
];

const Sidebar = () => {
  const [isBarExpended, setIsBarExpended] = useState(true);

  return (
    <Stack
      component={motion.div}
      sx={{
        padding: "30px 5px",
        height: "100dvh",
        borderRight: `1px solid ${COLORS.grey[200]}`,
        bgcolor: COLORS.white,
      }}
      layout
      animate={{ width: isBarExpended ? "200px" : "70px" }}
    >
      <Stack alignItems={"center"} justifyContent={"space-between"} height={"100%"}>
        <Stack spacing={5}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Stack
              sx={{
                p: "5px",
                borderRadius: "8px",
                bgcolor: alpha(COLORS.primary, 0.3),
                border: `1px solid ${COLORS.primary}`,
              }}
            >
              <TbSmartHome />
            </Stack>
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
        </Stack>
        <Stack spacing={2} width="100%">
          {bottomItems.map((item, i) => (
            <SidebarItem key={i} {...item} isExpended={isBarExpended} />
          ))}
          <Stack>
            <IconButton
              onClick={() => setIsBarExpended(!isBarExpended)}
              sx={{ cursor: "pointer", color: COLORS.primary }}
            >
              {isBarExpended ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
