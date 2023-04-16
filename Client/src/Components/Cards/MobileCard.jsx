import { Box, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import AddButton from "../Helper/AddButton";
import { Link } from "react-router-dom";
import { HelpState } from "../../Context/PostData";

function MobileCard({ item }) {
  const { changeNumber, postData } = HelpState();
  return (
    <div>
      <Box
        key={uuidv4()}
        bg={"white"}
        w="full"
        display={["none", "none", "none", "block", "block", "block  "]}
      >
        <Box
          key={uuidv4()}
          borderBottom={["none", "1px solid rgba(111,114,132,.25)"]}
          borderRadius="5px"
          p="2"
          mr="10px"
        >
          <Box
            key={uuidv4()}
            position={"absolute"}
            w="50px"
            h="50px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            zIndex="5"
            bgImage={
              "https://www.jiomart.com/assets/version1664452279/jiomsite/images/icons/offer_bg.svg"
            }
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={"cover"}
          >
            <Text color={"white"} fontSize="12px" textAlign={"center"} w="40px">
              {item.off}
              <span style={{ fontSize: "10px" }}>%</span> OFF
            </Text>
          </Box>
          <Link to={`/product/${item._id}`} state="mobile">
            <Box p={2} w="full" height={"200px"} m="auto">
              <img src={item.img} alt=""></img>
            </Box>
          </Link>
          <Box textAlign={"left"}>
            <Text
              className="text2line"
              w="full"
              minH={"5ch"}
              fontSize={15}
              fontWeight={"bold"}
            >
              {item.title}
            </Text>
            <Text fontSize={17} fontWeight={"bold"}>
              ₹ {changeNumber(item.price)}.00
            </Text>
            <Text fontSize={12}>
              M.R.P: <del>{item.MRP}.00</del>
            </Text>
            <Text fontSize={12} color="#00a100">
              You Save ₹ {item.MRP - item.price}.00
            </Text>
          </Box>
          <Box onClick={() => postData(item)} key={uuidv4()}>
            <AddButton />
          </Box>
        </Box>
      </Box>
      <Box
        key={uuidv4()}
        bg={"white"}
        w="full"
        display={["block", "block", "block", "none", "none", "none"]}
      >
        <Flex
          key={uuidv4()}
          borderBottom={["1px solid rgba(111,114,132,.25)"]}
          mr="10px"
          justifyContent={"flex-start"}
          gap="20px"
        >
          <Box
            key={uuidv4()}
            position={"absolute"}
            w="50px"
            h="50px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            zIndex="5"
            bgImage={
              "https://www.jiomart.com/assets/version1664452279/jiomsite/images/icons/offer_bg.svg"
            }
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={"cover"}
          >
            <Text color={"white"} fontSize="12px" textAlign={"center"} w="40px">
              {item.off}
              <span style={{ fontSize: "10px" }}>%</span> OFF
            </Text>
          </Box>
          <Box p={2} height={"180px"}>
            <img src={item.img} alt=""></img>
          </Box>
          <Flex w="full" flexDir={"column"}>
            <Box textAlign={"left"}>
              <Text
                display={[" -webkit-box", "none"]}
                className="text2line"
                w="full"
                minH={"5ch"}
                fontSize={15}
                fontWeight={"bold"}
              >
                {item.title}
              </Text>
              <Text
                display={["none", "block"]}
                w="full"
                minH={"5ch"}
                fontSize={15}
                fontWeight={"bold"}
              >
                {item.title}
              </Text>
              <Text fontSize={17} fontWeight={"bold"}>
                ₹ {item.price}.00
              </Text>
              <Text fontSize={12}>
                M.R.P: <del>{item.MRP}.00</del>
              </Text>
              <Text fontSize={12} color="#00a100">
                You Save ₹ {item.MRP - item.price}.00
              </Text>
            </Box>
            <Flex>
              <Box
                onClick={() => postData(item)}
                w={["100px", "150px", "200px", "100%"]}
              >
                <AddButton />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default MobileCard;
