import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

function Loader() {
  const data = new Array(12).fill(0);
  console.log(data);
  return (
    <div>
      <SimpleGrid columns={[1, 1, 1, 4]} gap="10px">
        {data.map((item) => (
          <Skeleton h="200px" />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Loader;
