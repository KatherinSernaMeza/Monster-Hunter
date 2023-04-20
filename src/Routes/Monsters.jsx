import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMonsters = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get("https://mhw-db.com/monsters");
      setMonsters(result.data);
    } catch {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMonsters();
  }, []);

  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>List Monsters</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        monsters.map((monster) => (
          <div key={monster.id}>
            <div style={{ display: "flex" }} className="ItemMonster">
              <p style={{ paddingRight: "20px" }}>
                <strong style={{ paddingRight: "10px" }}>Name :</strong>
                <Link to={`/${monster.id}`}>{monster.name}</Link>
              </p>
              <p style={{ paddingRight: "20px" }}>
                <strong style={{ paddingRight: "10px" }}>Species :</strong>
                {monster.species}
              </p>
              <p style={{ paddingRight: "20px" }}>
                <strong>Type :</strong>
                {monster.type}
              </p>
            </div>
          </div>
        ))
      )}
      ;{error ? "Hay un error" : ""}
    </div>
  );
};

export default Monsters;
