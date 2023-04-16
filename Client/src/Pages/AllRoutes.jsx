import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../hoc/PrivateRoute";
import Cart from "./Cart";
import Groceries from "./Groceries";
import { Home } from "./Home";
import Login from "./Login";
import Men from "./Men";
import Mobile from "./Mobile";
import OrderSuccessfull from "./OrderSuccessfull";
import SignUp from "./SignUp";
import SingleData from "./SingleData";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/men" element={<Men />} />
        <Route path="/orderSuccessfull" element={<OrderSuccessfull />} />
        <Route path="/product/:id" element={<SingleData />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
