import {
  Box,
  FormLabel,
  Text,
  Input,
  Img,
  Stack,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { PostData } from "../Context/PostData";
const init = {
  email: "",
  password: "",
};

function Login() {
  const [formState, setFormState] = useState(init);
  const navigate = useNavigate();
  const { userLogin } = useContext(AppContext);
  const { Toast, validateEmail } = useContext(PostData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(formState.email)) {
      Toast("error", "Invalid Email Address", "error");
      return;
    }

    return fetch(`${process.env.REACT_APP_API_KEY}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "success") {
          Toast("success", "Login sucessfully", "success");
          setFormState(init);

          localStorage.setItem("token", JSON.stringify(res.token));

          localStorage.setItem("details", JSON.stringify(res.user));
          userLogin();
          navigate("/cart");
          return;
        }
        if (res.msg === "incorrect password") {
          Toast("Failed", "Incorrect Password", "error");
          return;
        }
        if (res.msg === "email not resgisterd") {
          Toast("Failed", "Email not Registred", "error");
          navigate("/signup");
          return;
        }
      });
  }

  const { email, password } = formState;

  const styles = {
    rounded: "5px",
  };
  return (
    <div>
      <Box
        h={["100vh", "auto"]}
        bg="blackAlpha.50"
        mt={["120px", "128px"]}
        border={"1px solid #f5f5f5 "}
      >
        <Flex
          flexDir={["row", "row", "column", "row"]}
          w={["100%", "100%", "100%", "90%"]}
          m="auto"
          mt="50px"
          justify="space-between"
          bg="white"
        >
          <Img
            display={["none", "block", "block"]}
            borderLeftRadius={"15px"}
            src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          />
          <Box
            w={["100%", "500px"]}
            pr={["0px", "0xp", "40px", "80px"]}
            p={["20px", "0px"]}
            pl={["0%", "0%", "40px", "0%"]}
          >
            <Stack mt="20px" gap="-0.5" textAlign={"left"}>
              <Heading fontSize={"24px"}>Sign in</Heading>
              <Text>Sign in to access your orders,Offers and Wishlist</Text>
            </Stack>
            <Box mt="30px">
              <form onSubmit={handleSubmit}>
                <FormLabel>Email Adress</FormLabel>
                <Input
                  {...styles}
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required={true}
                />
                <FormLabel>password</FormLabel>
                <Input
                  {...styles}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required={true}
                />

                <Flex justifyContent={"space-between"}>
                  <Text
                    textAlign={"left"}
                    textDecoration={"underline"}
                    fontWeight="500"
                    mt="10px"
                  >
                    Forgot password ?
                  </Text>
                  <Link to="/signup">
                    <Text
                      textAlign={"left"}
                      fontWeight="500"
                      mt="10px"
                      color="blue"
                      textDecoration={"underline"}
                    >
                      Register
                    </Text>
                  </Link>
                </Flex>
                <Stack mt="35px" gap="15px">
                  <Button type="submit" w="100%" colorScheme={"blue"}>
                    Log in
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Login;
