import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const images = [
  "https://m.media-amazon.com/images/I/81U5UoglgHL._AC_UF1000,1000_QL80_.jpg",
  "https://boletomovil.s3.amazonaws.com/event-images/mobile_1684534992874",
  "https://boletomovil.s3.amazonaws.com/event-images/mobile_1682443518651",
];

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const selectRandomImage = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const imageIndex = selectRandomImage(0, 2);
    setSelectedImage(images[imageIndex]);
  }, []);

  return (
    <>
      {selectedImage && (
        <Helmet>
          <meta property="og:type" content="webpage" />
          <title>Home</title>
          <meta property="og:title" content="Home" />
          <meta
            property="og:url"
            content="https://test-gtm-prerender.netlify.app"
          />
          <meta name="image" content={selectedImage} />
          <meta property="og:image" content={selectedImage} />
          <meta name="description" content="Descripcion del Home, test" />
          <meta
            property="og:description"
            content="Descripcion del Home, test"
          />
        </Helmet>
      )}
      <div id="sidebar">
        <h1>Main page</h1>
      </div>
      <div id="detail"></div>
    </>
  );
};
