import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/checkout">
            <h1>Hello Its ema-john checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Hello Its ema-john Ecommerce site</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
