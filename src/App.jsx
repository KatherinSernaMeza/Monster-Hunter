import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import Monsters from "./Routes/Monsters";
import Description from "./Routes/Description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monsters" element={<Monsters />} />
          <Route path="/:id" element={<Description />} />
          <Route path="*" element={<h1> Error </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
