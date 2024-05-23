import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React from "react";
import Tile from "./Tile";
import Buttons from "./buttons";

const Grid = ({cards, setCards}) => {

  const handleInputChange = (event) => {
    let newCardsArray = [...cards];
    newCardsArray[event.target.name] = event.target.value;
    setCards(newCardsArray);
  };

  return (
    <>
    <div id="bingo" className="bingo">
      <Box p={1}>
        <Center>
            <SimpleGrid columns={3}>
              {cards.map((text, index) => {
                let isCenter = index === 12;
                return (
                  <Tile
                    text={text}
                    index={index}
                    onChange={handleInputChange}
                    isCenter={isCenter}
                  />
                );
              })}
            </SimpleGrid>
          </Center>
        </Box>
        </div>
      <Buttons cards={cards} setCards={setCards}/>
    </>
  );
}

export default Grid;
