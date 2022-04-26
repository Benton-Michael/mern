import React from "react";
import { useParams } from "react-router-dom";

const ParamsComponent = (props) => {
  // destructure the useParams hook
  const { word, color, bgColor } = useParams();

  return (
    <div>
      {/* built-in method to check if this is a word or number */}
      {isNaN(word) ? (
        <p style={color ? { color: color, backgroundColor: bgColor } : null}>
          Oh.. Yep that is indeed a word: {word}
        </p>
      ) : (
        <p>Regardez! Mes Amis! C'est un nombre: {word} </p>
      )}
    </div>
  );
};

export default ParamsComponent;
