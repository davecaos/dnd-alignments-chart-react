import { VStack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const CARD_TITLES = [
  "Lawful good",
  "Neutral good",
  "Chaotic good",
  "Neutral Lawful",
  "True neutral",
  "Chaotic neutral",
  "Lawful evil",
  "Neutral evil",
  "Chaotic evil"];

const Tiles = ({ text, onChange, index }) => {
  const isCentralTile = index == 1 || index == 4 || index == 7;
  return (
    <VStack>
    <Textarea
      w="200px"
      h="200px"
      border="2px"
      fontSize={32}
      borderColor="black.200"
      borderRadius="0"
      marginRight= {isCentralTile ? "25px":""}
      marginLeft= {isCentralTile ? "25px":""}
      marginBottom="0px"
      textAlign={[ 'center' ]}
      style={{
        whiteSpace: "normal",
        fontWeight: "bold",
        wordWrap: "break-all",
        textJustify: "inter-word"
      }}
      color={"#00000"}
      value={text}
      backgroundColor={"#ffffff"}
      name={index}
      onChange={onChange}
    />
    <Text 
      fontSize='2xl'
      color={"#00000"}
    >
    {CARD_TITLES[index]}
    </Text>
    </VStack>
  );
}

export default Tiles;
