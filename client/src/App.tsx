import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import Projection from "./organism/Projection";
import LandingPage from "./organism/LandingPage";
import Testimonials from "./organism/Testimonials";
import InfoPage from "./organism/InfoPage";
import Subscription from "./organism/Subscription";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import LoginPage from "./organism/LoginPage";

const App = function () {
  //1- Use fetch inside useEffect call API
  //2- Dispath an action to populate the store with the data

  return (
    <>
      <Flex
        bgGradient="linear(to-b, gray.600, gray.800)"
        direction="column"
        h="100vh"
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path={`/`} element={<LandingPage />} />
            <Route path={`/dashboard`} element={<Dashboard />} />
            <Route path={`/projections`} element={<Projection />} />
            <Route path={`/testimonials`} element={<Testimonials />} />
            <Route path={`/info`} element={<InfoPage />} />
            <Route path={`/login`} element={<LoginPage />} />
            <Route path={`/subscription`} element={<Subscription />} />
          </Routes>
        </Router>
      </Flex>
    </>
  );
};

export default App;
