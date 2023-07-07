import { PokeDisplayProps } from "../PokeDisplay/PokeDisplay";

export default async function FetchData(newData: PokeDisplayProps) {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards?id=${newData.pokeData}`, {
    headers: {
      "X-Api-Key": process.env.REACT_APP_POKE_KEY || "",
    },
  });
  const pokeData = await response.json();
  console.log(pokeData); 
  return pokeData;

}
