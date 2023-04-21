import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ListPieceArmor from "../components/ListPieceArmor";
import ArmorRank from "../components/ArmorRank";

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
      <h1>Armor</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1 style={{ textAlign: "left" }}> {armor.name}</h1>
          <div style={{ display: "flex" }}>
            <ArmorRank armor={armor} />
          </div>
          <ListPieceArmor armor={armor} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "10px",
        }}
      >
        <button
          style={{ backgroundColor: "#1976d2", color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Armor;
