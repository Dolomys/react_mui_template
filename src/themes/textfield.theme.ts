import { COLORS } from "@utils/constants/colors.constant";
import { Components } from "@mui/material";

const textfield: Components = {
  MuiTextField: {
    defaultProps: { fullWidth: true },
    styleOverrides: {
      root: {
        "& .MuiInputBase-root": {
          borderRadius: "15px",
          backgroundColor: COLORS.textInputBackground,
        },
        "& .MuiOutlinedInput-root": { padding: 0 },
        "& fieldset": { border: "transparent" },
        "& .error": { border: `1px solid ${COLORS.error}`, borderRadius: "15px" },
        "& .MuiOutlinedInput-input": { padding: "10px 20px", height: "30px" },
        "& .MuiFormHelperText-root": { marginLeft: 0 },
      },
    },
    variants: [
      {
        props: { "aria-label": "white" },
        style: { "& .MuiInputBase-root": { backgroundColor: COLORS.white } },
      },
      {
        props: { "aria-label": "search" },
        style: { "& .MuiInputBase-root": { backgroundColor: COLORS.white, borderRadius: "50px" } },
      },
      { props: { size: "small" }, style: { "& .MuiOutlinedInput-input": { height: "40px" } } },
      {
        props: { "aria-label": "error" },
        style: {
          "& .MuiInputBase-root": { border: `1px solid ${COLORS.error}` },
          "& .MuiFormHelperText-root": { marginLeft: 0 },
        },
      },
    ],
  },
};
export default textfield;
