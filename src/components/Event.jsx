import React from "react";
import { Helmet } from "react-helmet";

export const Event = () => {
  return (
    <div>
      <Helmet>
        <title>Event</title>
        <meta property="og:title" content="Event" />
        <meta
          property="og:image"
          content="https://boletomovil.s3.amazonaws.com/boletos/events/event_1625829591856"
        />
        <meta name="description" content="Descripcion del evento" />
        <meta property="og:description" content="Descripcion del evento" />
      </Helmet>
      Page Event
    </div>
  );
};
