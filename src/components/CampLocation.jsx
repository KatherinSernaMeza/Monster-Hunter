import React from "react";
import PropTypes from "prop-types";

const CampLocation = ({ camps }) => {
  return (
    <>
      {camps.length == 0 ? (
        <p>No hay camps.</p>
      ) : (
        camps.map((camp) => (
          <ul key={camp.id}>
            <li>
              <strong>Name: </strong> {camp.name}{" "}
              <strong style={{ paddingLeft: "20px" }}>Zone: </strong>
              {camp.zone}
            </li>
          </ul>
        ))
      )}
    </>
  );
};
CampLocation.protoType = {
  camps: PropTypes.array,
};
export default CampLocation;
