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
import { ReduxState } from "./types/ReduxState";

const App = function () {
  //1- Use fetch inside useEffect call API
  //2- Dispath an action to populate the store with the data
  const userObj = useSelector((state: ReduxState) => {
    if (Array.isArray(state.displayCategories.mainUser)) {
      //@ts-ignore
      console.log(state.displayCategories.mainUser[0]);
      //@ts-ignore
      return state.displayCategories.mainUser[0];
    }
  });

  useEffect(() => {}, [userObj]);

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
            <Route
              path={`/projections`}
              element={
                //@ts-ignore
                userObj?.activeSubscription ? <Projection /> : <Subscription />
              }
            />
            <Route path={`/testimonials`} element={<Testimonials />} />
            <Route path={`/info`} element={<InfoPage />} />
            <Route path={`/login`} element={<LoginPage />} />
            <Route path={`/subscription`} element={<Subscription />} />
            <Route path={`/notifications`} element={<Dashboard />} />
          </Routes>
        </Router>
      </Flex>
    </>
  );
};

export default App;
