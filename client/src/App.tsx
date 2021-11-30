import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = function () {
  return (
    <Flex
      bgGradient="linear(to-b, gray.600, gray.900)"
      direction="column"
      h="100vh"
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path={`/dashboard`} element={<Dashboard />} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
