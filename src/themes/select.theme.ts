import { COLORS } from "@utils/constants/colors.constant";
import { Components } from "@mui/material";

const selectTheme: Components = {
  MuiSelect: {
    defaultProps: { fullWidth: true },
    styleOverrides: {
      root: (props) => ({
        ...(props.ownerState["aria-label"] === "form"
          ? {
              borderRadius: "15px",
              backgroundColor: COLORS.textInputBackground,
              "& fieldset": { border: "none" },
              "& .MuiOutlinedInput-input": {
                padding: "10px 20px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              },
              "& .MuiSelect-icon": {
                right: "15px",
                top: "calc(50% - 12px)",
              },
            }
          : {
              textTransform: "none",
              borderRadius: "24px",
              height: "48px",
              "& fieldset": { border: "none" },
              "&:hover": {
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              },
            }),
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "#F5F5F5",
          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
  },
};
export default selectTheme;
