import { Box } from "@chakra-ui/react";
import React from "react";
import URLCopierButton from "./URLCopierButton";
import ImageSaveButton from "./ImageSaveButton";
import BlankTemplateButton from "./BlankTemplateButton";

export default function Buttons({ cards , setCards}){
    return (
      <Box 
        justifyContent="stretch"
        marginTop="15px">
        <URLCopierButton cards={cards} />
        <ImageSaveButton />
        <BlankTemplateButton  cards={cards} setCards={setCards}/>
      </Box>
    );
  };


