import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EventCards from "./Components/EventCards";
import NavBar from "./Components/NavBar";
import DropDownList from "./Components/DropDownList";
import SignInPage from "./Components/SignInPage";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <EventCards />
    <SignInPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
