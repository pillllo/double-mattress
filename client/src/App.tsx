import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
const App = function () {
  return (
    <Flex
      bgGradient="linear(to-b, gray.600, gray.900)"
      direction="column"
      h="100vh"
    >
      <Router>
      <Route path={`/`} element={<Navbar/>}/>
      <Route path={`/dashboard`} element={<Dashboard/>}/>
      </Router>
    </Flex>
  );
};

export default App;
