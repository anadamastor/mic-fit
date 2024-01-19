import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <AdbIcon sx={{ mr: 3 }} />
        <Box display={"flex"} flexDirection={"row"}>
          <Typography variant="h6" noWrap sx={{ mr: 3 }}>
            Home
          </Typography>
          <Typography variant="h6" noWrap sx={{ mr: 3 }}>
            Cosa faccio
          </Typography>
          <Typography variant="h6" noWrap sx={{ mr: 3 }}>
            La mia storia
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
