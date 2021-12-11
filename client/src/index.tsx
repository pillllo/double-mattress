import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/displayReducers";
import {
  BrowserRouter as Router,
} from "react-router-dom";
let store = createStore(
  reducers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
        <App />
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
