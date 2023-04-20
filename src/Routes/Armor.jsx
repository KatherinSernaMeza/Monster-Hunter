import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Armor = () => {
  const [armor, setArmor] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { idArmor } = useParams();
  const navigate = useNavigate();

  const getArmor = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        "https://mhw-db.com/armor/sets/" + idArmor
      );
      console.log(response.data);
      setArmor(response.data);
    } catch {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };
  useEffect((idArmor) => {
    getArmor(idArmor);
  }, []);
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {armor.name} {armor.rank}
          {armor.pieces.map((piece) => (
            <div key={piece.id}>
              <p>
                {piece.name} {piece.type} {piece.rank} {piece.rarity}{" "}
                {piece.assets.imageMale}
              </p>
            </div>
          ))}
        </div>
      )}
      <button
        style={{ backgroundColor: "#1976d2", color: "white" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Armor;
