import { useState, useEffect } from "react";
import FetchData from "../FetchedData/FetchedData";
import PokeDisplay, { PokeDisplayProps } from "../PokeDisplay/PokeDisplay";

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
      <PokeDisplay pokeData={fetchedData} />
    </>
  );
}
