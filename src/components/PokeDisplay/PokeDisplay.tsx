import { Datum, rareColors } from "../TypescriptTypes";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { typeColors } from "../TypescriptTypes";
import CardPopup from "../CardPopup/CardPopup";
import "./PokeDisplay.css";

export type PokeDisplayProps = {
  pokeData: { data: Datum[] } | null | undefined;
};

function PokeDisplay({ pokeData }: PokeDisplayProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState<Datum | null>(null);
  const itemsPerPage = 8; // Number of items to display per page

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  // Calculate the range of items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the slice of data to display on the current page
  const paginatedData = pokeData?.data.slice(startIndex, endIndex) || [];

  const handleCardClick = (pokeData: Datum) => {
    setSelectedCard(pokeData);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <CardPopup poksData={selectedCard} onClose={handleClosePopup} />
      {paginatedData.length > 0 ? (
        <>
          <Stack id="pagination" spacing={3}>
            <Pagination
              count={Math.ceil((pokeData?.data.length || 0) / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
          <ul className="pokeGrid">
            {paginatedData.map((poksData: Datum) => (
              <li key={poksData.id}>
                <h2 id="h2">{poksData.name}</h2>
                <div className="card_container">
                  <div
                    id="card"
                    className="menu__container"
                    onClick={() => handleCardClick(poksData)}
                  >
                    <img id="pokeImg" src={poksData.images.small} alt="" />
                  </div>
                </div>
                <p id="Att">
                  <span
                    id="typeColour"
                    style={{ color: typeColors[poksData.types[0]] }}
                  >
                    {poksData.types[0]}
                  </span>
                  <p
                    id="rareColour"
                    style={{
                      color: poksData?.rarity && rareColors[poksData.rarity],
                    }}
                  >
                    {poksData?.rarity}
                  </p>
                </p>
                <div className="attContainer">
                  <h3>
                    <span id="hp">Hp </span>
                    {poksData.hp}
                  </h3>
                  <h3>
                    <span id="market">
                      ${poksData.cardmarket?.prices.trendPrice}
                    </span>
                    {/* {poksData.attacks?.[0].damage ||
                        poksData.attacks?.[1].damage} */}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="loading">
            <img src="./Loading/pokeball Loading.gif" alt="" />
            <img src="./Loading/whos that pokemon.png" alt="" />
          </div>
        </>
      )}
    </>
  );
}

export default PokeDisplay;
