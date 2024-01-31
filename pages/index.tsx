import Link from "next/link";
import Layout from "../components/Layout";
import { Box, Button } from "@mui/material";
import { Hero } from "../components/nav/Hero";
import { Details } from "../components/nav/Details";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const IndexPage = () => (
  <Layout>
    <Details />
  </Layout>
);

export default IndexPage;
