import { Center, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function Title() {
  return (
    <Center marginBottom="5px">
      <Box p={2}>
        <Text fontSize="2em">Dungeons&Dragons Alignments Chart</Text>
        <Box bg={"#000000"} p={1} w="700px" />
      </Box>
    </Center>
  );
};
 

