import { Flex } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { toast } from "react-toastify";
import Navbar from "./organism/Navbar";
import Dashboard from "./organism/Dashboard";
import Projection from "./organism/Projection";
import LandingPage from "./organism/LandingPage";
import Testimonials from "./organism/Testimonials";
import InfoPage from "./organism/InfoPage";
import Subscription from "./organism/Subscription";
import LoginPage from "./organism/LoginPage";
import Notifications from "./organism/Notifications";
import { ReduxState } from "./types/ReduxState";
import SubscriptionSuccess from "./organism/SubscriptionSuccess";
import { SOCKET_EVENTS as EVENTS } from "./Socket";
const App = function () {
  const dispatch = useDispatch();
  // const navigate= useNavigate();
  const notify = () =>
    toast.info("New Notification!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // onClick: ()=>{
      //   navigate("/notifications")

      // }
    });
  const userId = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.userId;
  });

  const partnerrId = useSelector((state: ReduxState) => {
    //@ts-ignore
    return state.displayCategories.userId;

});


  useEffect(() => {
    console.log("EFFE", userId);
    let Socket = io("https://double-mattress.herokuapp.com");
    Socket.on(EVENTS.CONNECT, () => {
      console.log("Connected");
      Socket.on(EVENTS.ID.REQUEST, () => {
        console.log("RECIEVE EVENT", EVENTS.ID.REQUEST);
        console.log("EMIT EVENT", EVENTS.ID.CONFIRM);
        Socket.emit(EVENTS.ID.CONFIRM, { userId });
        Socket.emit(EVENTS.NOTIFICATIONS.GET);
      });
      Socket.on(EVENTS.NOTIFICATIONS.UPDATED, (notifications: any) => {
        console.log(EVENTS.NOTIFICATIONS.UPDATED, notifications);
        dispatch({ type: "ADD_NOTIFICATION", payload: notifications });
        dispatch({ type: "NEW_NOTIFICATION", payload: true });
        notify();
      });
    });
  }, []);

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
            <Route path={`/notifications`} element={<Notifications />} />
            <Route path={`/confirm`} element={<SubscriptionSuccess />} />
          </Routes>
        </Router>
      </Flex>
    </>
  );
};

export default App;
