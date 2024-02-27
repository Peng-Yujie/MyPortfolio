import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Yujie Peng</title>
      <meta
        name="description"
        content="Yujie Peng's portfolio, built with React, Next.js and Tailwind CSS"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
