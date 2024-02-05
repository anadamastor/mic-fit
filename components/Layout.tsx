import { Container } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Michela Mancini" }: Props) => (
  <Container
    sx={{
      bgcolor: "#4158D0",
      height: "98vh",
      paddn: "0px",
      backgroundImage:
        " linear-gradient(40deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    }}
  >
    {children}
  </Container>
);

export default Layout;
