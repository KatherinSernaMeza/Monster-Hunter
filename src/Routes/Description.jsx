import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import monsterImg from "../assets/monster.png";

const Description = () => {
  const [monster, setMonster] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getMonster = async (id) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`https://mhw-db.com/monsters/${id}`);
      setMonster(response.data);
    } catch {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMonster(id);
  }, [id]);

  const listweakness = () => {
    return monster.weaknesses.map((weakness, index) => (
      <p key={index}> {weakness.element}</p>
    ));
  };

  const listLocations = () => {
    return monster.locations.map((location) => (
      <p key={location.id}> {location.name}</p>
    ));
  };

  return (
    <div>
      <h1>Monster</h1>
      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                {" "}
                <img style={{ width: "100%" }} src={monsterImg} alt="Logo" />
              </div>
              <div className="descriptionMonster" style={{ width: "50%" }}>
                <p>
                  <strong>Nombre:</strong>
                  {monster.name}
                </p>
                <p>
                  <strong>Type:</strong>
                  {monster.type}
                </p>
                <p>
                  <strong>Species:</strong>
                  {monster.species}
                </p>
                <p>
                  <strong>Description:</strong>
                  {monster.description}
                </p>
              </div>
            </div>
            <div
              className="paddingContainer"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h2>Locations</h2>
                {listLocations()}
              </div>
              <div>
                <h2>Weaknesses</h2>
                {listweakness()}
              </div>
            </div>
            <div
              className="paddingContainer"
              style={{ display: "flex", justifyItems: "flex-start" }}
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
        )}
      </div>
    </div>
  );
};

export default Description;
