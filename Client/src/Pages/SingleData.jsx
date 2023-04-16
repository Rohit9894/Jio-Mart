import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleSlideData from "../Components/SingleSlide.js/SingleSlideData";
import { AiFillBank } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

function SingleData() {
  const { id } = useParams();
  let { state } = useLocation();

  const [data, setData] = useState([]);
  let data2 = [
    {
      id: 1,
      img: data.img,
    },
    {
      id: 2,
      img: data.img,
    },
    {
      id: 3,
      img: data.img,
    },
    {
      id: 4,
      img: data.img,
    },
  ];
  function getData() {
    axios
      .get(`${process.env.REACT_APP_API_KEY}${state}/${id}`)
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, [id]);
  const { title, price } = data;
  return (
    <div>
      <Box
        w="100%"
        mt="126px"
        pt="0px"
        p={3}
        height={["auto", "100vh"]}
        bg={"blackAlpha.50"}
      >
        <Flex gap={"30px"} justify="center" flexDirection={["column", "row"]}>
          <Box
            w={["100%", "max-content"]}
            ml={["0px", "100px"]}
            borderRadius="20px"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
            <SingleSlideData data={data2} />
          </Box>
          <Box w="100%" textAlign={"left"} pt="20px">
            <Stack>
              <Text fontWeight={"semibold"} color="#8a5273">
                Private Label
              </Text>
              <Text fontWeight={"semibold"} fontSize="18px">
                {title}
              </Text>
              <Text fontWeight={"semibold"}>
                M.R.P: {price} (incl. of all taxes)
              </Text>
            </Stack>
            <Box my="30px" borderBottom={"1px solid gray"}></Box>
            <Box>
              <Box>
                <Heading>Offers(6)</Heading>
                <Text>BANK OFFERS</Text>
                <Flex alignItems={"center"} gap="20px">
                  <AiFillBank size={"25px"} />
                  <Text w="400px" lineHeight={"19px"}>
                    Get up to Rs.500 Cashback on using Paytm Wallet on JioMart
                    for Min. Txn of Rs 1000. 6 Offer/s Available
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fontSize={"16px"} fontWeight={"semibold"} color="red">
                  In Stock
                </Text>
                <Text color="#595959" fontSize={"14px"} fontWeight={"500"}>
                  Sold By Reliance Retail
                </Text>
                <Flex>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <MdLocationPin
                          style={{ marginTop: "12px" }}
                          size="25px"
                          color="#595959 "
                        />
                      }
                    />
                    <Input
                      w="200px"
                      type="tel"
                      variant={"unstyled"}
                      rounded="none"
                      borderBottom="2px solid #595959"
                      placeholder="Pin Code"
                    />
                  </InputGroup>
                  <Flex
                    border="1px solid gray"
                    justify={"center"}
                    alignItems="center"
                    padding={"10px"}
                    px="15px"
                    borderRadius="25px"
                    cursor={"pointer"}
                  >
                    <Text color="blue.600" fontWeight={"bold"}>
                      Apply
                    </Text>
                  </Flex>
                </Flex>
                <Box>
                  <Heading>Description</Heading>
                  <Text>
                    Our premium collection gives a elegant aura to your bedroom
                    .It comes in vibrant and soothing colors which gives a
                    fabulous effect to your body and soul. This bed sheet set is
                    made from superior quality cotton. It can be maintained very
                    easily. Be sure of gifting it to a loved one as well. High
                    thread count ensures the good quality of the cotton fabric.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default SingleData;
