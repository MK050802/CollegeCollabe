import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-5u7qmkncmjqmgl6e.us.auth0.com"
    clientId="Fc1nea6G4ru092ab2bc7pSoI67U7h5oh"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
