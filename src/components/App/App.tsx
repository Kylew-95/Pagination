import { useState, useEffect } from "react";
import FetchData from "../FetchedData/FetchedData";
import PokeDisplay, { PokeDisplayProps } from "../PokeDisplay/PokeDisplay";
import "./App.css";

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
    <>
      <section className="homepage">
        <img src="/Loading/pokemon title.png" alt="" />
        <h2>Click on the card to find out more below</h2>
      </section>
      <section>
        <PokeDisplay pokeData={fetchedData} />
      </section>
    </>
  );
}
