import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      a: {
        color: "blue.600",
        borderBottomColor: "gray.100",
        borderBottomWidth: "2px",
        _hover: {
          textDecoration: "none",
          borderBottomColor: "gray.500",
        },
      },
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
