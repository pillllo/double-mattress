import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/displayReducers";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
=======

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
let store = createStore(
  reducers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
<<<<<<< HEAD
        <Router>
        <App />
        </Router>
=======
        <App />
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
