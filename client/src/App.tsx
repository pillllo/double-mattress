import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import Projection from "./organism/Projection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./reducers/displayReducers";
import ApiService from "./ApiServices";

const App = function () {
  //1- Use fetch inside useEffect call API
  //2- Dispath an action to populate the store with the data
  const expenses = useSelector((state: State) => {
    //@ts-ignore
    return state.displayCategories.expenses;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // ApiService.getTransactions({
    //   userId: "504de0d3-083c-4266-af33-2b71184d0c80",
    //   transactionsPerUser: 100,
    // })
    fetch("http://localhost:8888/transactions")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((payload) => {
        dispatch({ type: "GET_DATA", payload });
      });
  }, []);

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
          <Route path={`/projections`} element={<Projection />} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
