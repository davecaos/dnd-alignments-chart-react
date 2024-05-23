import { Box } from "@chakra-ui/react";
import React from "react";
import URLCopierButton from "./URLCopierButton";
import ImageSaveButton from "./ImageSaveButton";
import BlankTemplateButton from "./BlankTemplateButton";

const Buttons = ({ cards, setCards}) => {
    return (
      <Box p={2}>
        <URLCopierButton cards={cards} />
        <ImageSaveButton />
        <BlankTemplateButton  cards={cards} setCards={setCards}/>
      </Box>
    );
  };

export default Buttons;