import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import Projection from "./organism/Projection";
import LandingPage from "./organism/LandingPage";
import Testimonials from "./organism/Testimonials";
import InfoPage from "./organism/InfoPage";
import Subscription from "./organism/Subscription";
import LoginPage from "./organism/LoginPage";
import { ReduxState } from "./types/ReduxState";
import SubscriptionSuccess from "./organism/SubscriptionSuccess";

const App = function () {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   let Socket = io("https://double-mattress.herokuapp.com");
  //   Socket.on("notifications-updated", (notifications) => {
  //     dispatch({ type: "ADD_NOTIFICATION", payload: notifications });
  //     dispatch({ type: "NEW_NOTIFICATION", payload: true });
  //   });
  // }, []);

  const userObj = useSelector((state: ReduxState) => {
    //@ts-ignore
    if (state.displayCategories?.mainUser) {
      //@ts-ignore
      return state.displayCategories.mainUser;
    }
  });

  // LEAVE HERE FOR NOW
  // const [paid, setPaid]= useState(false);
  // useEffect(() => {
  //     //@ts-ignore
  //   if(userObj?.activeSubscription){
  //     setPaid(true);
  //   }
  // }, [userObj,paid]);

  //@ts-ignore
  const paidPath = userObj?.activeSubscription ? (
    <Projection />
  ) : (
    <Subscription />
  );

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
            <Route path={`/projections`} element={paidPath} />
            <Route path={`/testimonials`} element={<Testimonials />} />
            <Route path={`/info`} element={<InfoPage />} />
            <Route path={`/login`} element={<LoginPage />} />
            <Route path={`/subscription`} element={<Subscription />} />
            <Route path={`/notifications`} element={<Dashboard />} />
            <Route path={`/confirm`} element={<SubscriptionSuccess />} />
          </Routes>
        </Router>
      </Flex>
    </>
  );
};

export default App;
