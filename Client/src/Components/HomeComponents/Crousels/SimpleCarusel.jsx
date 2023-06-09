import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import { settings2 } from "./setting";
import { v4 as uuidv4 } from "uuid";
export const SimpleCarusel = ({ data }) => {
  return (
    <Box className="multi">
      <Slider {...settings2}>
        {data.map((el) => (
          <Box key={uuidv4()} bg={"white"}>
            <Box p={2} key={uuidv4()}>
              {el.image ? (
                <img src={el.image} className="ImageItem" alt=""></img>
              ) : (
                ""
              )}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
