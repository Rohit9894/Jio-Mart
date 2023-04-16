import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { BsPlus } from "react-icons/bs";
function AddButton() {
  return (
    <div>
      <Button
        w="full"
        bg={"#008ecc"}
        h="36px"
        borderRadius={"4px"}
        lineHeight="36px"
        border={0}
        color="white"
        fontSize={"14px"}
        mt="5px"
        _hover={{ background: "#008ecc" }}
      >
        <Flex gap={["0px", "60px"]} alignItems="center">
          <Text display={["block", "block", "block", "none", "none"]}>
            Add{" "}
          </Text>
          <Text display={["none", "none", "none", "block", "block"]}>
            Add to Cart{" "}
          </Text>
          <BsPlus
            size={"22px"}
            style={{
              color: "white",
            }}
          />
        </Flex>
      </Button>
    </div>
  );
}

export default AddButton;
