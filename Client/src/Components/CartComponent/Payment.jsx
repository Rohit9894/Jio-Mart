import {
  Flex,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  InputRightElement,
  VStack,
  Image,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { HelpState } from "../../Context/PostData";

function Payment({ data, getData }) {
  let total = data.reduce((a, b) => a + b.qty * b.price, 0);
  const { changeNumber, user } = HelpState();
  const navigate = useNavigate();
  function deleteAll() {
    console.log(user._id);
    axios.delete(`http://localhost:8080/cart/all/${user._id}`).then((res) => {
      getData();
      navigate("/orderSuccessfull");
    });
  }
  return (
    <div>
      <VStack w="full" gap="4" bg="white" p="25px">
        <Flex w="full" align={"center"} justify="space-between">
          <Text fontWeight={"bold"}>Apply Coupon</Text>
          <Text color="red">VIEW ALL</Text>
        </Flex>
        <InputGroup w="full">
          <InputLeftElement
            children={
              <Image src="https://www.jiomart.com/msassets/images/icons/offer-grey.svg" />
            }
          />
          <Input
            variant="flushed"
            type="text"
            placeholder="Enter Coupon Code"
          />
          <InputRightElement
            mr="10px"
            children={<Text cursor={"pointer"}>APPLY</Text>}
          />
        </InputGroup>
      </VStack>
      <Box mb="20px" px="24px" py="25px" mt="20px" w="full" bg="white">
        <Heading
          mb="10px"
          textAlign={"left"}
          fontSize={"18px"}
          fontWeight="500"
        >
          Payment Details
        </Heading>
        <Flex flexDir={"column"} gap="5px">
          <Flex
            justifyContent={"space-between"}
            borderBottom="1px solid pink"
            py="8px"
          >
            <Text color="#7f7f7f">MRP Total</Text>
            <Text fontWeight={"400"}> ₹ {changeNumber(total)}.00</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            borderBottom="1px solid pink"
            py="8px"
          >
            <Text color="#7f7f7f"> Product Discount</Text>
            <Text fontWeight={"400"}> ₹ 00.00</Text>
          </Flex>
          <Flex justifyContent={"space-between"} pt="8px" pb="2px">
            <Text fontWeight={"500"}> Total Amount</Text>
            <Text fontWeight={"500"}> ₹ {changeNumber(total)}.00</Text>
          </Flex>
          <Box>
            <Text
              color={"red"}
              fontSize="15px"
              textAlign={"right"}
              fontWeight={"bold"}
            >
              {" "}
              You Save ₹ 00.00
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent={"flex-end"}>
        <Button
          onClick={() => deleteAll()}
          rounded={"5px"}
          w="260px"
          colorScheme={"blue"}
        >
          Place Order
        </Button>
      </Flex>
    </div>
  );
}

export default Payment;
