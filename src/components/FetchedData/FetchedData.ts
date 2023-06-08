import { PokeDisplayProps } from "../PokeDisplay/PokeDisplay";

export default async function FetchData(newData: PokeDisplayProps) {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards?id=${newData.pokeData}`, {
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY || "",
    },
  });
  const pokeData = await response.json();
  return pokeData;
}
