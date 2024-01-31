import { Container } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Michela Mancini" }: Props) => (
  <Container sx={{ bgcolor: "black", height: "100vh" }}>{children}</Container>
);

export default Layout;
