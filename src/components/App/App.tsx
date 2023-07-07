import { useState, useEffect } from "react";
import "./App.css";
import FetchData from "../FetchedData/FetchedData";
import PokeDisplay, { PokeDisplayProps } from "../PokeDisplay/PokeDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/Profile";

export default function App() {
  const [fetchedData, setFetchedData] =
    useState<PokeDisplayProps["pokeData"]>(null);

  useEffect(() => {
    fetchPokeData();

    async function fetchPokeData() {
      try {
        const data = await FetchData({
          pokeData: null,
        });
        console.log(data);
        setFetchedData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="homepage">
                <img
                  id="pokemonTitle"
                  src="/Loading/pokemon title.png"
                  alt=""
                />
                <h2>Click on the card to find out more below</h2>
              </section>
              <section className="mainContent">
                <PokeDisplay pokeData={fetchedData} />
              </section>
            </>
          }
        />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
