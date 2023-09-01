import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Reyner Loza - Software Engineer</title>
        <meta
          property="og:description"
          content="Skilled Fullstack in Javascript, React, Typescript, NextJS, AWS Serverless. Check out my portfolio to see my latest projects."
        />
        <meta name="og:locale" content="en_US" />
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
};

export default Layout;
