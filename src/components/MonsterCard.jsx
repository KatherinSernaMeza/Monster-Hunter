import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import monsterImg from "../assets/monster.png";
import Monster from "../components/Monster";
import PropTypes from "prop-types";

const MonsterCard = ({ monster }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={monsterImg}
        alt="Paella dish"
        style={{ marginTop: "20px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Monster monster={monster} />
        </Typography>
      </CardContent>
    </Card>
  );
};
MonsterCard.propTypes = {
  monster: PropTypes.object,
};
export default MonsterCard;
