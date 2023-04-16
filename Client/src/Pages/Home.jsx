import { Box, Heading, Img } from "@chakra-ui/react";
import trendingBrands from "../Components/HomeComponents/Data/gdosmartphone";
import bpDemand from "../Components/HomeComponents/Data/bpDemand.json";
import trendingBrand from "../Components/HomeComponents/Data/trendingBrand.json";
import discountCorner from "../Components/HomeComponents/Data/discountCorner.json";
import ffDairy from "../Components/HomeComponents/Data/ffDairy.json";
import ffDairyTp from "../Components/HomeComponents/Data/ffDairyTp.json";
import greatdeals from "../Components/HomeComponents/Data/greatdeal.json";
import dailyGroceery from "../Components/HomeComponents/Data/dailyGrocerry.json";
import grocerytp from "../Components/HomeComponents/Data/grocerytp.json";
import neverbefore from "../Components/HomeComponents/Data/Neverseenbefore.json";
import trendyFashion from "../Components/HomeComponents/Data/trendyFashion.json";
import trendyTp from "../Components/HomeComponents/Data/trendyTp.json";

import ElecBestDealData from "../Components/HomeComponents/Data/ElecBestdealCarousel.json";

import cleanData from "../Components/HomeComponents/Data/Clean.json";
import lmbData from "../Components/HomeComponents/Data/LastMinBuy.json";
import household from "../Components/HomeComponents/Data/Household.json";
import { MultiItemSlideCarousel } from "../Components/HomeComponents/Crousels/MultiItemSlideCarousel";
import { SingleSlideCarousel } from "../Components/HomeComponents/Crousels/SingleSlideCarousel";
import { SimpleCarusel } from "../Components/HomeComponents/Crousels/SimpleCarusel";

import { Carousel3slide } from "../Components/HomeComponents/Crousels/Carousel3slide";

import { v4 as uuidv4 } from "uuid";
export const Home = () => {
  return (
    <Box w="full" mt="130px">
      <SingleSlideCarousel />
      <Box w="96%" m="auto" mt="10px">
        <Img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1672384860_bLOCK_BUSTER_dEALS_1_Desktop.jpg"
          alt=""
        />
        <Img
          w="100%"
          mt="10px"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668663411_Sim-Delivery_1240_X_194_px_web.jpg"
          alt=""
        />
      </Box>
      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Smartphones For Every Budget
          </Heading>
          <SimpleCarusel data={trendingBrands} />
        </Box>
      </Box>
      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Blockbuster Public Demand
          </Heading>
          <SimpleCarusel data={bpDemand} />
        </Box>
      </Box>
      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Trending Brands
          </Heading>
          <SimpleCarusel data={trendingBrand} />
        </Box>
      </Box>
      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Discount Corner
          </Heading>
          <SimpleCarusel data={discountCorner} />
        </Box>
      </Box>
      <Box my={2} p={["0", "4"]}>
        <Box my={"20px"} ml="8px">
          <Box
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3" textAlign={"left"}>
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Never Before Seen Prices
            </Heading>
            <MultiItemSlideCarousel data={neverbefore} />
          </Box>
        </Box>
      </Box>

      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Fantastic Food & Dairy
          </Heading>
          <SimpleCarusel data={ffDairy} />
        </Box>
      </Box>
      <Box my={2} p={["0", "4"]}>
        <Box ml="8px">
          <Box
            mt={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} my="15px" textAlign={"left"}>
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={ffDairyTp} />
          </Box>
        </Box>
      </Box>
      <Box ml="8px">
        <Box
          w={["100%", "100%", "100%", "95%", "95%", "95%"]}
          ml={[0, 0, 0, 5, 5, 6]}
        >
          <Heading fontSize={20} my="15px" textAlign={"left"}>
            Daily Grocery
          </Heading>
          <SimpleCarusel data={dailyGroceery} />
        </Box>
      </Box>

      <Box my={2} p={["0", "4"]}>
        <Box ml="8px">
          <Box
            mt={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} my="15px" textAlign={"left"}>
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={grocerytp} />
          </Box>
        </Box>
      </Box>

      <Carousel3slide data={ElecBestDealData} />

      <Box my={2} p={["0", "4"]}>
        <Box ml={"8px"}>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} my="15px" textAlign={"left"}>
              Trendy Fashion
            </Heading>
            <SimpleCarusel data={trendyFashion} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} my="15px" textAlign={"left"}>
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={trendyTp} />
          </Box>
        </Box>
      </Box>

      <Carousel3slide data={cleanData} />

      <Box my={2} p={["0", "4"]}>
        <Box ml={"8px"}>
          <Box
            display={["none", "none", "none", "block", "block", "block"]}
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Last Minute Festive Buys
            </Heading>
            <SimpleCarusel data={lmbData} />
          </Box>
        </Box>
        <Box ml="8px">
          <Box
            my={"20px"}
            w={["100%", "100%", "100%", "95%", "95%", "95%"]}
            ml={[0, 0, 0, 5, 5, 6]}
          >
            <Heading fontSize={20} mb="3">
              Top Picks
            </Heading>
            <MultiItemSlideCarousel data={greatdeals} />
          </Box>
        </Box>
      </Box>
      <Carousel3slide data={household} />
      <Box
        key={uuidv4()}
        m="10px auto"
        w="98%"
        display={["none", "none", "none", "block", "block", "block"]}
      >
        <img
          style={{ width: "100%" }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1674134906_1240x150.jpg"
          alt=""
        />
      </Box>
      <Box
        key={uuidv4()}
        m="10px auto"
        w="full"
        display={["block", "block", "block", "none", "none", "none"]}
      ></Box>
    </Box>
  );
};
