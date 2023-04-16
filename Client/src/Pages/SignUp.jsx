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
import { Link } from "react-router-dom";
import { PostData } from "../Context/PostData";
const init = {
  username: "",
  email: "",
  password: "",
};
function SignUp() {
  const [formState, setFormState] = useState(init);

  const { strongPassword, validateEmail, Toast } = useContext(PostData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const { username, email, password } = formState;

  function handleSubmit(e) {
    console.log(formState);
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      Toast("error", "Invalid Email Address", "error");
      return;
    }
    if (!strongPassword(formState.password)) {
      Toast(
        "error",
        "password must contain Uppercase , Lowercase , SpecialCharacter,Number",
        "error"
      );

      return;
    }

    return fetch(`${process.env.REACT_APP_API_KEY}user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "success") {
          Toast("Sucessfully", "Successfully Registered", "success");
          setFormState(init);
          return;
        }
        if (res.msg === "already") {
          Toast("failed", "Already Exist", "error");
          setFormState(init);
          return;
        }
      });
  }
  const styles = {
    rounded: "5px",
  };
  return (
    <div>
      <Box bg="blackAlpha.50" mt="128px" border={"1px solid #f5f5f5 "}>
        <Flex w="90%" m="auto" mt="50px" justify="space-between" bg="white">
          <Img
            borderLeftRadius={"15px"}
            src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          />
          <Box w="500px" pr="80px">
            <Img h="150px" src="https://i.imgur.com/hGmW71B.png" alt="" />
            <Stack mt="20px" gap="-0.5" textAlign={"left"}>
              <Heading fontSize={"24px"}>Create Account</Heading>
              <Text>create account to geting the best offers</Text>
            </Stack>
            <Box mt="30px">
              <form onSubmit={handleSubmit}>
                <FormLabel>Username</FormLabel>
                <Input
                  {...styles}
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required={true}
                />
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
                <Link to="/login">
                  <Text
                    textAlign={"right"}
                    textDecoration={"underline"}
                    fontWeight="500"
                    color="blue"
                    mt="10px"
                  >
                    Already Have Acoount
                  </Text>
                </Link>

                <Stack mt="35px" gap="15px">
                  <Button type="submit" w="100%" colorScheme={"blue"}>
                    Sign up
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

export default SignUp;
