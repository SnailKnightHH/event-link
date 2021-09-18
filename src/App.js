import NavBar from "./Components/NavBar";
import DropDownList from "./Components/DropDownList";
import SignInPage from "./Components/SignInPage";
import ParticipantPage from "./Components/ParticipantPage";
import EventInfo from "./Components/EventInfo";

import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
    <React.Fragment>
      {/* {!isAuth && <SignInPage />}
      {isAuth && <ParticipantPage />}
      {isAuth && <EventInfo />} */}
      <ParticipantPage />
    </React.Fragment>
  );
}

export default App;
