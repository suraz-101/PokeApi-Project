import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
// import { ReverseCount } from "./components/Questions/Question";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
