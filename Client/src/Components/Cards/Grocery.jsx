import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostData } from "../../Context/PostData";
import AddButton from "../Helper/AddButton";
function Grocery({ item }) {
  const { img, title, price, _id } = item;
  const { postData } = useContext(PostData);

  return (
    <div>
      <Flex
        flexDir={["row", "row", "row", "column"]}
        rounded={["none", "none", "none", "xl"]}
        justifyContent={["none", "none", "none", "space-between"]}
        p="14px"
        gap="20px"
        border={["none", "none", "none", "1px solid rgba(112,112,112,.38)"]}
        borderBottom={[
          "1px solid rgba(112,112,112,.38)",
          "1px solid rgba(112,112,112,.38)",
          "1px solid rgba(112,112,112,.38)",
          "1px solid rgba(112,112,112,.38)",
        ]}
        h={["auto", "auto", "auto", "323px"]}
      >
        <Link to={`/product/${_id}`} state="grocery">
          <Img
            h={["120px", "130px", "140px", "150px"]}
            w={["120px", "130px", "140px", "150px"]}
            src={img}
            alt=""
          />
        </Link>
        <Flex
          w={["270px", "full", "full"]}
          mt={[0, 0, 0, "-20px"]}
          gap="20px"
          flexDir={["column"]}
        >
          <Stack textAlign={"left"} gap="1px">
            <Text fontSize="14px" fontWeight="bold">
              {title}
            </Text>
            <Text>
              M.R.P <b>{` : ₹ ${price}`}</b>
            </Text>
          </Stack>

          <Flex justifyContent={"flex-end"}>
            <Box
              w={["100px", "150px", "200px", "100%"]}
              onClick={() => postData(item)}
            >
              <AddButton />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Grocery;
