import { Flex } from "@chakra-ui/react";
import DoubleSwitch from "./atoms/DoubleSwitch";
import MainButton from "./atoms/MainButton";
import DashboardCategory from "./atoms/DashboardCategory";
import DashboardPieChart from "./atoms/DashboardPieChart";
import ProjectionLineChart from "./atoms/ProjectionLineChart";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";

const App = function () {
  return (
    <Flex
      bgGradient="linear(to-b, gray.600, gray.900)"
      direction="column"
      h="100vh"
    >
      <Navbar />
      <Dashboard />
    </Flex>
  );
};

export default App;
