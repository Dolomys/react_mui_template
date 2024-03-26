import { Components, alpha } from "@mui/material";
import { COLORS } from "../utils/constants/colors.constant";

const iconButton: Components = {
  MuiIconButton: {
    styleOverrides: {
      root: (props) => ({
        ...(props.ownerState["aria-label"] === "rounded"
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "35px",
              backgroundColor: alpha(COLORS.secondary, 0.1),
              cursor: "pointer",
              backgroundPosition: "center",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0,0,0, 0.05)",
              height: "105px",
              width: "105px",
              "&.Mui-disabled": {
                backgroundColor: "rgba(232,97,77, 0.1)",
              },
              ":hover": {
                backgroundColor: alpha(COLORS.secondary, 0.2),
              },
              "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                borderRadius: "15px",
                backgroundColor: alpha(COLORS.secondary, 0.2),
              },
            }
          : props.ownerState["aria-label"] === "iconRounded"
            ? {
                width: "40px",
                height: "40px",
                border: `1px solid ${COLORS.grey[200]}`,
                backgroundColor: COLORS.white,
                "&.Mui-disabled": {
                  backgroundColor: COLORS.grey[200],
                },
                "&:hover": {
                  backgroundColor: COLORS.grey[200],
                },
              }
            : {}),
      }),
    },
  },
};
export default iconButton;
