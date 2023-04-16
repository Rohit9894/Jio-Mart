import {
  Box,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

import MobileCard from "../Cards/MobileCard";
import { CategorySidebar } from "../SidebarCategory/CategorySidebar";
import Loader from "../Loader";

const style = {
  bg: "white",
  color: "black",
  _hover: {
    background: "white",
    color: "black",
  },
  h: "26px",
  fontSize: "12px",
  border: "1px solid black",
  fontWeight: "normal",
};
function MobileHelp({ page, gorceryData, loading, OnChange }) {
  console.log(loading);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(gorceryData);
  }, [gorceryData]);

  function handleData(msg) {
    if (msg === "lth") {
      data.sort((a, b) => a.price - b.price);
      setData([...data]);
    } else if (msg === "htl") {
      data.sort((a, b) => b.price - a.price);
      setData([...data]);
    } else {
      setData(gorceryData);
    }
  }

  return (
    <div>
      <Box w="100%" ml={["0px", "0px", "0px", "16px"]}>
        {" "}
        <Box
          display={["none", "none", "none", "block"]}
          w="1025px"
          h="200px"
          bgImage="https://www.jiomart.com/assets/global/verticals/fashion_default_banner.svg"
        >
          <Heading
            textAlign={"left"}
            pl="20px"
            pt="20px"
            fontWeight={"semi-bold"}
          >
            Mobiles & Tablets
          </Heading>
        </Box>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          h="60px"
          px={["20px", "30px"]}
        >
          <Box>
            showing <b>{page * 12}</b> of <b>60</b> items
          </Box>
          <Flex px={["20px", "30px"]} gap="12px">
            <Text>Sort by: </Text>
            <Flex gap="20px">
              <Button
                {...style}
                onClick={() => {
                  handleData("htl");
                }}
              >
                High to Low
              </Button>
              <Button
                {...style}
                onClick={() => {
                  handleData("lth");
                }}
              >
                Low to High
              </Button>
              <Button
                {...style}
                onClick={() => {
                  handleData("all");
                }}
              >
                All Products
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Box bg="white" px={["12px", "12px", "20px"]} mt="20px">
          <Text
            textAlign={"left"}
            py="10px"
            fontWeight={"599"}
            fontSize={"14px"}
          >
            ALL PRODUCTS
          </Text>
          {loading ? (
            <Loader />
          ) : (
            <SimpleGrid columns={[1, 1, 1, 4]} gap="10px">
              {data.map((item) => (
                <MobileCard key={item._id} item={item} />
              ))}
            </SimpleGrid>
          )}
          {loading ? (
            <Spinner />
          ) : (
            <Button
              colorScheme={"blue"}
              mt="20px"
              color="white"
              onClick={() => OnChange(page + 1)}
            >
              Show more results
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default MobileHelp;
