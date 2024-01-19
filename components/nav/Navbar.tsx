import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const StyledTypography = styled(Typography)`
  margin-right: 24px;
`;
export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <Box></Box>
        <AdbIcon sx={{ display: "flex", mr: 3 }} />
        <StyledTypography variant="h6" noWrap>
          Home
        </StyledTypography>
        <StyledTypography variant="h6" noWrap>
          Cosa faccio
        </StyledTypography>
        <StyledTypography variant="h6" noWrap>
          La mia storia
        </StyledTypography>
      </Toolbar>
    </AppBar>
  );
};
