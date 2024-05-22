import { ChakraProvider, VStack } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Tiles from "./components/Tiles";
import {TILE_NUMBER} from "./constants";
import "./App.css";


function App() {
  let currentURL = window.location.href; // returns the absolute URL of a page
  const url = new URL(currentURL);
  let params = new URLSearchParams(url.search);

  let cardsFromQueryParams = new Array(TILE_NUMBER).fill("");

  for (let p of params) {
    let key = p[0];
    let value = p[1];
    if ((key) => 0 && key <= TILE_NUMBER) cardsFromQueryParams[parseInt(key)] = value;
  }

  let [cards, setCards] = useState(cardsFromQueryParams);

  const handleInputChange = (event) => {
    let newCardsArray = [...cards];
    newCardsArray[event.target.name] = event.target.value;
    setCards(newCardsArray);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <div id="dnd" className="dnd">
          <VStack >
            <Box p={1}>
              <Center>
                <SimpleGrid columns={3}>
                  {cards.map((text, index) => {
                    return (
                      <Tiles
                        text={text}
                        index={index}
                        onChange={handleInputChange}
                      />
                    );
                  })}
                </SimpleGrid>
              </Center>
            </Box>
            
          </VStack>
        </div>
        <Buttons cards={cards} setCards={setCards}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
