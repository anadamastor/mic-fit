import { Container } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Michela Mancini" }: Props) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Michela Mancini Fitness" />
      <meta
        property="og:description"
        content="Istruttrice Boxe Thailandese Federkombat..."
      />
      <meta property="og:image" content="images/pic_michi.jpg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="400" />
      <title>Michela Mancini Fitness</title>
    </Head>
    <Container
      sx={{
        bgcolor: "#4158D0",
        pb: "50px",
        backgroundImage:
          " linear-gradient(40deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      {children}
    </Container>
  </>
);

export default Layout;
