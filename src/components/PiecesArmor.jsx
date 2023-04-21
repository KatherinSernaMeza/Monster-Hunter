import React from "react";
import PropTypes from "prop-types";
const PiecesArmor = ({ pieces }) => {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.id}>{piece.name} </li>
      ))}
    </ul>
  );
};
PiecesArmor.protoType = {
  pieces: PropTypes.array,
};
export default PiecesArmor;
