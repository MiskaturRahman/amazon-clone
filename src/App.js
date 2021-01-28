import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { auth } from "./Login/firebase";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider/StateProvider";


function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);




  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">

            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
