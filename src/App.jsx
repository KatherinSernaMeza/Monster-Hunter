import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import Monsters from "./Routes/Monsters";
import Description from "./Routes/Description";
import Locations from "./Routes/Locations";
import Location from "./Routes/Location";
import Armors from "./Routes/Armors";
import Armor from "./Routes/Armor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monsters" element={<Monsters />} />
          <Route path="/:id" element={<Description />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:idLocation" element={<Location />} />
          <Route path="armors" element={<Armors />} />
          <Route path="armors/:idArmor" element={<Armor />} />
          <Route path="*" element={<h1> Error </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
