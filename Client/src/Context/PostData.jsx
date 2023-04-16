import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useToast } from "@chakra-ui/react";
export const PostData = createContext();
function PostDataProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [user, setUser] = useState({});
  const toast = useToast();
  // --fetching cartData-- //
  function getCartData() {
    axios.get(`${process.env.REACT_APP_API_KEY}cart`).then((res) => {
      setCartData(res.data);
    });
  }

  // --posting cartData-- //
  function postData(data) {
    console.log(data);
    data = { ...data, qty: 1, userid: user._id };
    axios.post(`${process.env.REACT_APP_API_KEY}cart`, data).then((res) => {
      getCartData();
    });
  }

  // --crating ToastAlert-- //
  function Toast(title, des, status) {
    toast({
      title: title,
      description: des,
      status: status,
      duration: 1000,
      isClosable: true,
      position: "bottom",
    });
  }

  // --validating Email-- //
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // --MakingPassword Strong-- //
  function strongPassword(str) {
    if (
      str.match(/[a-z]/g) &&
      str.match(/[A-Z]/g) &&
      str.match(/[0-9]/g) &&
      str.match(/[^a-zA-Z\d]/g) &&
      str.length >= 8
    ) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    getCartData();
    let data = JSON.parse(localStorage.getItem("details"));
    setUser(data);
  }, []);
  function changeNumber(num) {
    var commas = num.toLocaleString("en-US");
    return commas;
  }
  return (
    <PostData.Provider
      value={{
        postData,
        cartData,
        user,
        setUser,
        getCartData,
        Toast,
        validateEmail,
        strongPassword,
        changeNumber,
      }}
    >
      {children}
    </PostData.Provider>
  );
}
export const HelpState = () => {
  return useContext(PostData);
};

export default PostDataProvider;
