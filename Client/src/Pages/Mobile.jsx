import React, { useEffect, useState } from "react";
import axios from "axios";

import MobileHelp from "../Components/subPages/MobileHelp";
import { Box, Flex } from "@chakra-ui/react";
import { CategorySidebar } from "../Components/SidebarCategory/CategorySidebar";
import Loader from "../Components/Loader";
function Mobile() {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  async function getData(page) {
    setloading(true);

    await axios
      .get(`${process.env.REACT_APP_API_KEY}mobile?page=${page}`)
      .then((res) => {
        setloading(false);

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
          ) : data.length ? (
            <MobileHelp
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

export default Mobile;
