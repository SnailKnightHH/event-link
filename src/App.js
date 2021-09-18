import NavBar from "./Components/NavBar";
import DropDownList from "./Components/DropDownList";
import SignInPage from "./Components/SignInPage";
import ParticipantPage from "./Components/ParticipantPage";
import EventInfo from "./Components/EventInfo";
import HostPage from "./Components/HostPage";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    // <Router>
    //   <React.Fragment>
    //     <Switch>
    //       <Route exact path="/">
    //         <SignInPage />
    //       </Route>
    //       <Route exact path="/main">
    //         <ParticipantPage />
    //       </Route>
    //     </Switch>
    //   </React.Fragment>
    // </Router>
    <HostPage />
  );
}
/* {!isAuth && <SignInPage />}
      {isAuth && <ParticipantPage />}
      {isAuth && <EventInfo />} */
export default App;
