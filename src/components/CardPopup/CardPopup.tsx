import React from "react";
import { CardPopupProps } from "../TypescriptTypes";
import { Button } from "@mui/material";
import ".//Cardpopup.css";

function CardPopup({ poksData, onClose }: CardPopupProps) {
  if (!poksData) {
    return null; // Render nothing if poksData is null
  }

  function handlesUrl() {
    window.open(poksData?.tcgplayer?.url);
  }

  return (
    <>
      <div className="overlay"></div>
      <h3 className="card-popup-content">CLICK ON THE CARD TO FIND OUT MORE</h3>
      <div className="card-popup">
        <img
          id="largeSize"
          src={poksData.images.large}
          alt={poksData.name}
          onClick={handlesUrl}
        />
        <Button variant="contained" className="close-button" onClick={onClose}>
          Close
        </Button>
      </div>
    </>
  );
}

export default CardPopup;
