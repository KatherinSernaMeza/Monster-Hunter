import React from "react";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";

const ArmorRank = ({ armor }) => {
  const isBonus = (armor) => (armor.bonus === null ? "0" : armor.bonus.length);

  return (
    <>
      <h2 style={{ textAlign: "left", marginTop: "8px" }}>{armor.rank}</h2>
      <div
        style={{
          width: "100%",
          border: "1px solid",
          marginLeft: "30px",
          height: "50px",
        }}
      >
        <div
          style={{
            width: "25%",
            backgroundColor: "yellow",
            height: "50px",
          }}
        ></div>
      </div>
      <Badge badgeContent={armor?.bonus?.length ?? <p>0</p>} color="primary">
        <Chip label="Bonus" />
      </Badge>
    </>
  );
};
ArmorRank.propTypes = {
  armor: PropTypes.object,
};
export default ArmorRank;
