import React, { useState } from "react";
import "./Buttons.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Buttons = () => {
  // Utilizamos el hook useState para mantener el estado del contador de likes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Función para incrementar los likes cuando se hace clic en el botón
  const incrementLikes = () => {
    setLikes(prev => prev + 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="container-all">
      <div className="container">
        <h2 className="likes-dislikes">{likes} Likes</h2>
        <h2 className="likes-dislikes">{dislikes} Dislikes</h2>

        <button className="button" onClick={incrementLikes}>
          <FaThumbsUp /> Me gusta
        </button>

        <button className="button dislike" onClick={incrementDislikes}>
          <FaThumbsDown /> No me gusta
        </button>
      </div>
    </div>
  );
};

export default Buttons;
