import React from "react";
import { greenButton } from "../constants/colors";
import { Button } from "@chakra-ui/react";
import {TILE_NUMBER} from "../constants";

export default function BlankTemplateButton({ cards, setCards }) {

  const blankBingo = () => {
    setCards(new Array(TILE_NUMBER).fill(""))
  };

  return (
    <Button  bg={greenButton} onClick={blankBingo} ml={3}>
      Blank Template
    </Button>
  );
}
