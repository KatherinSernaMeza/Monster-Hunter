import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

const LocationDetail = ({ location }) => {
  return (
    <div>
      <h1> {location.name}</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>
            <Divider>Zone Count</Divider>
          </h2>
          <h2>
            {location.zoneCount}
            <Divider />
          </h2>
        </div>
        <div>
          <h3>Camps</h3>
          {location.camps.length == 0 ? (
            <p> 0</p>
          ) : (
            <ul>
              {location.camps.map((camp) => (
                <div key={location.camps.id} style={{ textAlign: "left" }}>
                  <li>
                    {camp.name} {camp.zone}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

LocationDetail.protoType = {
  location: PropTypes.array,
};

export default LocationDetail;
