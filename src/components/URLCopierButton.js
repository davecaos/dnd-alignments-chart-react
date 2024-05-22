import React from "react";
import { greenButton } from "../constants/colors";
import { useClipboard, useToast, Button } from "@chakra-ui/react";

export default function URLCopierButton({ cards }) {
  const queryParams = cards
    .map((text, index) => (text ? `${index}=${text}&` : ""))
    .join("");
  let currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname  // returns the absolute URL of a page
  const url = currentURL
  const pathname = url + "?" + queryParams;
  const { _hasCopied, onCopy } = useClipboard(pathname);
  const toast = useToast();

  const handleCopy = () => {
    toast({
      title: "Copied to clipboard!",
      position: "bottom-right",
      description: pathname,
      duration: 2000,
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <Button  bg={greenButton} onClick={handleCopy}ml={3}>
      Share editable link
    </Button>
  );
}
