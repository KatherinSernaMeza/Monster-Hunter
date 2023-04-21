import React from "react";
import PropTypes from "prop-types";
const BonusArmor = ({ bonus }) => {
  return bonus === null ? (
    <p>No hay Bonus</p>
  ) : (
    <ul>
      {bonus.map((bon) => (
        <li key={bon.id}>{bon.name} </li>
      ))}
    </ul>
  );
};

BonusArmor.propTypes = {
  bonus: PropTypes.object,
};

export default BonusArmor;
