import NavBar from "./Components/NavBar";
import DropDownList from "./Components/DropDownList";
import SignInPage from "./Components/SignInPage";
import ParticipantPage from "./Components/ParticipantPage";
import EventInfoPage from "./Components/EventInfoPage";
import SignUpPage from "./Components/SignUpPage";
import AccountMenu from "./Components/AccountMenu";
import HostPage from "./Components/HostPage";
import "./App.css";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Profile from "./Components/Profile";
import React from "react";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/">
    //       <Redirect to="/Sign-in" />
    //     </Route>
    //     <Route exact to="/Sign-in">
    //       {!isAuth && <SignInPage />}
    //     </Route>
    //     <Route exact to="/Main">
    //       {isAuth && <NavBar />}
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Redirect to="/SignIn" />
          </Route>
          <Route exact path="/SignIn">
            <SignInPage />
          </Route>
          <Route exact path="/SignUp">
            <SignUpPage />
          </Route>
          <Route exact path="/main">
            <ParticipantPage />
          </Route>
          <Route exact path="/Host">
            <HostPage />
          </Route>
          <Route exact path="/info">
            <EventInfoPage />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
/* {!isAuth && <SignInPage />}
      {isAuth && <ParticipantPage />}
      {isAuth && <EventInfo />} */
export default App;
