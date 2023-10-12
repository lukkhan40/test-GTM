import React, { useState } from "react";
import { Helmet } from "react-helmet";

export const Event = () => {
  const [inputValue, setInputValue] = useState("")

  const onChange = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  const okButton = () => {
    console.log(inputValue);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black" }}>
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
      <form>
        <input />
        <button>OK form button</button>
      </form>
      <div style={{ marginTop: "10px" }}>
        <input value={inputValue} onChange={onChange} />
        <button onClick={okButton}>OK button</button>
      </div>
      <div style={{ marginTop: "10px" }}><input placeholder="simpleInput" /></div>
    </div>
  );
};
