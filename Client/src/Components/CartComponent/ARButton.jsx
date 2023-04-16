import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

export const ARButton = ({ text, id, getData }) => {
  function inc(qty) {
    axios
      .patch(`http://localhost:8080/cart/${id}`, { qty: text + qty })
      .then(() => {
        getData();
      });
  }
  // const styles = {
  //   bg: "white",
  //   _hover: {
  //     background: "white",
  //   },
  // };
  return (
    <Flex align={"center"} gap="4">
      <Button onClick={() => inc(-1)} disabled={text === 0} bg="white">
        <Box cursor="pointer">
          <Image src="https://www.jiomart.com/msassets/images/icons/minus-bulecolor.svg"></Image>
        </Box>
      </Button>
      <Text fontWeight={"medium"}>{text}</Text>

      <Button onClick={() => inc(1)} bg="white">
        <Box cursor="pointer">
          <Image src="https://www.jiomart.com/msassets/images/icons/plus-bluecolor.svg"></Image>
        </Box>
      </Button>
    </Flex>
  );
};
