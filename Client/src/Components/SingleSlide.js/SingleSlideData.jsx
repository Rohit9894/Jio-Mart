import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import { Box } from "@chakra-ui/react";

function SingleSlide({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (i) {
      return (
        <img
          src={data[i].img}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      );
    },
    dotsClass: "slick-dots custom-indicator",
  };

  return (
    <div>
      <Box w={["100%", "400px"]} mt="30px">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <img
                style={{
                  height: "400px",
                  width: "100%",
                  margin: "auto",
                  borderRadius: "20px",
                }}
                src={item.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
}

export default SingleSlide;
