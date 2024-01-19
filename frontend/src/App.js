import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app_container">
      <img src={"/golfPic.jpg"} className="app__background_image" />
      <img
        src={"/app_background_accent.svg"}
        className="app__background_accent"
      />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/teams">
            <LoginFormPage />
          </Route>
          <Route path="/raffles">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default App;
