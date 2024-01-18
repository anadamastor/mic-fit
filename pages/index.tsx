import Link from "next/link";
import Layout from "../components/Layout";
import { Box, Button } from "@mui/material";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box mt={3}>
      <Button variant="contained">Scemo chi clicca</Button>
    </Box>

    <h1>Ciao MICHI 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
