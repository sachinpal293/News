import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {ClerkProvider} from "@clerk/clerk-react"
import { dark } from '@clerk/themes';
const root = document.getElementById("root");
const rootElement = createRoot(root);


const PUBLISHABLE_KEY = "pk_test_dXB3YXJkLW1hbGFtdXRlLTE4LmNsZXJrLmFjY291bnRzLmRldiQ"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


rootElement.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark
    }} 
    >
    <Provider store={store}>
      <App />
    </Provider>
    </ClerkProvider>
  
  </React.StrictMode>
);

reportWebVitals();
