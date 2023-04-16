import { Box, Flex, Heading } from "@chakra-ui/react";

import Bag from "../Components/CartComponent/Bag";
import Payment from "../Components/CartComponent/Payment";
import { HelpState } from "../Context/PostData";

function Cart() {
  const { cartData, getCartData } = HelpState();
  document.title = "jiomart-cart";
  return (
    <div>
      <Flex
        bg="blackAlpha.50"
        justifyContent={"center"}
        gap="20px"
        mt="128px"
        flexDirection={["column", "row", "row", "row"]}
      >
        <Box w={["100%", "50%"]}>
          <Heading mt="10px" textAlign={"left"} fontSize={"26px"}>
            My Cart ({cartData.length})
          </Heading>
          <Bag data={cartData} getData={getCartData} />
        </Box>
        <Box w={["100%", "38%"]} mt={["10px", "80px"]} mb="10px">
          <Payment data={cartData} getData={getCartData} />
        </Box>
      </Flex>
    </div>
  );
}

export default Cart;
