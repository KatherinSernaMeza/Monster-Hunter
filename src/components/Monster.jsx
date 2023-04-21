import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Monster = ({ monster }) => {
  return (
    <>
      <div>
        <div style={{ display: "flex" }} className="ItemMonster">
          <p
            style={{
              paddingRight: "20px",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <strong style={{ paddingRight: "10px" }}>Name</strong>
            <Link to={`/${monster.id}`}>{monster.name}</Link>
          </p>
          <p
            style={{
              paddingRight: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong style={{ paddingRight: "10px" }}>Species</strong>
            {monster.species}
          </p>
          <p
            style={{
              paddingRight: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong>Type</strong>
            {monster.type}
          </p>
        </div>
      </div>
    </>
  );
};
Monster.protoType = {
  monster: PropTypes.obj,
};
export default Monster;
