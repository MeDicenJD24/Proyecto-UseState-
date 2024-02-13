import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LikeButton from "./components/Buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Botón de Likes y Dislikes</h1>
    <LikeButton />
  </React.StrictMode>
);
