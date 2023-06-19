import React from "react";
import { Helmet } from "react-helmet";

export const Event = () => {
  return (
    <div>
      <Helmet>
        <meta property="og:type" content="webpage" />
        <title>Event</title>
        <meta property="og:title" content="Main" />
        <meta
          property="og:url"
          content="https://test-gtm-prerender.netlify.app"
        />
        <meta
          property="og:image"
          content="https://boletomovil.s3.amazonaws.com/boletos/events/event_1625829591856"
        />
        <meta name="description" content="Event" />
        <meta property="og:description" content="Descripcion del evento" />
      </Helmet>
      Page Event
    </div>
  );
};
