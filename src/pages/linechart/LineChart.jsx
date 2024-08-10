import { Box } from "@mui/material";
import Header from "../../components/Header";
import Line from './Line'
const LineChart = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
};

export default LineChart;
