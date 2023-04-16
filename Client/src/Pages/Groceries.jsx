import React, { useEffect, useState } from "react";
import axios from "axios";
import GroceryHelp from "../Components/subPages/GroceryHelp";
import { Box, Flex } from "@chakra-ui/react";
import { CategorySidebar } from "../Components/SidebarCategory/CategorySidebar";
import Loader from "../Components/Loader";
function Groceries() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  document.title = "JioMart-Groceries";
  async function getData(page) {
    setLoading(true);

    await axios
      .get(`${process.env.REACT_APP_API_KEY}grocery?page=${page}`)
      .then((res) => {
        setLoading(false);

        setData([...data, ...res.data]);
      });
  }

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div>
      <Flex pt="150px">
        <Box w="30%" display={["none", "none", "none", "block"]}>
          <CategorySidebar />
        </Box>
        <Box w="100%">
          {loading ? (
            <Loader />
          ) : data.length !== 0 ? (
            <GroceryHelp
              OnChange={() => setPage(page + 1)}
              page={page}
              loading={loading}
              gorceryData={data}
            />
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </div>
  );
}

export default Groceries;
