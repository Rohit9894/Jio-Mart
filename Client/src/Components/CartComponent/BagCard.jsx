import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { PostData } from "../../Context/PostData";
import { ARButton } from "./ARButton";

function BagCard({ item, getData }) {
  const { img, title, price, qty, _id } = item;

  function deleteData(id) {
    console.log(id);
    axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
      getData();
    });
  }
  return (
    <div>
      <Box px="20px" w="full" background={"white"}>
        <Box py="20px" borderBottom={"0.5px solid pink"}>
          <Flex justifyContent={"space-between"}>
            <Flex gap="20px">
              <Box>
                <Img h="75px" w="75px" p="5px 5px 5px 10px" src={img} alt="" />
              </Box>
              <Box lineHeight={"44px"} textAlign={"left"}>
                <Heading fontSize={"16px"}>{title}</Heading>
                <Text fontWeight={"semibold"} fontSize="18px">
                  {" "}
                  ₹ {price}.00
                </Text>
                <Box textAlign={"left"} lineHeight="24px">
                  <Text fontWeight={"semibold"} fontSize="14px">
                    Sold by{" "}
                    <span style={{ color: "#008ecc" }}>Reliance Retails</span>
                  </Text>

                  <Button
                    onClick={() => deleteData(_id)}
                    cursor={"pointer"}
                    fontWeight={"400"}
                    color="#7f7f7f"
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            </Flex>
            <Flex justifyContent="flex-end" flexDir={"column"}>
              <ARButton text={qty} id={_id} getData={getData} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default BagCard;
