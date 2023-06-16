import React from "react";
import { Helmet } from "react-helmet";

export const Root = () => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="webpage" />
        <title>Main</title>
        <meta property="og:title" content="Main" />
        <meta
          property="og:url"
          content="https://648ccb10b95209143f052fc5--stalwart-starburst-94ac15.netlify.app/"
        />
        <meta
          name="image"
          content="https://m.media-amazon.com/images/I/81U5UoglgHL._AC_UF1000,1000_QL80_.jpg"
        />
        <meta
          property="og:image"
          content="https://m.media-amazon.com/images/I/81U5UoglgHL._AC_UF1000,1000_QL80_.jpg"
        />
        <meta name="description" content="Home" />
        <meta property="og:description" content="Home" />
      </Helmet>
      <div id="sidebar">
        <h1>Main page</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};
