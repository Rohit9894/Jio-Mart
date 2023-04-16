import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import BagCard from "./BagCard";
import greatDeals from "../HomeComponents/Data/greatdeal.json";
import { BasketCrousel } from "../HomeComponents/Crousels/BasketCrousel";
import { useContext } from "react";
import { PostData } from "../../Context/PostData";
function Bag({ data, getData }) {
  let total = data.reduce((a, b) => a + b.qty * b.price, 0);
  const { changeNumber } = useContext(PostData);

  return (
    <div>
      <Flex px="20px" my="20px" justify={"space-between"}>
        <Text fontSize={"18px"} fontWeight={"500"}>
          Basket{" "}
          <span
            style={{
              fontSize: "14px",
              color: "#7f7f7f",
            }}
          >
            ({data.length} items)
          </span>
        </Text>
        <Text fontSize={"18px"} fontWeight={"500"}>
          ₹ {changeNumber(total)}.00
        </Text>
      </Flex>

      {data.map((item) => (
        <BagCard item={item} getData={getData} />
      ))}

      <Box display={["none", "none", "none", "block"]} mb="20px">
        <Box px="34px" mt="25px" bg="white" w="100%">
          <Heading textAlign={"left"} fontSize={"18px"} py="10px">
            Products You Might Like
          </Heading>
          <BasketCrousel data={greatDeals} />
        </Box>
        <Box px="34px" mt="15px" bg="white" w="100%">
          <Heading textAlign={"left"} fontSize={"18px"} py="10px">
            Top Deals
          </Heading>
          <BasketCrousel data={greatDeals} />
        </Box>
      </Box>
    </div>
  );
}

export default Bag;
