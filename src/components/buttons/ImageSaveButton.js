import { Button } from "@chakra-ui/react";
import React from "react";
import domtoimage from "dom-to-image";
import { greenButton } from "../../constants/colors";

const ImageSaveButton = () => {
  const image = () => {
    domtoimage
      .toJpeg(document.getElementById("bingo"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "bingo.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <Button bg={greenButton} onClick={image} ml={3}>
      Save as Image
    </Button>
  );
}

export default ImageSaveButton;