import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Loca } from "./NavComps/Loca";
import { BsPersonFill, BsFillCartFill } from "react-icons/bs";
// import { Sidebar } from "./Sidebar";
import {
  Beauty,
  Electronics,
  Fashion,
  Groceries,
  HomeKitchen,
  Jewellery,
  PremiumFruits,
} from "./NavComps/Menus";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Contexts/UserAuth";
// import { useCartContext } from "../Contexts/CartContext";
import "./nav.css";
import { HelpState } from "../Context/PostData";
import { AppContext } from "../Context/AppContext";
export const Navbar = () => {
  const [active, setActive] = useState(" ");

  const { isOpen, onToggle } = useDisclosure();
  const { cartData, user } = HelpState();
  const { userLogout } = useContext(AppContext);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 70 ? setActive("navbar") : setActive("");
    }
  };

  return (
    <Box
      w="full"
      className={active}
      position={"fixed"}
      top="0"
      left={0}
      zIndex="9999"
    >
      <Flex
        direction={"column"}
        background={`#008ecc`}
        w="full"
        m="0px auto"
        py={2}
      >
        <Flex
          h="72px"
          w="full"
          boxSizing="boxderBox"
          align={"center"}
          justify={[
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "center",
          ]}
          gap={"32px"}
        >
          <Box onClick={onToggle}>
            <HamburgerIcon
              color={"white"}
              w={"32px"}
              h="32px"
              cursor={"pointer"}
              ml="20px"
            />
          </Box>
          <Box>
            <Link to="/">
              <Image
                h="28px"
                src="https://www.jiomart.com/assets/ds2web/images/jiomart_beta_logo.svg"
              ></Image>
            </Link>
          </Box>
          <InputGroup
            background={"white"}
            borderRadius={"10px"}
            maxW="72ch"
            display={["none", "none", "none", "flex"]}
          >
            <Input
              placeholder="Search essentials, groceries, and more …"
              type="search"
            ></Input>
            <InputRightElement>
              <Image
                src="https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg"
                cursor={"pointer"}
              ></Image>
            </InputRightElement>
          </InputGroup>
          <HStack
            gap={2}
            mr="20px"
            w={["auto", "auto", "auto", "45%", "auto", "15%"]}
          >
            <Link to={"/login"}>
              <HStack h="100%" color="white" cursor={"pointer"}>
                <Icon as={BsPersonFill} w="28px" h="32px"></Icon>
                <Text
                  width={"max-content"}
                  display={["none", "none", "none", "flex"]}
                >
                  {!user ? (
                    " Sign in / Sign up"
                  ) : (
                    <Text fontSize={"20px"}>{user.username}</Text>
                  )}
                </Text>
              </HStack>
            </Link>
            <Link path="/checkout/cart" to={"/cart"}>
              <Flex h="100%" color="white" cursor={"pointer"}>
                <Icon as={BsFillCartFill} w="22px" h="24px"></Icon>
                <Box
                  borderRadius={"50%"}
                  w="18px"
                  h="18px"
                  bg="red"
                  justify={"center"}
                  align="center"
                  color={"white"}
                  position="relative"
                  top={"-8px"}
                  right="15px"
                  fontSize="12px"
                  display={cartData.length !== 0 ? "block" : "none"}
                >
                  {cartData.length}
                </Box>
                <Text
                  ml={cartData.length === 0 ? "10px" : "none"}
                  display={["none", "none", "none", "flex"]}
                >
                  Cart
                </Text>
              </Flex>
            </Link>
            <Button
              onClick={() => userLogout()}
              cursor={"pointer"}
              colorScheme={"blue"}
            >
              Logout
            </Button>
          </HStack>
        </Flex>
        <InputGroup
          w={"95%"}
          m="auto"
          background={"white"}
          borderRadius={"10px"}
          display={["flex", "flex", "flex", "none"]}
        >
          <Input
            placeholder="Search essentials, groceries, and more …"
            type="search"
          ></Input>
          <InputRightElement>
            <Image
              src="https://www.jiomart.com/assets/version1662994539/smartweb/images/icons/list-view.svg"
              cursor={"pointer"}
            ></Image>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex
        background={`#ececed`}
        h="40px"
        maxW={"100%"}
        align={"center"}
        justify={["flex-start", "flex-start", "flex-start", "center"]}
        gap="32px"
      >
        <Flex h="40px" boxSizing="boxderBox" align={"center"} gap={"32px"}>
          <Loca />
          <Flex
            display={["none", "none", "none", "flex"]}
            h="40px"
            m="0px auto"
            boxSizing="boxderBox"
            align={"center"}
            justify={"center"}
            gap={"32px"}
          >
            <Link to="/groceries">
              <Groceries />
            </Link>
            <Link>
              <PremiumFruits />
            </Link>
            <Link>
              <HomeKitchen />
            </Link>
            <Link>
              <Fashion />
            </Link>
            <Link to="/mobile">
              <Electronics />
            </Link>
            <Link>
              <Beauty />
            </Link>
            <Link>
              <Jewellery />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        {/* <Sidebar shadow="md" onClick={onToggle} /> */}
      </Slide>
    </Box>
  );
};
