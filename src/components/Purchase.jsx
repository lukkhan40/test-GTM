import React from "react";
import { Helmet } from "react-helmet";

export const Purchase = () => {
  return (
    <div>
      <Helmet>
        <meta property="og:type" content="webpage" />
        <title>Purchase</title>
        <meta property="og:title" content="Purchase" />
        <meta
          property="og:url"
          content="https://test-gtm-prerender.netlify.app"
        />
        <meta
          property="og:image"
          content="https://boletomovil.com/baseballMovil.jpg"
        />
        <meta name="description" content="Purchase description" />
        <meta property="og:description" content="Purchase description" />
      </Helmet>
      page purchase
    </div>
  );
};
