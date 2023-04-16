import React, { useEffect, useState } from "react";
import axios from "axios";

import MobileHelp from "../Components/subPages/MobileHelp";
function Men() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  async function getData(page) {
    setLoader(true);

    await axios.get(`${process.env.REACT_APP_API_KEY}men?page=${page}`).then((res) => {
      setLoader(false);

      setData([...data, ...res.data]);
    });
  }

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div>
      {data.length !== 0 ? (
        <MobileHelp
          OnChange={() => setPage(page + 1)}
          page={page}
          loader={loader}
          gorceryData={data}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Men;
