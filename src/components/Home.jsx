import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const images = [
  "https://m.media-amazon.com/images/I/81U5UoglgHL._AC_UF1000,1000_QL80_.jpg",
  "https://boletomovil.s3.amazonaws.com/event-images/mobile_1684534992874",
  "https://boletomovil.s3.amazonaws.com/event-images/mobile_1682443518651",
];

const tickets = [
  { price: 20, seat: 1, zone: "Superior 1" },
  { price: 30, seat: 2, zone: "Superior 2" },
  { price: 50, seat: 3, zone: "Superior 3" },
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

  const onPurchase = () => {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: "purchase",
      ecommerce: {
        value: 300,
        currency: "MXN",
        items: [
          {
            item_name: "Asiento 4, zona Superior 1",
            price: 100,
            currency: "MXN",
          },
          {
            item_name: "Asiento 5, zona Superior 2",
            price: 100,
            currency: "MXN",
          },
          {
            item_name: "Asiento 6, zona Superior 3",
            price: 100,
            currency: "MXN",
          },
        ],
      },
    });
    // if (window.dataLayer)
    //   window.dataLayer.push({
    //     'event': 'purchaseTest3',
    //     'ecommerce': {
    //       'purchase': {
    //         'transaction_id': '12345',   // ID único de la transacción
    //         'value': 100.00,             // Valor total de la compra
    //         'currency': 'MXN',           // Moneda de la compra
    //         'items': [
    //           {
    //             'item_id': 'SKU123',      // ID único del producto
    //             'item_name': 'Producto A',// Nombre del producto
    //             'quantity': 2,            // Cantidad de productos comprados
    //             'price': 50.00            // Precio unitario del producto
    //           }
    //           // Puedes agregar más objetos de 'items' para otros productos comprados si es necesario.
    //         ]
    //       }
    //     }
    //   });

  };

  return (
    <>
      {selectedImage && (
        <Helmet>
          <title>Home</title>
          <meta property="og:title" content="Home" />
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
        <h1>Seats</h1>
        <div>
          {tickets.map((ticket) => (
            <div
              key={ticket.zone}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label>Asiento: {ticket.seat}</label>
              <label>Zone: {ticket.zone}</label>
              <label>Precio: ${ticket.price}</label>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "50px" }}>
          <button type="button" onClick={onPurchase}>
            Comprar $300
          </button>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
};
