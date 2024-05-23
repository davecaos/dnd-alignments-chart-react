import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";

import Grid from "./components/Grid";
import {TILE_NUMBER} from "./constants";
import "./App.css";

const getQueryParams = () => {
  let currentURL = window.location.href; // returns the absolute URL of a page
  const url = new URL(currentURL);
  return new URLSearchParams(url.search);
}

const initializeTiles = (queryParams) => {
  let initialTiles = new Array(TILE_NUMBER).fill("");
  for (let p of queryParams) {
    let key = p[0];
    let value = p[1];
    if ((key) => 0 && key <= TILE_NUMBER) initialTiles[parseInt(key)] = value;
  }
  return initialTiles;
}

const App = () => {
  let queryParams = getQueryParams();
  let tilesFromQueryParams = initializeTiles(queryParams);
  let [cards, setCards] = useState(tilesFromQueryParams);

  return (
    <ChakraProvider>
      <div className="App">
         <Grid cards={cards} setCards={setCards}/>
      </div>
    </ChakraProvider>
  );
}

export default App;