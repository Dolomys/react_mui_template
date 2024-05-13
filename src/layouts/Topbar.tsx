import { InputAdornment, Stack, TextField } from "@mui/material";
import { TbSearch } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { COLORS } from "@utils/constants/colors.constant";

const Topbar = () => {
  return (
    <Stack sx={{ width: "100%" }} direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={3}>
      <TextField
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{ pl: "10px" }} position="start">
              <TbSearch />
            </InputAdornment>
          ),
        }}
      />
      <Stack sx={{ bgcolor: COLORS.background, p: "5px", borderRadius: "50%" }}>
        <IoMdNotificationsOutline size={20} />
      </Stack>
    </Stack>
  );
};

export default Topbar;
