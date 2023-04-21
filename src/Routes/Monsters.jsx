import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import MonsterCard from "../components/MonsterCard";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

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
    <div style={{ paddingTop: "50px", maxWidth: "1200px" }}>
      <h1>List Monsters</h1>

      <Grid container spacing={3}>
        {loading ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : (
          monsters.map((monster) => (
            <Grid item xs={4}>
              <Link to={`/${monster.id}`}>
                <MonsterCard key={monster.id} monster={monster} />
              </Link>
            </Grid>
          ))
        )}
        {error ? "Hay un error" : ""}
      </Grid>
    </div>
  );
};

export default Monsters;
