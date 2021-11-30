import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const App = function () {
  //1- Use fetch inside useEffect call API
  //2- Dispath an action to populate the store with the data
  //
  useEffect(()=>{
    fetch("http://localhost:8888/transactions").then((res)=>{
      return res.json()
    }).then((data)=>{
      useDispatch("GET_DATA",data)

    })

  },[])
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
