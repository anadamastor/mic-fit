import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Navbar } from "./nav/Navbar";
import { Footer } from "./nav/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Michela Mancini" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
        <Navbar />

    {children}
    <footer>
      <hr />
      <Footer></Footer>{" "}
    </footer>
  </div>
);

export default Layout;
