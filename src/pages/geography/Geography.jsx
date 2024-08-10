import { Box } from "@mui/material";

import Header from "../../components/Header";
import Geo from "./Geo";

const Geography = () => {
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};

export default Geography;
